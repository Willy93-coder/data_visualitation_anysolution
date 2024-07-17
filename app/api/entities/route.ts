import { NextResponse } from "next/server";

const entitiesURL: string = process.env.ENTITIES_URL ?? "";

async function handler(): Promise<NextResponse> {
  try {
    // console.log(`Connecting to context broker: ${entitiesURL}`);
    const response = await fetch('http://www.anysolution.org:1027/v2/entities');

    if (!response.ok) {
      throw new Error(`Failed to connect to context broker: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to connect to context broker: ${error}`);
    return NextResponse.json({
      error: `Failed to connect to context broker: ${error}`,
      status: 500,
    });
  }
}

export default async function GET(): Promise<NextResponse> {
    console.log("GET /api/anysolution/v2/entities");
  return handler();
}
