import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const ADMIN_EMAIL = "noreply@spacedjcommand.com"

function buildConfirmationHtml(data: {
  name: string
  eventDate: string
  eventType: string
  venue: string
  message: string
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;background-color:#0B0F1C;color:#e0e0e0;font-family:'Courier New',Courier,monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0F1C;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="padding:30px;text-align:center;border:1px solid #39FF14;border-bottom:none;background-color:#0d1225;">
              <h1 style="margin:0;font-size:28px;font-weight:900;letter-spacing:6px;color:#39FF14;text-transform:uppercase;text-shadow:0 0 10px #39FF1480;">
                SPACE DJ COMMAND
              </h1>
              <p style="margin:8px 0 0;font-size:11px;letter-spacing:4px;color:#888;text-transform:uppercase;">
                Transmission Confirmed
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:30px;border:1px solid #333;border-top:none;background-color:#111827;">
              <p style="margin:0 0 20px;font-size:14px;color:#ccc;line-height:1.6;">
                Greetings, <strong style="color:#39FF14;">${data.name}</strong>.
              </p>
              <p style="margin:0 0 24px;font-size:14px;color:#ccc;line-height:1.6;">
                Your deployment request has been received by Space DJ Command. Our team is reviewing your transmission and will respond within 48 standard hours.
              </p>

              <!-- Mission Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;border:1px solid #333;background-color:#0B0F1C;">
                <tr>
                  <td style="padding:16px;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:3px;color:#39FF14;text-transform:uppercase;">Mission Details</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 16px 12px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#888;width:120px;vertical-align:top;">Event Type</td>
                        <td style="padding:6px 0;font-size:12px;color:#e0e0e0;">${data.eventType}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#888;vertical-align:top;">Date</td>
                        <td style="padding:6px 0;font-size:12px;color:#e0e0e0;">${data.eventDate}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#888;vertical-align:top;">Venue</td>
                        <td style="padding:6px 0;font-size:12px;color:#e0e0e0;">${data.venue}</td>
                      </tr>
                      ${data.message ? `
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#888;vertical-align:top;">Message</td>
                        <td style="padding:6px 0;font-size:12px;color:#e0e0e0;">${data.message}</td>
                      </tr>` : ""}
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:12px;color:#888;line-height:1.6;">
                If you need to amend your request, reply to this transmission.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px;text-align:center;">
              <p style="margin:0;font-size:10px;letter-spacing:2px;color:#555;text-transform:uppercase;">
                Space DJ Command &mdash; Elite Musical Command Across Known and Unknown Space
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function buildNotificationHtml(data: {
  name: string
  email: string
  eventDate: string
  eventType: string
  venue: string
  message: string
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;background-color:#0B0F1C;color:#e0e0e0;font-family:'Courier New',Courier,monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0F1C;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="padding:30px;text-align:center;border:1px solid #39FF14;border-bottom:none;background-color:#0d1225;">
              <h1 style="margin:0;font-size:28px;font-weight:900;letter-spacing:6px;color:#39FF14;text-transform:uppercase;text-shadow:0 0 10px #39FF1480;">
                INCOMING TRANSMISSION
              </h1>
              <p style="margin:8px 0 0;font-size:11px;letter-spacing:4px;color:#888;text-transform:uppercase;">
                New Deployment Request
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:30px;border:1px solid #333;border-top:none;background-color:#111827;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #333;background-color:#0B0F1C;">
                <tr>
                  <td style="padding:16px;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:3px;color:#39FF14;text-transform:uppercase;">Contact Details</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 16px 16px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#888;width:120px;vertical-align:top;">Name</td>
                        <td style="padding:6px 0;font-size:12px;color:#e0e0e0;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#888;vertical-align:top;">Email</td>
                        <td style="padding:6px 0;font-size:12px;color:#e0e0e0;">
                          <a href="mailto:${data.email}" style="color:#39FF14;text-decoration:none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#888;vertical-align:top;">Event Type</td>
                        <td style="padding:6px 0;font-size:12px;color:#e0e0e0;">${data.eventType}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#888;vertical-align:top;">Date</td>
                        <td style="padding:6px 0;font-size:12px;color:#e0e0e0;">${data.eventDate}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#888;vertical-align:top;">Venue</td>
                        <td style="padding:6px 0;font-size:12px;color:#e0e0e0;">${data.venue}</td>
                      </tr>
                      ${data.message ? `
                      <tr>
                        <td style="padding:6px 0;font-size:12px;color:#888;vertical-align:top;">Message</td>
                        <td style="padding:6px 0;font-size:12px;color:#e0e0e0;">${data.message}</td>
                      </tr>` : ""}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px;text-align:center;">
              <p style="margin:0;font-size:10px;letter-spacing:2px;color:#555;text-transform:uppercase;">
                Space DJ Command &mdash; Automated Notification
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, email, eventDate, eventType, venue, message } = body

    if (!name || !email || !eventDate || !eventType || !venue) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      )
    }

    const templateData = {
      name: String(name),
      email: String(email),
      eventDate: String(eventDate),
      eventType: String(eventType),
      venue: String(venue),
      message: message ? String(message) : "",
    }

    // Send both emails in parallel
    const [confirmationResult, notificationResult] = await Promise.all([
      // Confirmation email to the person who submitted
      resend.emails.send({
        from: "Space DJ Command <noreply@spacedjcommand.com>",
        to: [templateData.email],
        subject: "Transmission Received -- Space DJ Command",
        html: buildConfirmationHtml(templateData),
      }),

      // Notification email to admin
      resend.emails.send({
        from: "Space DJ Command <noreply@spacedjcommand.com>",
        to: [ADMIN_EMAIL],
        replyTo: templateData.email,
        subject: `New Deployment Request from ${templateData.name}`,
        html: buildNotificationHtml(templateData),
      }),
    ])

    if (confirmationResult.error || notificationResult.error) {
      console.error("Resend error:", confirmationResult.error, notificationResult.error)
      return NextResponse.json(
        { error: "Failed to send emails. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    )
  }
}

