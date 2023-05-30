import { z, defineCollection } from "astro:content";

const eventsCollection = defineCollection({
  type: "data",
  schema: z.object({
    dayNumber: z.number(),
    day: z.string(),
    date: z.string(),
    activities: z.array(
      z.object({
        date: z.string(),
        time: z.string(),
        price: z.number(),
        priceStudents: z.number().optional(),
        title: z.string(),
        eventType: z.string(),
        highlighted: z.boolean(),
        location: z.string(),
      })
    ),
  }),
});

export const collections = {
  events: eventsCollection,
};
