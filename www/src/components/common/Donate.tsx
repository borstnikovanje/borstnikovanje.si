import Button from "../ui/Button";

export default function Donate() {
  return (
    <section className="bg-donate bg-cover bg-center bg-no-repeat py-10 lg:py-20">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col items-center gap-10 text-center">
        <h2 className="font-tan-pearl text-4xl lg:text-6xl">Doniraj</h2>

        <p className="leading-loose">
          Podprite nas in skupaj ustvarimo največji kulturni dogodek v Cerkljah
          v zadnjih 10 letih! Vaša podpora je neprecenljiva in prav vsak
          prispevek bo pripomogel k uspešni izvedbi festivala.
        </p>

        <Button asChild intent="outline-black">
          <a href="https://donate.stripe.com/eVaeXQ97O3g2cHC5kk?locale=sl">
            Doniraj
          </a>
        </Button>
      </div>
    </section>
  );
}
