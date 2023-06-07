import {
  IconArrowNarrowRight,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { CollectionEntry } from "astro:content";

type TeamMemberProps = {
  teamMember: CollectionEntry<"teamMembers">;
};

function TeamMemberTrigger({ teamMember }: TeamMemberProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="flex w-full justify-start font-tan-pearl text-2xl uppercase md:w-6/12 lg:text-4xl">
        {teamMember.data.firstName} {teamMember.data.lastName}
      </p>

      <p className="hidden w-4/12 justify-start md:flex">
        {teamMember.data.role}
      </p>

      <div className="hidden w-2/12 items-center justify-end md:flex">
        <IconArrowNarrowRight />
      </div>
    </div>
  );
}

type TeamMembersProps = {
  teamMembers: CollectionEntry<"teamMembers">[];
};

export default function TeamMembers({ teamMembers }: TeamMembersProps) {
  const [accordionActiveItem, setAccordionActiveItem] = useState("");
  const [accordionActiveItemHeight, setAccordionActiveItemHeight] = useState(0);

  const contentRefs = useRef<HTMLDivElement[] | null[]>([]);

  const handleAccordionItemChange = (value: string) => {
    setAccordionActiveItem(value);

    const accordionActiveItemIndex = teamMembers.findIndex(
      (teamMember) => teamMember.id === value
    );

    const accordionActiveItemRef =
      contentRefs.current[accordionActiveItemIndex];

    setAccordionActiveItemHeight(
      accordionActiveItemRef ? accordionActiveItemRef.offsetHeight : 0
    );
  };

  useEffect(() => {
    const accordionActiveItemIndex = teamMembers.findIndex(
      (teamMember) => teamMember.id === accordionActiveItem
    );

    const accordionActiveItemRef =
      contentRefs.current[accordionActiveItemIndex];

    setAccordionActiveItemHeight(
      accordionActiveItemRef ? accordionActiveItemRef.offsetHeight : 0
    );
  }, []);
  return (
    <Accordion.Root
      type="single"
      className="flex w-full flex-col gap-10"
      collapsible
      defaultValue={accordionActiveItem}
      onValueChange={handleAccordionItemChange}
    >
      {teamMembers.map((teamMember, index) => (
        <Accordion.Item
          key={teamMember.id}
          value={teamMember.id}
          className={`border-b transition-colors ${
            accordionActiveItem === teamMember.id
              ? "border-neutral-950 pb-4"
              : "border-neutral-400"
          }`}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={`w-full transition-colors ${
                accordionActiveItem === teamMember.id
                  ? ""
                  : "text-neutral-400 hover:text-neutral-950"
              }`}
            >
              <TeamMemberTrigger teamMember={teamMember} />
            </Accordion.Trigger>
          </Accordion.Header>

          <motion.div
            animate={{
              opacity: accordionActiveItem === teamMember.id ? 1 : 0,
              height:
                accordionActiveItem === teamMember.id
                  ? accordionActiveItemHeight
                  : 0,
            }}
          >
            <Accordion.Content
              ref={(ref) => (contentRefs.current[index] = ref)}
              className="mt-4 flex flex-col gap-4 lg:flex-row lg:justify-between"
            >
              <div className="flex flex-col gap-2">
                <p className="w-full lg:w-5/12">
                  {teamMember.data.description}
                </p>

                {(teamMember.data.instagramLink ||
                  teamMember.data.linkedInLink) && (
                  <div className="flex items-center gap-2">
                    {teamMember.data.instagramLink && (
                      <a href={teamMember.data.instagramLink}>
                        <IconBrandInstagram />
                      </a>
                    )}

                    {teamMember.data.linkedInLink && (
                      <a href={teamMember.data.linkedInLink}>
                        <IconBrandLinkedin />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="flex w-full lg:w-full lg:justify-end">
                <img
                  loading="eager"
                  width={300}
                  height={400}
                  src={teamMember.data.photo}
                  alt={`${teamMember.data.firstName} ${teamMember.data.lastName}`}
                />
              </div>
            </Accordion.Content>
          </motion.div>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
