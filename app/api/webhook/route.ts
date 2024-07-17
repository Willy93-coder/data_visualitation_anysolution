function isValidNgsiLdPayload(payload: string): boolean {
  try {
    const obj = JSON.parse(payload);
    if (obj.id && obj.type && obj.id.includes("urn:ngsi-ld:")) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const text = await request.text();

    if (isValidNgsiLdPayload(text)) {
      console.log(text);
      return new Response("Payload processed", { status: 200 });
    } else {
      return new Response("Invalid NGSI-ld payload", { status: 400 });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
