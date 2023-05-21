import ButtonLink from "../ui/ButtonLink";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function ExperienceCerkljeModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        onClick={openModal}
        className="h-96 cursor-pointer bg-cerklje bg-cover bg-center bg-no-repeat"
      >
        <div className="flex h-full w-full items-center justify-center backdrop-brightness-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-20 w-20 text-primary-50"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-full max-w-2xl transform flex-col gap-2 rounded-2xl bg-white p-6 shadow-xl transition-all">
                  <div className="flex w-full justify-end">
                    <button
                      title="Zapri posnetek"
                      aria-label="Zapri posnetek"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-8 w-8 text-primary-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <iframe
                    className="w-full"
                    height="315"
                    src="https://www.youtube.com/embed/e8h5gJZJxBU"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default function ExperienceCerklje() {
  return (
    <>
      <section className="flex flex-col gap-20 py-20">
        <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-10">
          <p className="font-tan-pearl text-5xl leading-relaxed">
            Doživite Cerklje na Gorenjskem
          </p>

          <div className="flex justify-end">
            <div className="flex w-2/3 items-start gap-4">
              <div className="flex w-full flex-col gap-4">
                <p>
                  Doživite Cerkelje - Brezplačen ogled kulturne dediščine z
                  vodenjem, vključno z ogledom Borštnikove hiše, kovačije in
                  prikazom kovanja.
                </p>

                <div>
                  <ButtonLink href="/">Zanima me več</ButtonLink>
                </div>
              </div>
              <div className="w-full">
                Izdelate si lahko tudi svoj Borštnikov kovanec. Pridružite se
                nam in doživite Cerkelje na popolnoma nov način - brezplačno!
              </div>
            </div>
          </div>
        </div>

        <ExperienceCerkljeModal />
      </section>
    </>
  );
}
