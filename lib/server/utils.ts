import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import { decrypt } from "./encryption";

const attributeSchema = z.object({
  type: z.string(),
  value: z.unknown(),
  metadata: z.record(z.unknown()).optional(),
});

export const ngsiLdSchema = z
  .object({
    id: z.string().regex(/^urn:ngsi-ld:/),
    type: z.string(),
  })
  .catchall(attributeSchema.optional());

export type NgsildData = z.infer<typeof ngsiLdSchema>;

export async function getAccessToken() {
  const session = await getServerSession(authOptions);
  if (session) {
    const accessTokenDecrypted = decrypt(session.access_token);
    return accessTokenDecrypted;
  }
  return null;
}

export async function getIdToken() {
  const session = await getServerSession(authOptions);
  if (session) {
    const idTokenDecrypted = decrypt(session.id_token);
    return idTokenDecrypted;
  }
  return null;
}
