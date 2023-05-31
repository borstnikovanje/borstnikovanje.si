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
    title: string;
    eventType: string;
    eventLink: string;
  };
};

function ProgrammeActivity({ programmeActivity }: ProgrammeActivityProps) {
  return (
    <a
      href={programmeActivity.eventLink}
      className="flex flex-col gap-6 border-t border-primary-foreground pt-4 text-primary-foreground first:border-transparent lg:flex-row"
    >
      <div className="flex w-full flex-col gap-2 lg:w-7/12">
        <p>
          {programmeActivity.date} {"->"} {programmeActivity.time}
        </p>
        <p className="text-2xl font-medium leading-normal lg:text-3xl">
          {programmeActivity.title}
        </p>

        <IconArrowUpRight className="h-7 w-7" />
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
          </p>
        </div>
      </div>
    </a>
  );
}

type ProgrammeProps = {
  events: CollectionEntry<"events">[];
};

export default function Programme({ events }: ProgrammeProps) {
  const [selectedDay, setSelectedDay] = useState(0);

  const currentDay = events[selectedDay];

  return (
    <section className="bg-hero bg-cover bg-no-repeat py-10 text-white lg:py-32">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-6 lg:gap-8">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
          <div className="flex w-full items-center justify-end gap-4">
            {events.map((festivalDay) => (
              <Button
                onClick={() => setSelectedDay(festivalDay.data.dayNumber)}
                intent={
                  selectedDay === festivalDay.data.dayNumber
                    ? "primary"
                    : "outline-black"
                }
                key={festivalDay.id}
              >
                <span className="hidden lg:block">
                  {festivalDay.data.day}, {festivalDay.data.date}
                </span>

                <span className="lg:hidden">{festivalDay.data.day}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {currentDay.data.activities.map((programmeActivity) => (
            <ProgrammeActivity
              key={programmeActivity.time}
              programmeActivity={programmeActivity}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
