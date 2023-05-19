import Button from "../ui/Button";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className="inline-flex">
      {children}
    </a>
  );
}

export default function Header() {
  return (
    <nav className="bg-primary">
      <div className="mx-auto flex w-11/12 max-w-screen-xl items-center justify-between py-4">
        <a href="/" className="inline-flex" title="Domov" aria-label="Domov">
          <img src="/photos/logo/borstnikovanje-logo-white-no-text.svg" width={40} height={40} alt="Borštnikovanje logo" />
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 text-white lg:flex">
            <NavLink href="/program">Program</NavLink>

            <NavLink href="/delavnice">Delavnice</NavLink>

            <NavLink href="/kdo-smo">Kdo smo</NavLink>

            <NavLink href="/ali-ves">Ali veš?</NavLink>

            <NavLink href="/galerija">Galerija</NavLink>
          </div>

          <Button intent="white" size="sm">
            Nakup kart
          </Button>
        </div>
      </div>
    </nav>
  );
}
