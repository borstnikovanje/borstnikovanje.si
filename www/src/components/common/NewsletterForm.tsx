import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
      const response = await fetch("http://127.0.0.1:8787/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: data.email }),
      });

      const responseBody = await response.json();

      setStatus("idle");
      reset();
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex w-full items-center">
        <div className="w-full">
          <label htmlFor="emailInput" className="sr-only">
            E-mail
          </label>
          <input
            {...register("email", { required: true })}
            className="w-full border border-primary-foreground bg-transparent p-2 placeholder:text-neutral-600"
            type="email"
            placeholder="ime.priimek@gmail.com"
            id="emailInput"
          />
        </div>

        <button className="flex items-center border border-transparent bg-primary-foreground p-2 text-primary">
          <IconChevronRight className="text-primary" />
        </button>
      </div>

      {errors.email && <p className="text-red-500">Vnesite vaš email.</p>}
    </form>
  );
}
