import { IconMenu2 } from "@tabler/icons-react";
import Button from "../../ui/Button";
import MobileNavigationMenu from "./MobileNavigationMenu";
import { useState } from "react";

function Banner() {
  return (
    <div className="bg-grain">
      <div className="z-10 mx-auto flex w-11/12 max-w-screen-xl items-center justify-between py-2 lg:hidden">
        <div className="flex items-center gap-2">
          <div className="items-center justify-center bg-nav-gradient p-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.116.321.17.483z" />
            </svg>
          </div>

          <p className="text-sm font-medium">Earlybird vstopnice so na voljo</p>
        </div>

        <a
          href="/nakup-vstopnic"
          className="bg-nav-gradient px-4 py-1 text-sm font-bold text-white"
        >
          Nakup
        </a>
      </div>
    </div>
  );
}

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="hover:text-primary-200 inline-flex text-white transition-colors"
    >
      {children}
    </a>
  );
}

export default function Header() {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  const openMobileNavigationMenu = () => setIsMobileNavigationOpen(true);
  const closeMobileNavigationMenu = () => setIsMobileNavigationOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-30">
        <Banner />
        <div className="bg-nav-gradient">
          <div className="mx-auto flex w-11/12 max-w-screen-xl items-center justify-between py-4">
            <a
              href="/"
              className="inline-flex"
              title="Domov"
              aria-label="Domov"
            >
              <img
                src="/photos/logo/borstnikovanje-logo-white-no-text.svg"
                width={30}
                height={30}
                alt="Borštnikovanje logo"
                loading="eager"
              />
            </a>

            <div className="hidden items-center gap-14 text-white lg:flex">
              <NavLink href="/program">Program</NavLink>

              <NavLink href="/delavnice">Delavnice</NavLink>

              <NavLink href="/kdo-smo">Kdo smo</NavLink>

              {/* <NavLink href="/ali-ves">Ali veš?</NavLink> */}

              {/* <NavLink href="/galerija">Galerija</NavLink> */}
            </div>

            {/* TODO */}
            {/* ADD TW MERGE TO REMOVE DIVS IN SUCH CASES */}
            <div className="hidden lg:block">
              <Button asChild intent="white" size="small">
                <a href="/nakup-vstopnic">Nakup vstopnic</a>
              </Button>
            </div>

            {/* TODO */}
            {/* TURN INTO ICON BUTTON */}
            <button className="lg:hidden" onClick={openMobileNavigationMenu}>
              <IconMenu2 className="h-7 w-7 text-white" />
            </button>
          </div>
        </div>
      </nav>

      <MobileNavigationMenu
        isMobileNavigationOpen={isMobileNavigationOpen}
        closeMobileNavigationMenu={closeMobileNavigationMenu}
      />
    </>
  );
}
