import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import LoadingSpinner from "../ui/LoadingSpinner";

const API_URL = import.meta.env.PUBLIC_API_URL_NEWSLETTER;

type NewsletterForm = {
  email: string;
};

type FetchStatus = "idle" | "fetching";

export default function NewsletterForm() {
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
      setStatus("idle");
    } catch (error) {
      toast.error("Napaka! Poskusite znova.");
      setStatus("idle");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="flex h-full w-full items-center">
          <div className="w-full">
            <label htmlFor="emailInput" className="sr-only">
              E-mail
            </label>
            <input
              {...register("email", { required: true })}
              className="h-full w-full border border-primary-foreground bg-transparent p-2 placeholder:text-neutral-600"
              type="email"
              placeholder="ime.priimek@gmail.com"
              id="emailInput"
            />
          </div>

          <button className="flex h-full items-center border border-transparent bg-primary-foreground p-2 text-primary">
            {status === "idle" && <IconChevronRight className="text-primary" />}
            {status === "fetching" && <LoadingSpinner size="base" />}
          </button>
        </div>

        {errors.email && <p className="text-red-600">Vnesite vaš email.</p>}
      </form>

      <Toaster position="top-right" />
    </>
  );
}
