import NextAuth, { TokenSet } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { env } from "../../../../env.mjs";

function requestRefreshOfAccessToken(token: JWT) {
  const body = new URLSearchParams();
  body.append("client_id", env.KEYCLOAK_CLIENT_ID);
  body.append("client_secret", env.KEYCLOAK_CLIENT_SECRET);
  body.append("grant_type", "refresh_token");
  body.append("refresh_token", token.refreshToken as string);

  return fetch(`${env.KEYCLOAK_ISSUER}/protocol/openid-connect/token`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    method: "POST",
    cache: "no-store",
  });
}

export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: env.KEYCLOAK_CLIENT_ID,
      clientSecret: env.KEYCLOAK_CLIENT_SECRET,
      issuer: env.KEYCLOAK_ISSUER,
    }),
  ],
  session: {
    maxAge: 60 * 30,
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.idToken = account.id_token;
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
        return token;
      }

      const bufferTime = 60 * 1000;
      if (Date.now() < Number(token.expiresAt!) * 1000 - bufferTime) {
        return token;
      } else {
        try {
          const response = await requestRefreshOfAccessToken(token);

          const tokens: TokenSet = await response.json();

          if (!response.ok) throw tokens;

          const updatedToken: JWT = {
            ...token,
            idToken: tokens.id_token,
            accessToken: tokens.access_token,
            expiresAt: Math.floor(
              Date.now() / 1000 + (tokens.expires_in as number)
            ),
            refreshToken: tokens.refresh_token ?? token.refreshToken,
          };
          return updatedToken;
        } catch (error) {
          console.error("Error refreshing access token", error);
          return { ...token, error: "RefreshAccessTokenError" };
        }
      }
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
