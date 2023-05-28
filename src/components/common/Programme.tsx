import { useState } from "react";
import Button from "../ui/Button";
import ButtonLink from "../ui/ButtonLink";
import { IconArrowUpRight } from "@tabler/icons-react";

const festivalDays = [
  {
    dayNumber: 0,
    title: "Sreda, 21. junij",
    activities: [
      {
        date: "Sreda, 21. junij",
        time: "13:00 - 14:45",
        location: "Borštnikov vrt",
        price: 16,
        title: "Novinarska konferenca in otvoritev festivala",
        eventType: "Otvoritveni dogodek",
      },
      {
        date: "Sreda, 21. junij",
        time: "12:00 - 13:45",
        location: "Borštnikova domačija",
        price: 16,
        title: "Kreativna Borštnikova pustolovščina za otroke",
        eventType: "Delavnica za otroke",
      },
      {
        date: "Sreda, 21. junij",
        time: "17:45 - 19:45",
        location: "Pod Jenkovo Lipo",
        price: 16,
        title: "Glasbeni večer pod zvezdami pod Jenkovo Lipo",
        eventType: "Glasbeni večer",
      },
    ],
  },
  {
    dayNumber: 1,
    title: "Četrtek, 22. junij",
    activities: [
      {
        date: "Četrtek, 22. junij",
        time: "9:45 - 10:45",
        location: "Borštnikov hram",
        price: 14,
        title: "Otvoritev dogodka Borštnik po Borštniku in pogostitev",
        eventType: "Otvoritveni dogodek",
      },
      {
        date: "Četrtek, 22. junij",
        time: "12:00 - 13:45",
        location: "Borštnikova domačija",
        price: 10,
        title: "Kreativna Borštnikova pustolovščina za otroke",
        eventType: "Delavnica za otroke",
      },
      {
        date: "Četrtek, 22. junij",
        time: "17:45 - 19:45",
        location: "Pod Jenkovo Lipo",
        price: 11,
        title: "Glasbeni večer pod zvezdami pod Jenkovo Lipo",
        eventType: "Glasbeni večer",
      },
    ],
  },
  {
    dayNumber: 2,
    title: "Petek, 23. junij",
    activities: [
      {
        date: "Petek, 23. junij",
        time: "9:45 - 10:45",
        location: "Borštnikov hram",
        price: 14,
        title: "Otvoritev dogodka Borštnik po Borštniku in pogostitev",
        eventType: "Otvoritveni dogodek",
      },
      {
        date: "Petek, 23. junij",
        time: "12:00 - 13:45",
        location: "Borštnikova domačija",
        price: 16,
        title: "Kreativna Borštnikova pustolovščina za otroke",
        eventType: "Delavnica za otroke",
      },
      {
        date: "Petek, 23. junij",
        time: "17:45 - 19:45",
        location: "Pod Jenkovo Lipo",
        price: 20,
        title: "Glasbeni večer pod zvezdami pod Jenkovo Lipo",
        eventType: "Glasbeni večer",
      },
    ],
  },
];

type ProgrammeActivityProps = {
  programmeActivity: {
    date: string;
    time: string;
    location: string;
    price: number;
    title: string;
    eventType: string;
  };
};

function ProgrammeActivity({ programmeActivity }: ProgrammeActivityProps) {
  return (
    <a
      href="/"
      className="flex gap-6 border-t border-white pt-4 first:border-transparent"
    >
      <div className="flex w-7/12 flex-col gap-2">
        <p>
          {programmeActivity.date} {"->"} {programmeActivity.time}
        </p>
        <p className="text-3xl font-medium leading-normal text-white">
          {programmeActivity.title}
        </p>

        <IconArrowUpRight className="h-7 w-7 text-white" />
      </div>

      <div className="flex w-5/12 flex-col gap-4">
        <div className="flex w-full items-center border-b border-white pb-2">
          <p className="w-3/12">Kje</p>

          <p className="w-9/12">{programmeActivity.location}</p>
        </div>

        <div className="flex w-full items-center border-b border-white pb-2">
          <p className="w-3/12">Kaj</p>

          <p className="w-9/12">{programmeActivity.eventType}</p>
        </div>

        <div className="flex w-full items-center">
          <p className="w-3/12">Cena</p>

          <p className="w-9/12">€{programmeActivity.price}</p>
        </div>
      </div>
    </a>
  );
}

export default function Programme() {
  const [selectedDay, setSelectedDay] = useState(0);

  const currentDay = festivalDays[selectedDay];

  return (
    <section className="bg-programme bg-cover bg-no-repeat py-10 text-white lg:py-32">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-8">
        <div className="flex items-center justify-between">
          <p className="font-tan-pearl text-3xl">Program dogajanja</p>

          <div className="flex items-center gap-4">
            {festivalDays.map((festivalDay) => (
              <Button
                onClick={() => setSelectedDay(festivalDay.dayNumber)}
                intent={
                  selectedDay === festivalDay.dayNumber
                    ? "white"
                    : "outline-white"
                }
                key={festivalDay.dayNumber}
              >
                {festivalDay.title}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-20">
          <div className="flex w-3/12 flex-col gap-6">
            <p>
              Na festivalu »Borštnik po Borštniku« vas čaka bogat in raznolik
              program, ki zajema voden ogled po kulturni dediščini Cerkelj,
              ogled Borštnikove hiše, kovačije ter možnost izdelave svojega
              Borštnikovega kovanca. Poleg tega bodo na voljo tudi gledališke in
              kreativne delavnice, likovna razstava ter okrogla miza s pogovorom
              o Borštnikovih nagrajencih. Vstopnice za gledališke predstave so
              na voljo, prav tako pa lahko podarite darilni bon za karte,
              delavnice, Borštnikovo pojedino ali Borštnikov napitek.
              Obiskovalcem je na voljo tudi možnost donacij in plačila kart za
              druge, ter celodnevno počitniško varstvo in kreativne delavnice za
              otroke.
            </p>

            <div>
              <ButtonLink href="/" intent="outline-white">
                Poglej vse dogodke
              </ButtonLink>
            </div>
          </div>

          <div className="flex w-9/12 flex-col gap-8">
            {currentDay.activities.map((programmeActivity) => (
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
