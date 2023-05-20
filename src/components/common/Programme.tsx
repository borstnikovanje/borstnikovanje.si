import Button from "../ui/Button";

function ProgrammeActivity() {
  return (
    <div className="flex border-t border-primary-200 pt-4">
      <div className="flex w-7/12 flex-col gap-2">
        <p className="text-primary-200">
          Sobota, 22. junij {"->"} 9:45 - 10:45
        </p>
        <p className="text-3xl font-medium text-white">
          Otvoritev dogodka Borštnik po Borštniku in pogostitev
        </p>
      </div>

      <div className="flex w-5/12 flex-col gap-4">
        <div className="flex w-full items-center gap-10 border-b border-primary-200 pb-2 text-primary-200">
          <p>Kje</p>

          <p>12:00</p>
        </div>

        <div className="flex w-full items-center gap-10 border-b border-primary-200 pb-2 text-primary-200">
          <p>Kaj</p>

          <p>12:00</p>
        </div>

        <div className="flex w-full items-center gap-10 text-primary-200">
          <p>Kdaj</p>

          <p>12:00</p>
        </div>
      </div>
    </div>
  );
}

export default function Programme() {
  return (
    <section className="bg-primary-500 py-10 text-white">
      <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-6">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-medium">Program dogajanja</p>

          <div className="flex items-center gap-4">
            <Button intent="ghost">Petek, 21. junij</Button>
            <Button intent="ghost">Petek, 21. junij</Button>
            <Button intent="ghost">Petek, 21. junij</Button>
          </div>
        </div>

        <div className="flex justify-between gap-10">
          <div className="w-3/12">
            <p>
              Na festivalu »Borštnik po Borštniku« vas čaka bogat in raznolik
              program, ki zajema voden ogled po kulturni dediščini Cerkelj,
              ogled Borštnikove hiše, kovačije ter možnost izdelave svojega
              Borštnikovega kovanca. Poleg tega bodo na voljo tudi gledališke in
              kreativne delavnice, likovna razstava ter okrogla miza s pogovorom
              o Borštnikovih nagrajencih. Vstopnice za gledališke predstave so
              na voljo, prav tako pa lahko podarite darilni bon za karte,
              delavnice, Borštnikovo pojedino ali Borštnikov napitek.
              Obiskovalcem je na voljo tudi možnost donacij in plačila kart za
              druge, ter celodnevno počitniško varstvo in kreativne delavnice za
              otroke.
            </p>
          </div>

          <div className="flex w-9/12 flex-col gap-6">
            <ProgrammeActivity />
            <ProgrammeActivity />
            <ProgrammeActivity />
          </div>
        </div>
      </div>
    </section>
  );
}
