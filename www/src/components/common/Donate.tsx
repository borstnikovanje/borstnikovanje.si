import Button from "../ui/Button";

export default function Donate() {
  return (
    <section className="bg-donate bg-cover bg-center bg-no-repeat py-10 lg:py-20">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col items-center gap-10 text-center">
        <h2 className="font-tan-pearl text-4xl lg:text-6xl">Doniraj</h2>

        <p>
          Z vašo pomočjo bomo dogodek naredili še boljši. Podprite našo ekipo
          prostovoljcov z donacijo. Hvala ker nas podpirate!
        </p>

        <Button asChild intent="gradient">
          <a href="https://donate.stripe.com/eVaeXQ97O3g2cHC5kk?locale=sl">
            Doniraj
          </a>
        </Button>
      </div>
    </section>
  );
}
