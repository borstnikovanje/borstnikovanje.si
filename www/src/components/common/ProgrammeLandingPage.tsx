import { useState } from "react";
import Button from "../ui/Button";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { CollectionEntry } from "astro:content";

// TODO
// FIX TYPES
type ProgrammeActivityProps = {
  programmeActivity: {
    date: string;
    time: string;
    location: string;
    price: number;
    priceStudents?: number | undefined;
    title: string;
    eventType: string;
    eventLink: string;
    callToActionLink?: string | undefined;
    callToActionTitle?: string | undefined;
  };
};

function ProgrammeActivity({ programmeActivity }: ProgrammeActivityProps) {
  return (
    <a
      href={
        programmeActivity.callToActionLink
          ? programmeActivity.callToActionLink
          : programmeActivity.eventLink
      }
      className="flex flex-col gap-6 border-t border-primary-foreground pt-4 first:border-transparent lg:flex-row"
    >
      <div className="flex w-full flex-col gap-2 lg:w-7/12">
        <p>
          {programmeActivity.date} {"->"} {programmeActivity.time}
        </p>
        <p className="leading-normallg:text-3xl text-2xl font-medium">
          {programmeActivity.title}
        </p>

        <IconArrowUpRight className="h-7 w-7 text-primary-foreground" />
      </div>

      <div className="flex w-full flex-col gap-4 lg:w-5/12">
        <div className="flex w-full items-center border-b border-primary-foreground pb-2">
          <p className="w-3/12">Kje</p>

          <p className="w-9/12">{programmeActivity.location}</p>
        </div>

        <div className="flex w-full items-center border-b border-primary-foreground pb-2">
          <p className="w-3/12">Kaj</p>

          <p className="w-9/12">{programmeActivity.eventType}</p>
        </div>

        <div className="flex w-full items-center">
          <p className="w-3/12">Cena</p>

          <p className="w-9/12">
            {programmeActivity.price === 0
              ? "Brezplačno"
              : `${programmeActivity.price} €`}

            {programmeActivity.priceStudents &&
              ` (${programmeActivity.priceStudents} € študenti, upokojenci)`}
          </p>
        </div>
      </div>
    </a>
  );
}

type ProgrammeLandingPageProps = {
  events: CollectionEntry<"events">[];
};

export default function ProgrammeLandingPage({
  events,
}: ProgrammeLandingPageProps) {
  const [selectedDay, setSelectedDay] = useState(0);

  const currentDay = events[selectedDay];

  return (
    <section className="bg-donate bg-cover bg-center bg-no-repeat py-10 text-primary-foreground lg:py-32">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-6 lg:gap-8">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
          <p className="font-tan-pearl text-2xl lg:text-3xl">
            Program dogajanja
          </p>

          <p className="text-center lg:hidden">
            Na festivalu »Borštnik po Borštniku« vas čaka bogat in raznolik
            program, preverite!
          </p>

          <div className="flex w-full items-center justify-between gap-4 lg:w-auto">
            {events.map((festivalDay) => (
              <Button
                onClick={() => setSelectedDay(festivalDay.data.dayNumber)}
                intent={
                  selectedDay === festivalDay.data.dayNumber
                    ? "primary"
                    : "outline-black"
                }
                key={festivalDay.data.dayNumber}
              >
                <span className="hidden lg:block">
                  {festivalDay.data.day}, {festivalDay.data.date}
                </span>

                <span className="lg:hidden">{festivalDay.data.day}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-20">
          <div className="hidden flex-col gap-6 lg:flex lg:w-3/12">
            <p>
              Na festivalu »Borštnikovanje« vas čaka bogat in raznolik program,
              ki zajema dve gledališki predstavi, koncert, voden ogled po
              kulturni dediščini Cerkelj, ogled Borštnikove rojstne hiše,
              kovačije ter možnost izdelave svojega Borštnikovega kovanca. Poleg
              tega bodo na voljo tudi gledališke in kreativne delavnice za
              otroke, tridnevna likovna kolonija ter klepet ob kavi z
              Borštnikovimi nagrajencih. Vstopnice za gledališke predstave so na
              voljo v spletni trgovini Olaii in na prodajnih mestih OMW ter
              Trafikah 3DVA. Prav tako bo v času festivala gostom na voljo
              posebna kulinarična ponudba – Borštnikova pojedina, Borštnikov
              napitek in Borštnikov koktejl.
            </p>

            <div>
              <Button asChild intent="outline-black">
                <a href="/program">Poglej vse dogodke</a>
              </Button>
            </div>
          </div>

          <div className="flex w-full flex-col gap-12 lg:w-9/12 lg:gap-8">
            {currentDay.data.activities
              .filter((programmeActivity) => programmeActivity.highlighted)
              .map((programmeActivity) => (
                <ProgrammeActivity
                  key={programmeActivity.time}
                  programmeActivity={programmeActivity}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
