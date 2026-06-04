import { incrementTotalBlocked } from "@/lib/metrics";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    await incrementTotalBlocked();

    return NextResponse.json({
      success: true,
      message: "Counter incremented",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return new NextResponse(message, { status: 500 });
  }
}
