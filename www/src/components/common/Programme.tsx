import { useState } from "react";
import Button from "../ui/Button";
import { IconArrowUpRight, IconChevronRight } from "@tabler/icons-react";
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
    <div className="flex flex-col gap-6 border-t border-primary-foreground pt-4 text-primary-foreground first:border-transparent lg:flex-row">
      <div className="flex w-full flex-col gap-4 lg:w-7/12">
        <div className="flex flex-col gap-2">
          <p>
            {programmeActivity.date} {"->"} {programmeActivity.time}
          </p>
          <p className="text-2xl font-medium leading-normal lg:text-3xl">
            {programmeActivity.title}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 lg:flex-row">
          {programmeActivity.callToActionLink && (
            <Button asChild size="small" intent="outline-black">
              <a
                className="w-full items-center justify-center gap-1 lg:w-auto"
                href={programmeActivity.callToActionLink}
              >
                {programmeActivity.callToActionTitle}
                <IconChevronRight className="h-4 w-4" />
              </a>
            </Button>
          )}

          <Button asChild size="small" intent="outline-black">
            <a
              className="w-full items-center justify-center gap-1 lg:w-auto"
              href={programmeActivity.eventLink}
            >
              Več o dogodku
              <IconChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
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
    </div>
  );
}

type ProgrammeProps = {
  events: CollectionEntry<"events">[];
};

export default function Programme({ events }: ProgrammeProps) {
  const [selectedDay, setSelectedDay] = useState(0);

  const currentDay = events[selectedDay];

  return (
    <section className="bg-center bg-no-repeat text-white">
      <div className="mx-auto w-11/12 max-w-screen-xl lg:bg-nav-gradient lg:p-2">
        <div className="flex flex-col gap-6 bg-grain lg:gap-8 lg:p-10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
            <div className="flex w-full items-center justify-between gap-4 lg:justify-end">
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
      </div>
    </section>
  );
}
