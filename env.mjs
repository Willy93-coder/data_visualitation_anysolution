import { z } from "zod";

if (typeof window != "undefined") {
  throw new Error("This module should only be imported on the server");
}

const envSchema = z.object({
  POSTGRES_URL: z.string(),
  KEYCLOAK_CLIENT_ID: z.string(),
  KEYCLOAK_CLIENT_SECRET: z.string(),
  KEYCLOAK_ISSUER: z.string(),
  NEXTAUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string(),
});

const env = envSchema.parse({
  POSTGRES_URL:
    process.env.POSTGRES_URL ||
    (() => {
      throw new Error("Missing POSTGRES_URL");
    })(),
  KEYCLOAK_CLIENT_ID:
    process.env.KEYCLOAK_CLIENT_ID ||
    (() => {
      throw new Error("Missing KEYCLOAK_CLIENT_ID");
    })(),
  KEYCLOAK_CLIENT_SECRET:
    process.env.KEYCLOAK_CLIENT_SECRET ||
    (() => {
      throw new Error("Missing KEYCLOAK_CLIENT_SECRET");
    })(),
  KEYCLOAK_ISSUER:
    process.env.KEYCLOAK_ISSUER ||
    (() => {
      throw new Error("Missing KEYCLOAK_ISSUER");
    })(),
  NEXTAUTH_URL:
    process.env.NEXTAUTH_URL ||
    (() => {
      throw new Error("Missing NEXTAUTH_URL");
    })(),
  NEXTAUTH_SECRET:
    process.env.NEXTAUTH_SECRET ||
    (() => {
      throw new Error("Missing NEXTAUTH_SECRET");
    })(),
});

export { env };
