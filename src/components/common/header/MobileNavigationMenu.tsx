import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconX,
} from "@tabler/icons-react";

interface Props {
  isMobileNavigationOpen: boolean;
  closeMobileNavigationMenu: () => void;
}

interface MobileNavigationMenuItemProps {
  children: React.ReactNode;
  href: string;
  closeMobileNavigationMenu: () => void;
}

const MobileNavigationMenuItem = ({
  children,
  href,
  closeMobileNavigationMenu,
}: MobileNavigationMenuItemProps) => {
  return (
    <li>
      <a
        onClick={closeMobileNavigationMenu}
        className="flex items-center gap-2 px-6 py-2 transition-colors hover:bg-primary-600 hover:text-primary-50"
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

const MobileNavigationMenu = ({
  isMobileNavigationOpen,
  closeMobileNavigationMenu,
}: Props) => {
  return (
    <Transition.Root appear show={isMobileNavigationOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        onClose={closeMobileNavigationMenu}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="relative flex h-full flex-col gap-4 overflow-y-auto bg-grain pt-4 shadow-xl lg:pt-6">
                    <div className="flex justify-end px-4 lg:px-6">
                      <button
                        onClick={closeMobileNavigationMenu}
                        title="Zapri meni"
                        aria-label="Zapri meni"
                      >
                        <span className="sr-only">Zapri meni</span>
                        <IconX className="h-6 w-6" />
                      </button>
                    </div>

                    <ul className="grid grid-cols-1">
                      <MobileNavigationMenuItem
                        closeMobileNavigationMenu={closeMobileNavigationMenu}
                        href="/program"
                      >
                        Program
                      </MobileNavigationMenuItem>

                      <MobileNavigationMenuItem
                        closeMobileNavigationMenu={closeMobileNavigationMenu}
                        href="/delavnice"
                      >
                        Delavnice
                      </MobileNavigationMenuItem>

                      <MobileNavigationMenuItem
                        closeMobileNavigationMenu={closeMobileNavigationMenu}
                        href="/kdo-smo"
                      >
                        Kdo smo
                      </MobileNavigationMenuItem>

                      <MobileNavigationMenuItem
                        closeMobileNavigationMenu={closeMobileNavigationMenu}
                        href="/ali-ves"
                      >
                        Ali veš
                      </MobileNavigationMenuItem>

                      <MobileNavigationMenuItem
                        closeMobileNavigationMenu={closeMobileNavigationMenu}
                        href="/galerija"
                      >
                        Galerija
                      </MobileNavigationMenuItem>
                    </ul>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex w-full items-center justify-center gap-4 p-4">
                    <a href="/">
                      <IconBrandInstagram className="h-7 w-7 text-gray-900 transition-colors hover:text-primary-600" />
                    </a>

                    <a href="/">
                      <IconBrandTwitter className="h-7 w-7 text-gray-900 transition-colors hover:text-primary-600" />
                    </a>

                    <a href="/">
                      <IconBrandFacebook className="h-7 w-7 text-gray-900 transition-colors hover:text-primary-600" />
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileNavigationMenu;
