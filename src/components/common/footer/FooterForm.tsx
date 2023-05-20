import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LoadingSpinner from "../../ui/LoadingSpinner";

type ContactFormData = {
  email: string;
  message: string;
};

type FetchStatus = "idle" | "fetching" | "finished" | "error";

export default function FooterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = (formData) => submitMessage(formData);

  const [status, setStatus] = useState<FetchStatus>("idle");

  async function submitMessage(formData: ContactFormData) {
    setStatus("fetching");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("There was an error sending your message!");
      }

      setStatus("finished");
      reset();
    } catch (error) {
      setStatus("error");
    }
  }

  useEffect(() => {
    if (status === "finished") {
      setStatus("idle");
    }
  }, [status]);

  return (
    <div className="flex flex-col gap-2.5">
      <div>
        <p className="text-2xl font-bold text-neutral-50">Imate vprašanje?</p>
        <p>Pišite nam, z veseljem vam bomo odgovorili.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
        {/* TODO
          FIX RING COLOR AND SIZE FOR FOCUS
        */}
        <div>
          <label className="sr-only" htmlFor="questionInput">
            Vprašanje
          </label>
          <textarea {...register("message", { required: true })} id="questionInput" cols={30} rows={3} className={`w-full resize-none rounded-md border p-3 text-neutral-950 focus:outline-none focus:ring-1 focus:ring-offset-1 ${errors.message ? "border-red-500 focus:ring-red-500" : ""}`} placeholder="Vprašanje..."></textarea>
        </div>

        {/* TODO
          FIX RING COLOR AND SIZE FOR FOCUS
        */}
        <div className="flex w-full">
          <label className="sr-only" htmlFor="emailInput">
            Vprašanje
          </label>
          <input {...register("email", { required: true })} id="emailInput" type="email" className={`w-2/3 rounded-bl-md rounded-tl-md border p-3 text-neutral-950 focus:outline-none focus:ring-1 focus:ring-offset-1 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-transparent"}`} placeholder="Vaš e-mail" />
          <button disabled={status === "fetching" || status === "finished"} className="flex w-1/3 items-center justify-center rounded-br-md rounded-tr-md border-none bg-primary px-6 text-sm font-medium uppercase text-white focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1">
            {status === "idle" && "Pošljite"}
            {(status === "fetching" || status === "finished") && <LoadingSpinner />}
          </button>
        </div>
      </form>
    </div>
  );
}
