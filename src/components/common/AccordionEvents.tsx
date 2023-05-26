import { useEffect, useRef, useState } from "react";
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
      "Izvedite najnovejše novice o naših dogodkih, predstavah in delavnicah ter postavite vprašanja.",
    href: "/okrogla-miza",
  },
  {
    id: 3,
    title: "Novinarska konferenca",
    description:
      "'Klepet ob kavi' z Borštnikovimi nagrajenci - spoznajte njihove največje izzive in prelomne trenutke v karieri.",
    href: "/novinarska-konferenca",
  },
];

export default function AccordionEvents() {
  const [accordionActiveItem, setAccordionActiveItem] = useState("Delavnice");
  const [accordionActiveItemHeight, setAccordionActiveItemHeight] = useState(0);

  const contentRefs = useRef<HTMLDivElement[] | null[]>([]);

  const handleAccordionItemChange = (value: string) => {
    setAccordionActiveItem(value);

    const accordionActiveItemIndex = events.findIndex(
      (event) => event.title === value
    );

    const accordionActiveItemRef =
      contentRefs.current[accordionActiveItemIndex];

    setAccordionActiveItemHeight(
      accordionActiveItemRef ? accordionActiveItemRef.offsetHeight : 0
    );
  };

  useEffect(() => {
    const accordionActiveItemIndex = events.findIndex(
      (event) => event.title === accordionActiveItem
    );

    const accordionActiveItemRef =
      contentRefs.current[accordionActiveItemIndex];

    setAccordionActiveItemHeight(
      accordionActiveItemRef ? accordionActiveItemRef.offsetHeight : 0
    );
  }, []);

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col items-center text-center">
        <Accordion.Root
          defaultValue={accordionActiveItem}
          type="single"
          onValueChange={handleAccordionItemChange}
          className="flex flex-col lg:gap-2"
        >
          {events.map((event, index) => (
            <Accordion.Item key={event.id} value={event.title}>
              <Accordion.Header>
                <Accordion.Trigger
                  className={`mb-4 font-tan-pearl text-4xl uppercase leading-snug lg:text-5xl lg:leading-none ${
                    accordionActiveItem === event.title
                      ? ""
                      : " text-neutral-500 transition-colors hover:text-neutral-950"
                  }`}
                >
                  {event.title}
                </Accordion.Trigger>
              </Accordion.Header>

              <motion.div
                initial={false}
                animate={{
                  opacity: accordionActiveItem === event.title ? 1 : 0,
                  height:
                    accordionActiveItem === event.title
                      ? accordionActiveItemHeight
                      : 0,
                }}
                className={accordionActiveItem === event.title ? "mb-6" : ""}
              >
                <Accordion.Content
                  ref={(ref) => (contentRefs.current[index] = ref)}
                  className="flex flex-col gap-4"
                >
                  {event.description}
                  <div>
                    <ButtonLink href={event.href} intent="outline-black">
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
