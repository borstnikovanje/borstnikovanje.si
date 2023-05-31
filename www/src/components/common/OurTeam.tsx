import { IconArrowNarrowRight } from "@tabler/icons-react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    fullName: "Mojca Pačnik",
    role: "Idejni vodja",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam nemo provident voluptatum quae omnis! Porro rem doloremque sequi exercitationem dicta repellendus odio libero repellat velit, totam eveniet quos dolores. Dolorem, sed. Corrupti facilis ducimus necessitatibus deserunt impedit repellat exercitationem velit, commodi libero, laborum excepturi numquam suscipit in corporis quae delectus rem similique quisquam dolore doloribus harum maiores. Laboriosam deserunt fugiat recusandae inventore voluptatum dolorem, earum error nulla, pariatur soluta perferendis? Magni quaerat saepe soluta repellat animi ducimus numquam tempora, veritatis obcaecati perspiciatis a et nihil earum rerum adipisci ab illo iure, eos recusandae magnam non tenetur quibusdam! Culpa, harum?",
  },
  {
    fullName: "Brina Jenček",
    role: "Vodja programa",
    description:
      "Brina Jenček je absolventka Dramaturgije in scenskih umetnosti na Akademiji za gledališče, radio, film in televizijo v Ljubljani. Na mednarodnem nivoju deluje na področju praktične dramaturgije, gledališke in filmske kritike, dramskega pisanja ter kulturne produkcije.",
  },
  {
    fullName: "Klara Lotrič",
    role: "Grafična oblikovalka",
    description:
      "Moj kompas je vedno usmerjen proti novim izzivom. Ob tem pa uživam v ustvarjanju in odkrivanju novih načinov vizualnega pripovedovanja zgodb.",
  },
  {
    fullName: "Andrijan Tasevski",
    role: "Full-stack developer",
    description:
      "Andrijan Tasevski je full-stack razvijalec z željo po kreiranju vizualno izpopolnjenih in uporabnikom prijaznih spletnih straneh. Ves čas je v stiku z najnovejšimi tehnologijami in v iskanju najbolj optimalnih spletnih rešitev.",
  },
  {
    fullName: "Veronika Rožmanc",
    role: "Grafična oblikovalka",
    description:
      "Rožmanc se je s številnimi nagradami že uveljavila tako doma kot v tujini. Trenutno zaključuje študij design managementa, kjer nadgrajuje svoje znanje in veščine. Poleg tega je tudi vodja kreativne ekipe konference Fanfara, kjer uspešno združuje svoje strokovno znanje z vodenjem ekipe. S svojim šotorom OLI pa je pridobila naziv 'Naj mladinski startup 2019', kar dodatno potrjuje njeno odličnost na področju grafičnega oblikovanja, kreativnosti in ustvarjanja enotnih zgodb ter blagovnih znamk.",
  },
  {
    fullName: "Mark Djurašević",
    role: "Vodja PR",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in impedit dicta architecto velit dolores iure facilis, ab tempora repudiandae!",
  },
  {
    fullName: "Tomaž Novak",
    role: "Skrbnik Borštnikove rojstne hiše",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in impedit dicta architecto velit dolores iure facilis, ab tempora repudiandae!",
  },
];

type TeamMemberType = {
  fullName: string;
  role: string;
};

type TeamMemberProps = {
  teamMember: TeamMemberType;
};

function TeamMember({ teamMember }: TeamMemberProps) {
  return (
    <div className="flex w-full items-center justify-between border-b border-neutral-950 pb-4">
      <p className="w-6/12 font-tan-pearl text-4xl uppercase">
        {teamMember.fullName}
      </p>

      <p className="w-3/12">{teamMember.role}</p>

      <div className="flex w-3/12 items-center justify-end">
        <IconArrowNarrowRight />
      </div>
    </div>
  );
}

export default function OurTeam() {
  const [accordionActiveItem, setAccordionActiveItem] = useState("");
  const [accordionActiveItemHeight, setAccordionActiveItemHeight] = useState(0);

  const contentRefs = useRef<HTMLDivElement[] | null[]>([]);

  const handleAccordionItemChange = (value: string) => {
    setAccordionActiveItem(value);

    const accordionActiveItemIndex = teamMembers.findIndex(
      (teamMember) => teamMember.fullName === value
    );

    const accordionActiveItemRef =
      contentRefs.current[accordionActiveItemIndex];

    setAccordionActiveItemHeight(
      accordionActiveItemRef ? accordionActiveItemRef.offsetHeight : 0
    );
  };

  useEffect(() => {
    const accordionActiveItemIndex = teamMembers.findIndex(
      (teamMember) => teamMember.fullName === accordionActiveItem
    );

    const accordionActiveItemRef =
      contentRefs.current[accordionActiveItemIndex];

    setAccordionActiveItemHeight(
      accordionActiveItemRef ? accordionActiveItemRef.offsetHeight : 0
    );
  }, []);
  return (
    <section className="py-10 lg:py-20">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="font-tan-pearl text-4xl lg:text-6xl">Naša ekipa</h2>
        </div>

        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 text-center">
          <p>
            Naša ekipa je sestavljena iz strastnih in predanih ljubiteljev
            gledališča, umetnosti in kulture. Skupaj si prizadevamo, da bi
            ustvarili nepozabno izkušnjo za obiskovalce našega festivala in da
            bi hkrati ohranili dediščino Ignacija Borštnika.
          </p>
        </div>

        <Accordion.Root
          type="single"
          className="flex w-full flex-col gap-10"
          collapsible
          defaultValue={accordionActiveItem}
          onValueChange={handleAccordionItemChange}
        >
          {teamMembers.map((teamMember, index) => (
            <Accordion.Item
              key={teamMember.fullName}
              value={teamMember.fullName}
              className={`border-b pb-4 transition-colors ${
                accordionActiveItem === teamMember.fullName
                  ? "border-neutral-950"
                  : "border-neutral-400"
              }`}
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className={`w-full ${
                    accordionActiveItem === teamMember.fullName
                      ? ""
                      : "text-neutral-400"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <p className="flex w-6/12 justify-start font-tan-pearl text-4xl uppercase">
                      {teamMember.fullName}
                    </p>

                    <p className="flex w-3/12 justify-start">
                      {teamMember.role}
                    </p>

                    <div className="flex w-3/12 items-center justify-end">
                      <IconArrowNarrowRight />
                    </div>
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <motion.div
                animate={{
                  opacity: accordionActiveItem === teamMember.fullName ? 1 : 0,
                  height:
                    accordionActiveItem === teamMember.fullName
                      ? accordionActiveItemHeight
                      : 0,
                }}
              >
                <Accordion.Content
                  ref={(ref) => (contentRefs.current[index] = ref)}
                  className="mt-4 flex gap-4 overflow-hidden"
                >
                  <p className="w-5/12">{teamMember.description}</p>

                  <div className="flex w-7/12 justify-end">
                    <img
                      loading="eager"
                      width={300}
                      height={400}
                      src="/photos/team-members/brina-jencek.jpg"
                      alt=""
                    />
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
