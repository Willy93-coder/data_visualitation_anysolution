function isValidNgsiV2Payload(payload: string): boolean {
  try {
    const obj = JSON.parse(payload);
    if (obj.id && obj.type) {
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

    if (isValidNgsiV2Payload(text)) {
      console.log(text);
      return new Response("Payload processed", { status: 200 });
    } else {
      return new Response("Invalid NGSI-v2 payload", { status: 400 });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
