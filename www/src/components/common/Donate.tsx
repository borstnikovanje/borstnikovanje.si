import Button from "../ui/Button";

export default function Donate() {
  return (
    <section className="bg-donate bg-cover bg-center bg-no-repeat py-10 lg:py-20">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col items-center gap-10 text-center">
        <h2 className="font-tan-pearl text-4xl lg:text-6xl">Doniraj</h2>

        <p className="leading-loose">
          Vaša donacija nam bo omogočila izvedbo predstav iz tekmovalnega
          programa Borštnikovega srečanja, organizacijo spremljevalnega
          programa, kreativnih delavnic, okrogle mize s priznanimi Borštnikovimi
          nagrajenci ter številne druge aktivnosti, ki bodo obogatile kulturno
          življenje Cerklj in širše regije. Vsak prispevek šteje in ima
          neposreden vpliv na ohranjanje slovenske kulturne dediščine. Z vašo
          donacijo boste omogočili lokalnemu prebivalstvu, turistom in mladim,
          užitek v vrhunskih predstavah uprizoritvene umetnosti ter spoznavanju
          bogate kulturne dediščine kraja.
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
