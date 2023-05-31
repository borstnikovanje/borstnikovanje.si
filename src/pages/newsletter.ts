export const prerender = false;

import type { APIRoute } from "astro";

export const post: APIRoute = ({ request }) => {
  const date = new Date().getSeconds();
  return {
    body: JSON.stringify({
      message: date,
    }),
  };
};
