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
        ticketLink: "/nakup-vstopnic",
        callToAction: "Nakup vstopnic",
      },
      {
        id: 1,
        ticketName: "3-dnevna",
        ticketTitle: "EARLYBIRD 3-DNEVNA vstopnica",
        ticketDescription:
          "vključuje vse 3 večerne festivalske dogodke (obe predstavi in koncert).",
        price: 39,
        priceStudents: 30,
        ticketLink: "/nakup-vstopnic",
        callToAction: "Nakup vstopnic",
      },
      {
        id: 2,
        ticketName: "borštnikova",
        ticketTitle: "Borštnikova vstopnica",
        ticketDescription:
          "vključuje možnost izbire sedeža, dobrodošlico na Borštnikovi domačiji, pijačo in domače dobrote ter voden ogled Borštnikove rojstne hiše.",
        price: 50,
        ticketLink: "/nakup-vstopnic",
        disclaimer:
          "ob nakupu 10 Borštnikovih vstopnic vam pripada povabilo na VIP sprejem 21.6. po otvoritveni predstavi.",
        callToAction: "Nakup vstopnic",
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
        ticketTitle: "Gledališka delavnica",
        ticketDescription:
          "vam omogočajo, da razvijete svoje gledališke spretnosti, izrazite svojo ustvarjalnost in se poglobite v svet gledališča.",
        price: 35,
        priceStudents: 25,
        ticketLink: "/nakup-vstopnic",
        disclaimer:
          "ob nakupu 10 kart vam pripada povabilo na VIP sprejem 21.6. po otvoritveni predstavi.",
        callToAction: "Nakup vstopnic",
      },
      {
        id: 1,
        ticketName: "3-dnevna",
        ticketTitle: "3 dnevna gledališka delavnica",
        ticketDescription:
          "vam omogočajo, da razvijete svoje gledališke spretnosti, izrazite svojo ustvarjalnost in se poglobite v svet gledališča.",
        price: 87,
        priceStudents: 62,
        ticketLink: "/nakup-vstopnic",
        disclaimer:
          "ob nakupu 10 kart vam pripada povabilo na VIP sprejem 21.6. po otvoritveni predstavi.",
        callToAction: "Nakup vstopnic",
      },
      {
        id: 2,
        ticketName: "slikarska",
        ticketTitle: "Slikarska kolonija",
        ticketDescription:
          "bo potekala 21., 22. in 23. junija. Izgubite se  v ustvarjanju, raziskujete svojo umetniško strast in se povežete z drugimi ustvarjalci.",
        price: 0,
        ticketLink: "/dogodki/day-1/likovna-kolonija",
        disclaimer:
          "Priporočamo prisotnost vsaj 2 dni, saj bomo ob zaključku festivala organizirali razstavo slik, ki bo odprta za javnost.",
        callToAction: "Več",
      },
      {
        id: 3,
        ticketName: "kreativna",
        ticketTitle: "Kreativne delavnice",
        ticketDescription:
          "so namenjene otrokom od 5. do 9. razreda. Spoznali bodo osnove gledališča ter se naučili, kako uporabiti različne materiale za ustvarjanje odrske scenografije. Skozi zabavne in interaktivne dejavnosti bodo otroci razvijali svojo domišljijo, ustvarjalnost in timsko delo.",
        price: 0,
        ticketLink: "/dogodki/day-1/kreativne-delavnice",
        disclaimer: "za otroke 5.-9. razred, omejitev 20 udeležencev.",
        callToAction: "Več",
      },
    ],
  },
  {
    id: 2,
    ticketType: "drugo",
    ticketsPerType: [
      {
        id: 0,
        ticketName: "voden ogled",
        ticketTitle: "Vodeni ogled po kulturni dediščini Cerkelj",
        ticketDescription:
          "je nepozabno doživetje, ki ga ne smete zamuditi. Pridružite se nam na ogledu, ki vključuje tudi Borštnikovo hišo in prikaz kovaštva.",
        price: 0,
        ticketLink: "/dogodki/day-1/dozivi-cerklje",
        disclaimer:
          "Število mest je omejeno. Ogled traja 75 min. Vsak dan ob 18:00.",
        callToAction: "Prijava",
      },
      {
        id: 1,
        ticketName: "konferenca",
        ticketTitle: "Novinarska konferenca",
        ticketDescription:
          "bo potekala 21. junija ob 11. uri na vrtu Borštnikove domačije. Dogodek je odprt tudi za goste. Lepo vabljeni.",
        price: 0,
        ticketLink: "/dogodki/day-1/novinarska-konferenca",
        disclaimer: "",
        callToAction: "Več",
      },
      {
        id: 2,
        ticketName: "pogovor",
        ticketTitle: "Pogovor z Borštnikovimi nagrajenci",
        ticketDescription:
          "bo 23. junija ob 17. uri na vrtu Borštnikove domačije. Vstop je prost. Ne zamudite te priložnosti za vpogled v svet vrhunskih umetnikov.",
        price: 0,
        ticketLink: "/dogodki/day-3/klepet-ob-kavi",
        disclaimer: "",
        callToAction: "Več",
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
    callToAction: string;
    disclaimer?: string;
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
    <div className="flex flex-col gap-4">
      <button
        onClick={() => setActiveTicketPerTypeIndex(ticketPerType.id)}
        className={`flex items-center ${
          ticketPerType.id === activeTicketPerTypeIndex
            ? ""
            : "text-neutral-400 transition-colors hover:text-neutral-950"
        }`}
      >
        <p className="flex items-center gap-2 font-tan-pearl text-3xl uppercase lg:text-5xl">
          {ticketPerType.ticketName}
          <IconChevronRight className="h-8 w-8" />
        </p>
      </button>

      {activeTicketPerTypeIndex === ticketPerType.id && (
        <div className="flex flex-col gap-4 lg:hidden">
          <p>
            <span className="font-bold">{ticketPerType.ticketTitle}</span>{" "}
            {ticketPerType.ticketDescription}
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex w-full items-center border-b border-neutral-400 pb-2">
              <p className="w-2/12 font-bold">Cena</p>

              <p className="w-10/12">{ticketPerType.price} €</p>
            </div>

            {ticketPerType.priceStudents && (
              <div className="flex w-full items-center border-b border-neutral-400 pb-2">
                <div className="w-2/12" />

                <p className="w-10/12">
                  {ticketPerType.priceStudents} € (dijaki, študenti ,
                  upokojenci){" "}
                </p>
              </div>
            )}
          </div>

          {ticketPerType.disclaimer && (
            <p className="text-sm italic text-muted">
              *{ticketPerType.disclaimer}
            </p>
          )}

          <div className="flex flex-col gap-4">
            <Button asChild intent="outline-black">
              <a
                className="flex items-center justify-center gap-1"
                href={ticketPerType.ticketLink}
              >
                {ticketPerType.callToAction}

                <IconChevronRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
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
          <div className="flex w-full flex-col gap-8 lg:w-7/12 lg:gap-12">
            {activeTicketType.ticketsPerType.map((ticketPerType, index) => (
              <ActiveTicketType
                ticketPerType={ticketPerType}
                activeTicketPerTypeIndex={activeTicketPerTypeIndex}
                key={index}
                setActiveTicketPerTypeIndex={setActiveTicketPerTypeIndex}
              />
            ))}
          </div>

          <div className="hidden w-5/12 flex-col justify-center gap-10 lg:flex">
            <p>
              <span className="font-bold">
                {activeTicketPerType.ticketTitle}
              </span>{" "}
              {activeTicketPerType.ticketDescription}
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex w-full items-center border-b border-neutral-400 pb-2">
                <p className="w-2/12 font-bold">Cena</p>

                <p className="w-10/12">
                  {activeTicketPerType.price === 0
                    ? "Brezplačno"
                    : `${activeTicketPerType.price} €`}
                </p>
              </div>

              {activeTicketPerType.priceStudents && (
                <div className="flex w-full items-center border-b border-neutral-400 pb-2">
                  <div className="w-2/12" />

                  <p className="w-10/12">
                    {activeTicketPerType.priceStudents} € (dijaki, študenti,
                    upokojenci){" "}
                  </p>
                </div>
              )}
            </div>

            {activeTicketPerType.disclaimer && (
              <p className="text-sm italic text-muted">
                *{activeTicketPerType.disclaimer}
              </p>
            )}

            <div className="flex gap-4">
              <Button asChild intent="outline-black">
                <a
                  className="flex items-center justify-center gap-1"
                  href={activeTicketPerType.ticketLink}
                >
                  {activeTicketPerType.callToAction}

                  <IconChevronRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
