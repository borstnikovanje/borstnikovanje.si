import { useState } from "react";
import Button from "../ui/Button";
import { IconChevronRight } from "@tabler/icons-react";
import ButtonLink from "../ui/ButtonLink";

const tickets = [
  {
    id: 0,
    ticketType: "dogodek",
    ticketsPerType: [
      {
        id: 0,
        ticketName: "dnevna",
        ticketTitle: "EARLYBIRD vstopnica",
        ticketDescription: "za večerne dogodke (predstava ali koncert).",
        price: 16,
        priceStudents: 12,
        ticketLink: "",
      },
      {
        id: 1,
        ticketName: "3-dnevna",
        ticketTitle: "EARLYBIRD 3-DNEVNA vstopnica",
        ticketDescription:
          "vključuje vse 3 večerne festivalske dogodke (obe predstavi in koncert).",
        price: 39,
        priceStudents: 30,
        ticketLink: "",
      },
      {
        id: 2,
        ticketName: "borštnikova",
        ticketTitle: "Borštnikova vstopnica",
        ticketDescription:
          "vključuje možnost izbire sedeža, dobrodošlico na Borštnikovi domačiji, pijačo in domače dobrote ter voden ogled Borštnikove rojstne hiše.",
        price: 50,
        ticketLink: "",
      },
      {
        id: 3,
        ticketName: "doniraj",
        ticketTitle: "EARLYBIRD 3-DNEVNA vstopnica",
        ticketDescription:
          "vključuje vse 3 večerne festivalske dogodke (obe predstavi in koncert).",
        price: 39,
        priceStudents: 30,
        ticketLink: "",
      },
    ],
  },
  {
    id: 1,
    ticketType: "delavnice",
    ticketsPerType: [
      {
        id: 0,
        ticketName: "dnevna",
        ticketTitle: "EARLYBIRD 3-DNEVNA vstopnica",
        ticketDescription:
          "vključuje vse 3 večerne festivalske dogodke (obe predstavi in koncert).",
        price: 39,
        priceStudents: 30,
        ticketLink: "",
      },
      {
        id: 1,
        ticketName: "3-dnevna",
        ticketTitle: "EARLYBIRD 3-DNEVNA vstopnica",
        ticketDescription:
          "vključuje vse 3 večerne festivalske dogodke (obe predstavi in koncert).",
        price: 39,
        priceStudents: 30,
        ticketLink: "",
      },
    ],
  },
  {
    id: 2,
    ticketType: "drugo",
    ticketsPerType: [
      {
        id: 0,
        ticketName: "dnevna",
        ticketTitle: "EARLYBIRD 3-DNEVNA vstopnica",
        ticketDescription:
          "vključuje vse 3 večerne festivalske dogodke (obe predstavi in koncert).",
        price: 39,
        priceStudents: 30,
        ticketLink: "",
      },
      {
        id: 1,
        ticketName: "3-dnevna",
        ticketTitle: "EARLYBIRD 3-DNEVNA vstopnica",
        ticketDescription:
          "vključuje vse 3 večerne festivalske dogodke (obe predstavi in koncert).",
        price: 39,
        priceStudents: 30,
        ticketLink: "",
      },
    ],
  },
];

type ActiveTicketTypeProps = {
  ticketPerType: {
    id: number;
    ticketName: string;
    ticketTitle: string;
    ticketDescription: string;
    price: number;
    priceStudents?: number;
    ticketLink: string;
  };
  activeTicketPerTypeIndex: number;
  setActiveTicketPerTypeIndex: React.Dispatch<React.SetStateAction<number>>;
};

function ActiveTicketType({
  ticketPerType,
  activeTicketPerTypeIndex,
  setActiveTicketPerTypeIndex,
}: ActiveTicketTypeProps) {
  return (
    <button
      onClick={() => setActiveTicketPerTypeIndex(ticketPerType.id)}
      className={`flex items-center ${
        ticketPerType.id === activeTicketPerTypeIndex
          ? ""
          : "text-neutral-400 transition-colors hover:text-neutral-950"
      }`}
    >
      <p className="font-tan-pearl text-5xl uppercase">
        {ticketPerType.ticketName}
      </p>

      <IconChevronRight className="h-8 w-8" />
    </button>
  );
}

export default function Tickets() {
  const [activeTicketTypeIndex, setActiveTicketTypeIndex] = useState(0);
  const [activeTicketPerTypeIndex, setActiveTicketPerTypeIndex] = useState(0);

  const activeTicketType = tickets[activeTicketTypeIndex];

  const activeTicketPerType =
    tickets[activeTicketTypeIndex].ticketsPerType[activeTicketPerTypeIndex];

  function changeTicketType(ticketId: number) {
    setActiveTicketTypeIndex(ticketId);
    setActiveTicketPerTypeIndex(0);
  }

  return (
    <section className="py-10 lg:py-20">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="font-tan-pearl text-4xl lg:text-6xl">Vstopnice</h2>
        </div>

        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 text-center">
          <p>
            Odkrijte čarobnost gledališča z enostavnim nakupom vstopnic na naši
            spletni strani. Izbirajte med izjemnimi predstavami in si zagotovite
            svoje mesto v prvih vrstah.
          </p>

          <div className="flex items-center gap-4">
            {tickets.map((ticket) => (
              <Button
                onClick={() => changeTicketType(ticket.id)}
                key={ticket.id}
                intent={
                  ticket.id === activeTicketTypeIndex
                    ? "primary"
                    : "outline-black"
                }
              >
                <span className="capitalize">{ticket.ticketType}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex w-7/12 flex-col gap-12">
            {activeTicketType.ticketsPerType.map((ticketPerType, index) => (
              <ActiveTicketType
                ticketPerType={ticketPerType}
                activeTicketPerTypeIndex={activeTicketPerTypeIndex}
                key={index}
                setActiveTicketPerTypeIndex={setActiveTicketPerTypeIndex}
              />
            ))}
          </div>

          <div className="flex w-5/12 flex-col justify-center gap-10">
            <p>
              <span className="font-bold">
                {activeTicketPerType.ticketTitle}
              </span>{" "}
              {activeTicketPerType.ticketDescription}
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex w-full items-center border-b border-neutral-400 pb-2">
                <p className="w-2/12 font-bold">Cena</p>

                <p className="w-10/12">{activeTicketPerType.price} €</p>
              </div>

              {activeTicketPerType.priceStudents && (
                <div className="flex w-full items-center border-b border-neutral-400 pb-2">
                  <div className="w-2/12" />

                  <p className="w-10/12">
                    {activeTicketPerType.priceStudents} € (dijaki, študenti ,
                    upokojenci){" "}
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <ButtonLink withIcon="trailing" href="/" intent="outline-black">
                Nakup vstopnic
                <IconChevronRight className="h-5 w-5" />
              </ButtonLink>

              <ButtonLink withIcon="trailing" href="/" intent="outline-black">
                Več o vstopnici
                <IconChevronRight className="h-5 w-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
