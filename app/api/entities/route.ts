import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    // console.log(`Connecting to context broker: ${entitiesURL}`);
    const response = await fetch('http://www.anysolution.org:1027/v2/entities');

    if (!response.ok) {
      throw new Error(`Failed to connect to context broker: ${response.status}`);
    }

    return NextResponse.json({ message: `${JSON.stringify(await response.json())}` });
  } catch (error) {
    console.error(`Failed to connect to context broker: ${error}`);
    return NextResponse.json({
      error: `Failed to connect to context broker: ${error}`,
      status: 500,
    });
  }
}
