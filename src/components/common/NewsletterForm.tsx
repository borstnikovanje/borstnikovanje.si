import { IconChevronRight } from "@tabler/icons-react";
import { useForm, SubmitHandler } from "react-hook-form";

type NewsletterForm = {
  email: string;
};

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterForm>();

  const onSubmit: SubmitHandler<NewsletterForm> = () => {};

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
