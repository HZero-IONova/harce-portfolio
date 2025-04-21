import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

/*------------------------------------------------------------------
  1.  CONFIG RESEND
-------------------------------------------------------------------*/
const resend = new Resend(process.env.RESEND_API_KEY!);

/*------------------------------------------------------------------
  2.  MAPA DE SERVICIOS (código → etiqueta legible)
-------------------------------------------------------------------*/
const SERVICE_LABELS: Record<string, string> = {
  portfolio: "Web Portfolio / Landing Page",
  pplatform: "Microsoft Power Platform",
  ecommerce: "E‑commerce Site",
};

/*------------------------------------------------------------------
  3.  FUNCIÓN buildHtml: devuelve todo el email con estilos inline
-------------------------------------------------------------------*/
function buildHtml(d: Record<string, string>): string {
  const niceService = SERVICE_LABELS[d.service] || "Sin especificar";

  return `
  <div style="background:#f4f7fa;padding:40px 0;font-family:Arial,Helvetica,sans-serif;">
    <table align="center" cellpadding="0" cellspacing="0" width="600"
           style="background:#ffffff;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.08);
                  overflow:hidden;border-collapse:separate;">
      <tr>
        <td style="background:#127bcb;padding:24px;text-align:center;">
          <h1 style="color:#ffffff;font-size:24px;margin:0;">🚀 ¡Nuevo lead recibido!</h1>
        </td>
      </tr>

      <tr>
        <td style="padding:32px 40px 24px;">
          <p style="font-size:16px;margin:0 0 16px;color:#333;">
            Tienes un nuevo mensaje desde tu portafolio. Estos son los detalles:
          </p>

          <table cellpadding="0" cellspacing="0" width="100%" style="font-size:15px;color:#333;">
            <tr>
              <td style="padding:8px 0;width:130px;"><b>Nombre:</b></td>
              <td style="padding:8px 0;">${d.firstName} ${d.lastName}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;"><b>Email:</b></td>
              <td style="padding:8px 0;">${d.email}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;"><b>Teléfono:</b></td>
              <td style="padding:8px 0;">${d.phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;"><b>Servicio:</b></td>
              <td style="padding:8px 0;">${niceService}</td>
            </tr>
          </table>

          <div style="margin:24px 0;padding:18px 24px;border-left:4px solid #127bcb;
                      background:#f0f5ff;color:#333;font-size:15px;white-space:pre-line;">
            ${d.message}
          </div>

          <p style="font-size:14px;color:#666;margin:0;">
            Responde directamente a este correo para contactar al cliente.
          </p>
        </td>
      </tr>

      <tr>
        <td style="background:#f1f1f1;text-align:center;padding:16px;font-size:12px;color:#777;">
          Portafolio de Hiram Arce ·
          <a href="https://ionova.io" style="color:#127bcb;text-decoration:none;">ionova.io</a>
        </td>
      </tr>
    </table>
  </div>
  `;
}

/*------------------------------------------------------------------
  4.  HANDLER  POST  (se re‑exportará desde app/api/contact/route.ts)
-------------------------------------------------------------------*/
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validación mínima
    if (!data?.email || !data?.message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 422 });
    }

    /*----------------------  Enviar email con Resend  ----------------------*/
    const res = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!, // p. ej. onboarding@resend.dev
      to: process.env.RESEND_TO_EMAIL!, // tu bandeja personal
      subject: `Nuevo mensaje de ${data.firstName || "un visitante"}`,
      html: buildHtml(data),
      replyTo: data.email, // para que puedas responder
    });

    console.log("RESEND →", res); // útil para depurar en producción
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_ROUTE_ERROR →", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
