import { z, defineCollection, reference } from "astro:content";

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
        eventLink: z.string(),
        callToActionLink: z.string().optional(),
        callToActionTitle: z.string().optional(),
      })
    ),
  }),
});

const teamMembersCollection = defineCollection({
  type: "data",
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    role: z.string(),
    description: z.string(),
    photo: z.string(),
    instagramLink: z.string().optional(),
    linkedInLink: z.string().optional(),
    order: z.number(),
    highlighted: z.boolean(),
  }),
});

const festivalDaysCollection = defineCollection({
  type: "data",
  schema: z.object({
    relatedEvents: z.array(reference("festivalEvents")),
  }),
});

const festivalEventsCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.string(),
    time: z.string(),
    isoDate: z.string(),
    price: z.number(),
    priceStudents: z.number().optional(),
    priceVIP: z.number().optional(),
    price3days: z.number().optional(),
    title: z.string(),
    eventType: z.string(),
    highlighted: z.boolean(),
    location: z.string(),
    locationShort: z.string(),
    locationEmbedURL: z.string(),
    eventLink: z.string().optional(),
    image: z.string().optional(),
  }),
});

const festivalTicketsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    price: z.number(),
    priceStudents: z.number().optional(),
    priceVIP: z.number().optional(),
    location: z.string(),
    callToActionLink: z.string(),
    eventLink: z.string().optional(),
    image: z.string(),
    order: z.number(),
    isoDate: z.string().optional(),
  }),
});

export const collections = {
  events: eventsCollection,
  teamMembers: teamMembersCollection,
  festivalDays: festivalDaysCollection,
  festivalEvents: festivalEventsCollection,
  festivalTickets: festivalTicketsCollection,
};
