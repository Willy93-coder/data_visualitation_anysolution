import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    access_token?: string;
    id_token?: string;
    roles?: string[];
    error?: string;
  }

  interface JWT {
    access_token?: string;
    id_token?: string;
    refresh_token?: string;
    expires_at?: number;
    decoded?: {
      realm_access?: {
        roles?: string[];
      };
    };
    error?: string;
  }
}
