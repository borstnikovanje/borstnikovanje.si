import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { env } from 'hono/adapter';
import { z } from 'zod';
import { parseBody } from 'hono/utils/body';

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
    return context.json('Error!');
  }

  const converKitResponse = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      api_key: API_KEY,
      email: parsedBody.data.email,
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

  const convertKitResponseBody = await converKitResponse.json();

  return context.json(convertKitResponseBody);
});

export default app;
