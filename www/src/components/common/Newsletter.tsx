export default function Newsletter() {
  return (
    <section className="flex min-h-screen items-center bg-newsletter bg-cover bg-center bg-no-repeat py-10 lg:py-32">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-6 lg:gap-10">
        <h2 className="font-tan-pearl text-4xl leading-normal text-white lg:text-6xl">
          Prijavite se na naše novičke
        </h2>

        <form className="flex justify-end" action="">
          <div className="w-full lg:w-6/12">
            <label htmlFor="emailInput" className="sr-only">
              Email
            </label>
            <input
              id="emailInput"
              type="email"
              className="w-full border-b border-b-primary bg-transparent py-2 text-primary placeholder:text-primary/80"
              placeholder="Vnesite email"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
