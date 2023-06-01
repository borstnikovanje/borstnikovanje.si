import { IconMenu2 } from "@tabler/icons-react";
import Button from "../../ui/Button";
import MobileNavigationMenu from "./MobileNavigationMenu";
import { useState } from "react";

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
      <nav className="bg-nav-gradient opacity-90">
        <div className="mx-auto flex w-11/12 max-w-screen-xl items-center justify-between py-4">
          <a href="/" className="inline-flex" title="Domov" aria-label="Domov">
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
              <a href="https://olaii.com/event/3093/festival-borstnikovanje-3-dnevna-vstopnica?ref=KSMUMVX">
                Nakup kart
              </a>
            </Button>
          </div>

          {/* TODO */}
          {/* TURN INTO ICON BUTTON */}
          <button className="lg:hidden" onClick={openMobileNavigationMenu}>
            <IconMenu2 className="h-7 w-7 text-white" />
          </button>
        </div>
      </nav>

      <MobileNavigationMenu
        isMobileNavigationOpen={isMobileNavigationOpen}
        closeMobileNavigationMenu={closeMobileNavigationMenu}
      />
    </>
  );
}
