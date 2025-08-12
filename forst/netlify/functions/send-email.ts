import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const REQUIRED_ENV = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "FROM_EMAIL",
  "TO_EMAIL",
] as const;

function missingEnv(): string[] {
  return REQUIRED_ENV.filter((k) => !process.env[k]);
}

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (s) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[s] as string)
  );
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  const missing = missingEnv();
  if (missing.length) {
    console.error("[send-email] Missing env vars:", missing.join(", "));
    return { statusCode: 500, body: JSON.stringify({ error: "Server misconfigured" }) };
  }

  if (!event.body) {
    return { statusCode: 400, body: JSON.stringify({ error: "Empty body" }) };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, phone, message, botField } = data || {};

    if (botField) {
      return { statusCode: 200, body: JSON.stringify({ success: true }) };
    }

    if (!name || !email || !message) {
      return { statusCode: 422, body: JSON.stringify({ error: "Missing required fields" }) };
    }

    const host = process.env.SMTP_HOST!;
    const port = Number(process.env.SMTP_PORT);
    const secure = port === 465; // SMTPS
    console.log(`[send-email] Connecting to ${host}:${port} secure=${secure}`);

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 15000, // 15s
      greetingTimeout: 10000,
      socketTimeout: 20000,
      tls: {
        // Für 587 STARTTLS erlaubt unsicheren Start, danach Upgrade
        rejectUnauthorized: true,
        minVersion: "TLSv1.2",
      },
      logger: true,
      debug: true,
    } as any);

    // Vorab prüfen
    try {
      await transporter.verify();
      console.log("[send-email] SMTP verify OK");
    } catch (vErr: any) {
      console.error("[send-email] transporter.verify failed:", vErr);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "SMTP verify failed", details: vErr.message }),
      };
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : "Nicht angegeben";
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>E-Mail:</strong> ${safeEmail}</p>
      <p><strong>Telefon:</strong> ${safePhone}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${safeMessage}</p>
      <hr>
      <small>Gesendet über das Kontaktformular (forestgumz.de)</small>
    `;
        // Vor dem sendMail-Aufruf einfügen:
    const mask = (v?: string) =>
      v ? v.replace(/(^.).+(@.*)/, (_, a, b) => a + "*****" + b) : "n/a";
    console.log("[send-email] Using FROM_EMAIL:", mask(process.env.FROM_EMAIL));
    console.log("[send-email] Using TO_EMAIL:", mask(process.env.TO_EMAIL));
    console.log("[send-email] Sending email to:", mask(process.env.TO_EMAIL)); 
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `Kontaktformular: ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || "-"}\n\nNachricht:\n${message}`,
      html,
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err: any) {
    if (err.code === "ETIMEDOUT" || err.command === "CONN") {
      console.error("[send-email] Connection timeout:", err);
      return {
        statusCode: 504,
        body: JSON.stringify({ error: "SMTP timeout", details: err.message }),
      };
    }
    console.error("[send-email] Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Mail send failed", details: err.message }),
    };
  }
};