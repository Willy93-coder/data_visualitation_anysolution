import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    const response = await fetch("http://www.anysolution.org:1027/v2/entities");

    if (!response.ok) {
      throw new Error(
        `Failed to connect to context broker: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return NextResponse.json({ message: data });
  } catch (error: any) {
    console.error(`Failed to connect to context broker: ${error.message}`);
    return NextResponse.json({
      error: `Failed to connect to context broker: ${error.message}`,
      status: 500,
    });
  }
}
