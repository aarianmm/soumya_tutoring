/**
 * POST /api/enquiry — Cloudflare Pages Function.
 *
 * Receives the enquiry form as JSON and emails it on via Resend.
 *
 * Required environment variables (Cloudflare dashboard → Settings → Variables,
 * or .dev.vars locally):
 *   RESEND_API_KEY  — API key from https://resend.com (free tier is plenty)
 *   ENQUIRY_TO      — where enquiries should land, e.g. hello@eurekaacademy.co.uk
 *   ENQUIRY_FROM    — a verified sender, e.g. "Eureka Academy <enquiries@yourdomain.co.uk>"
 *
 * If RESEND_API_KEY is absent the enquiry is logged to the Pages function log
 * and still reported as received, so the site works before email is wired up.
 * Configure the variables before launch — until then nothing is delivered.
 */

interface Env {
  RESEND_API_KEY?: string;
  ENQUIRY_TO?: string;
  ENQUIRY_FROM?: string;
}

interface Enquiry {
  name?: string;
  email?: string;
  phone?: string;
  yearGroup?: string;
  subject?: string;
  sessionType?: string;
  availability?: string;
  message?: string;
  /** Honeypot — real people leave this empty. */
  company?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

const clean = (value: unknown, max = 2000) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string,
  );

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Enquiry;
  try {
    body = (await request.json()) as Enquiry;
  } catch {
    return json({ ok: false, error: 'Invalid request body.' }, 400);
  }

  // Honeypot: pretend everything is fine, send nothing.
  if (clean(body.company)) return json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = clean(body.message, 4000);

  if (!name || !email || !message) {
    return json({ ok: false, error: 'Please fill in your name, email and message.' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
  }

  const fields: Array<[string, string]> = [
    ['Name', name],
    ['Email', email],
    ['Phone', clean(body.phone, 60) || '—'],
    ['Year group', clean(body.yearGroup, 60) || '—'],
    ['Subject', clean(body.subject, 120) || '—'],
    ['Session type', clean(body.sessionType, 60) || '—'],
    ['Availability', clean(body.availability, 300) || '—'],
  ];

  const text = [
    ...fields.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    message,
  ].join('\n');

  const html = `
    <h2 style="font-family:sans-serif">New enquiry — Eureka Academy</h2>
    <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
      ${fields
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 12px 4px 0"><strong>${label}</strong></td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
        )
        .join('')}
    </table>
    <p style="font-family:sans-serif;font-size:15px"><strong>Message</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  if (!env.RESEND_API_KEY) {
    console.warn('[enquiry] RESEND_API_KEY not configured — enquiry logged only:\n' + text);
    return json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: env.ENQUIRY_FROM ?? 'Eureka Academy <onboarding@resend.dev>',
        to: [env.ENQUIRY_TO ?? 'hello@eurekaacademy.co.uk'],
        reply_to: email,
        subject: `New tutoring enquiry — ${name}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      console.error('[enquiry] Resend rejected the message', res.status, await res.text());
      return json({ ok: false, error: 'We could not send your enquiry just now.' }, 502);
    }
  } catch (err) {
    console.error('[enquiry] Resend request failed', err);
    return json({ ok: false, error: 'We could not send your enquiry just now.' }, 502);
  }

  return json({ ok: true, delivered: true });
};
