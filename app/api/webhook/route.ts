import { sendEventToClient, NgsildData, ngsiLdSchema } from '@/lib/utils';

function isValidNgsiLdPayload(payload: any): boolean {
    try {
        const result = ngsiLdSchema.safeParse(payload);
        return result.success;
      } catch (error) {
        return false;
      }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!isValidNgsiLdPayload(body)) {
      return new Response("Invalid NGSI-ld payload", { status: 400 });
    }
    console.log(body);
    sendEventToClient(body as NgsildData);
    return new Response("Payload processed", { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}