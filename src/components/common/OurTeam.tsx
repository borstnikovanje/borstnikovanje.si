import { IconArrowNarrowRight } from "@tabler/icons-react";

const teamMembers = [
  {
    fullName: "Mojca Pačnik",
    role: "Idejni vodja",
  },
  {
    fullName: "Brina Jenček",
    role: "Idejni vodja",
  },
  {
    fullName: "Klara Lotrič",
    role: "Grafični oblikovalec",
  },
  {
    fullName: "Andrijan Tasevski",
    role: "Full-stack developer",
  },
  {
    fullName: "Veronika Rožmanc",
    role: "Design/event manager, UI designer",
  },
  {
    fullName: "Mark Djurašević",
    role: "Vodja PR",
  },
  {
    fullName: "Tomaž Novak",
    role: "Skrbnik Borštnikove rojstne hiše",
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

        <div className="flex w-full flex-col gap-10">
          {teamMembers.map((teamMember, index) => (
            <TeamMember teamMember={teamMember} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
