import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import ButtonLink from "../ui/ButtonLink";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Delavnice",
    description:
      "Gledališke, kreativne in likovne delavnice za vse ljubitelje gledališča, ustvarjalnih duš in umetniških navdušencev.",
    href: "/delavnice",
  },
  {
    id: 2,
    title: "Okrogla miza",
    description:
      "'Klepet ob kavi' z Borštnikovimi nagrajenci - spoznajte njihove največje izzive in prelomne trenutke v karieri.",
    href: "/okrogla-miza",
  },
  {
    id: 3,
    title: "Novinarska konferenca",
    description:
      "Izvedite najnovejše novice o naših dogodkih, predstavah in delavnicah ter postavite vprašanja.",
    href: "/novinarska-konferenca",
  },
];

export default function AccordionEvents() {
  const [accordionActiveItem, setAccordionActiveItem] = useState("Delavnice");
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col items-center text-center">
        <Accordion.Root
          defaultValue={accordionActiveItem}
          collapsible
          type="single"
          onValueChange={setAccordionActiveItem}
          className="flex flex-col gap-6"
        >
          {events.map((event) => (
            <Accordion.Item key={event.id} value={event.title}>
              <Accordion.Header>
                <Accordion.Trigger
                  className={`mb-4 font-tan-pearl text-5xl uppercase ${
                    accordionActiveItem === event.title
                      ? ""
                      : "leading-normal text-neutral-500 transition-colors hover:text-neutral-950 lg:leading-none"
                  }`}
                >
                  {event.title}
                </Accordion.Trigger>
              </Accordion.Header>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: accordionActiveItem === event.title ? 100 : 0,
                }}
              >
                <Accordion.Content className="flex flex-col gap-4">
                  {event.description}
                  <div>
                    <ButtonLink href={event.href} intent="primary">
                      Zanima me več
                    </ButtonLink>
                  </div>
                </Accordion.Content>
              </motion.div>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
