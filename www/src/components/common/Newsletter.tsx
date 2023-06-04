import { IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const API_URL = import.meta.env.PUBLIC_API_URL_NEWSLETTER;

type NewsletterForm = {
  email: string;
};

type FetchStatus = "idle" | "fetching";

export default function Newsletter() {
  const [status, setStatus] = useState<FetchStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterForm>();

  const onSubmit: SubmitHandler<NewsletterForm> = async (data) => {
    setStatus("fetching");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ email: data.email }),
      });

      if (!response.ok) {
        const responseBody = await response.json();
        toast.error(responseBody.message);
      }

      const responseBody = await response.json();

      if (responseBody.subscription.state === "active") {
        toast.error("Ste že prijavljeni na e-novičke.");
        setStatus("idle");
        reset();
        return;
      }

      toast.success(
        "Uspešno ste se naročili. Potrdite vašo naročnino na emailu."
      );
      reset();
      setStatus("idle");
    } catch (error) {
      toast.error("Napaka! Poskusite znova.");
      setStatus("idle");
    }
  };

  return (
    <>
      <section className="flex min-h-screen items-center bg-newsletter bg-cover bg-center bg-no-repeat py-10 lg:py-32">
        <div className="mx-auto flex w-11/12 max-w-screen-xl flex-col gap-6 lg:gap-10">
          <h2 className="font-tan-pearl text-4xl leading-normal text-white lg:text-6xl">
            Prijavite se na naše novičke
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-end"
            action=""
          >
            <div className="w-full lg:w-6/12">
              <label htmlFor="emailInput" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  {...register("email", { required: true })}
                  id="emailInput"
                  type="email"
                  className={`w-full rounded-sm border-b bg-transparent py-2 text-primary placeholder:text-primary/80 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-b-red-500 focus:ring-red-500"
                      : "border-b-primary"
                  }`}
                  placeholder="Vnesite email"
                />

                <button className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-2 text-white">
                  Prijava
                  <IconArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Toaster position="top-right" />
    </>
  );
}
