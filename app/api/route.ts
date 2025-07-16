// app/api/lead/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Parsear el body como JSON
    const data = await request.json();

    // 1.a. Log para depurar el valor de budget que llega
    console.log("→ Valor de budget recibido:", data.budget);

    // 2. Cargar credenciales de entorno
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const AIRTABLE_BASE = process.env.AIRTABLE_BASE;
    const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE;

    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE || !AIRTABLE_TABLE) {
      console.error("→ Falta configuración de entorno:", {
        AIRTABLE_TOKEN,
        AIRTABLE_BASE,
        AIRTABLE_TABLE,
      });
      return NextResponse.json(
        { error: "Variables de entorno de Airtable no configuradas" },
        { status: 500 }
      );
    }

    // 3. Parsear budget a número limpio (sin símbolos ni comas)
    const budgetNumber = parseFloat(
      String(data.budget).replace(/[^0-9.-]+/g, "")
    );
    console.log("→ Budget parseado a número:", budgetNumber);

    // 4. Construir URL y headers
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`;
    console.log("→ Airtable URL:", url);
    console.log("→ Airtable Headers:", {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      "Content-Type": "application/json",
    });

    // 5. Hacer la petición a Airtable
    const airtableRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          // Asegúrate aquí de que los nombres coincidan 1:1 con tus columnas en Airtable
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          budget: budgetNumber, // enviamos número, no string
          service: data.service,
          pain: data.pain,
        },
      }),
    });

    // 6. Manejo de errores de Airtable
    if (!airtableRes.ok) {
      const err = await airtableRes.json();
      console.error("Error en Airtable:", err);
      return NextResponse.json({ error: err }, { status: airtableRes.status });
    }

    // 7. Respuesta exitosa
    const record = await airtableRes.json();
    return NextResponse.json({ ok: true, record });
  } catch (e) {
    console.error("Error interno en API route:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
