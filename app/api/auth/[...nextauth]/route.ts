import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import type { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { env } from "@/env";
import { jwtDecode } from "jwt-decode";
import { encrypt } from "@/lib/server/encryption";

async function refreshAccessToken(token: JWT) {
  const resp = await fetch(`${env.KEYCLOAK_REFRESH_TOKEN_URL}`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.KEYCLOAK_CLIENT_ID,
      client_secret: env.KEYCLOAK_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: token.refresh_token as string,
    }),
    method: "POST",
  });
  if (!resp.ok) {
    throw new Error(`HTTP error! status: ${resp.status}`);
  }
  const refreshToken = await resp.json();
  if (!resp.ok) throw refreshToken;

  return {
    ...token,
    access_token: refreshToken.access_token,
    decoded: jwtDecode(refreshToken.access_token),
    id_token: refreshToken.id_token,
    expires_at: Math.floor(Date.now() / 1000) + refreshToken.expires_in,
    refresh_token: refreshToken.refresh_token,
  };
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
        token.decoded = jwtDecode(account.access_token);
        token.id_token = account.id_token;
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
        token.expires_at = account.expires_at;
        return token;
      }

      const bufferTime = 60 * 1000;
      if (Date.now() < Number(token.expires_at!) * 1000 - bufferTime) {
        return token;
      } else {
        try {
          const refreshedToken = await refreshAccessToken(token);
          console.log("Token is refreshed.");
          return refreshedToken;
        } catch (error) {
          console.error(error);
          return { ...token, error: "RefreshAccessTokenError" };
        }
      }
    },
    async session({ session, token }) {
      // Send properties to the client
      session.access_token = encrypt(token.access_token);
      session.id_token = encrypt(token.id_token);
      session.roles = token.decoded.realm_access?.roles;
      session.error = token.error;
      return session;
    },
  },
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
