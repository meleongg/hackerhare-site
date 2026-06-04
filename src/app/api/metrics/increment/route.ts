import { incrementTotalBlocked } from "@/lib/metrics";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const AGENT_HEADER = "x-hackerhare-agent";
const AGENT_SECRET = "hare-covert-agent-telemetry-2026";

const corsAllowOrigin = {
  "Access-Control-Allow-Origin": "*",
} as const;

const corsPreflightHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, x-hackerhare-agent",
} as const;

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsPreflightHeaders,
  });
}

export async function POST(request: Request) {
  const agentKey = request.headers.get(AGENT_HEADER);

  if (agentKey !== AGENT_SECRET) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: corsAllowOrigin,
    });
  }

  try {
    await incrementTotalBlocked();

    return NextResponse.json(
      {
        success: true,
        message: "Counter incremented",
      },
      { headers: corsAllowOrigin },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return new NextResponse(message, {
      status: 500,
      headers: corsAllowOrigin,
    });
  }
}
