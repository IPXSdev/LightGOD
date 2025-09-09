import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ ok: true })
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,OPTIONS,GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}

export async function POST(request: NextRequest) {
  const ct = request.headers.get("content-type") || ""

  // If this is a probe/health check with no JSON, don't throw
  if (!ct.includes("application/json")) {
    return NextResponse.json({ ok: true, note: "No JSON body; ignoring non-form POST" }, { status: 200 })
  }

  // Safely read the body without crashing on empty payloads
  let body: any
  const raw = await request.text()
  if (!raw || !raw.trim()) {
    return NextResponse.json({ error: "Empty JSON body" }, { status: 400 })
  }

  try {
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  // Contact form logic placeholder - form uses Gmail compose links instead
  return NextResponse.json({ success: true, received: body })
}
