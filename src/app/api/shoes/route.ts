import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.X_ACCESS_KEY || "";
  try {
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${process.env.BIN_ID}/latest`,
      {
        headers: {
          "X-Access-Key": "$2a$10$O8utjBoS5V" + apiKey,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch data: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data); // Return the shoes data
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
