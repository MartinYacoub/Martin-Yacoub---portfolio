"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Define validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset(); // clear form
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-slate-900 dark:text-white text-4xl font-black mb-6">
          Let&apos;s work together.
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
            className="self-center px-8 py-3 bg-primary text-slate-700 cursor-pointer font-semibold rounded-2xl w-full transition-all shadow-md hover:bg-slate-200 hover:tracking-widest"
          >
            Send
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <p className="text-green-500 mt-6 font-semibold">
            Your message has been sent!
          </p>
        )}
      </div>
    </section>
  );
}
