import { useEffect, useRef, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const events = [
  {
    id: 1,
    title: "Delavnice",
    description:
      "Gledališke, kreativne in likovne delavnice za vse gledališke in umetniške navdušence.",
    href: "/delavnice",
  },
  {
    id: 2,
    title: "Klepet ob kavi",
    description:
      "Prisluhnite pogovoru z Borštnikovimi nagrajenci, ki ga bo vodila igralka Zvezdana Mlakar, in stopite v dialog z njimi tudi vi.",
    href: "/klepet-ob-kavi",
  },
  {
    id: 3,
    title: "Novinarska konferenca",
    description:
      "Izvedite več o festivalu, vseh prihajajočih dogodkih, predstavah in delavnicah iz prve roke ter spoznajte ekipo festivala.",
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
                    <Button asChild intent="outline-black">
                      <a href={event.href}>Zanima me več</a>
                    </Button>
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
