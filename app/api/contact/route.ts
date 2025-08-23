import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, projectType, budget, timeline, message } = body

    console.log("[v0] Contact form submission received:", {
      name,
      email,
      projectType,
      budget,
      timeline,
      message,
      recipient: "ipxsdev@gmail.com",
    })

    // TODO: Implement actual email sending service (Resend, SendGrid, etc.)
    // For now, just return success to allow form to work

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully. Email functionality to be implemented.",
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to submit form" }, { status: 500 })
  }
}
