"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "loading">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      setStatus("loading");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        reset();
        setStatus("success");
        setTimeout(() => setStatus("idle"), 2000); // back to normal after 2s
      } else {
        alert("Failed to send. Try again.");
        setStatus("idle");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send. Try again.");
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-slate-900 dark:text-white text-4xl font-black mb-6">
          {"Let's work together."}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-12">
          I am currently open to freelance opportunities and full-time roles.
        </p>

        <form
          className="flex flex-col gap-6 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className={`px-4 py-3 rounded-xl border ${
                errors.name ? "border-red-500" : "border-slate-200"
              } dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className={`px-4 py-3 rounded-xl border ${
                errors.email ? "border-red-500" : "border-slate-200"
              } dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <textarea
              rows={5}
              placeholder="Your Message"
              {...register("message")}
              className={`px-4 py-3 rounded-xl border ${
                errors.message ? "border-red-500" : "border-slate-200"
              } dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition resize-none`}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`self-center px-8 py-3 font-semibold rounded-2xl w-full transition-all shadow-md hover:tracking-widest ${
              status === "success"
                ? "bg-green-500 text-white"
                : status === "loading"
                  ? "bg-primary/70 text-slate-700 cursor-not-allowed"
                  : "bg-primary text-slate-700 hover:bg-slate-200"
            }`}
            disabled={status === "loading"}
          >
            {status === "loading"
              ? "Sending..."
              : status === "success"
                ? "Sent!"
                : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
