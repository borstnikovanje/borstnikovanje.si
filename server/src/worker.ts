import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { env } from 'hono/adapter';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string(),
});

const app = new Hono();

app.use('/api/*', cors());

app.post('/api/newsletter', async (context) => {
  const { API_KEY, FORM_ID } = env<{ API_KEY: string; FORM_ID: string }>(context);

  const API_URL = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;

  const requestBody = await context.req.json();

  const parsedBody = newsletterSchema.safeParse(requestBody);

  if (!parsedBody.success) {
    return context.json({ message: 'Please enter an email.' }, 404);
  }

  const convertKitResponse = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      api_key: API_KEY,
      email: parsedBody.data.email,
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

  if (!convertKitResponse.ok) {
    const convertKitResponseBody: { message: string; error: string } = await convertKitResponse.json();
    return context.json({ message: convertKitResponseBody.message }, 404);
  }

  const convertKitResponseBody = await convertKitResponse.json();

  return context.json(convertKitResponseBody);
});

export default app;
