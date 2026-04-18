"use client";

import { useEffect, useState } from "react";
import { sendMail } from "@/app/actions/send-mail";
import { FiSend } from "react-icons/fi";

export default function ContactClient() {
  // ========== ui lifecycle (initial/pending/completed/failed) ==========
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function action(formData: FormData) {
    setStatus("loading");

    // ========== invoke server action ==========
    const res = await sendMail(formData);
    if (!res.success) {
      setStatus("error");
      return;
    }
    setStatus("success");
  }

  useEffect(() => {
    if (status === "idle" || status === "loading") return;
    const timer = setTimeout(() => setStatus("idle"), 3000);
    // ========== cleanup fn to prevent memory leaks  ==========
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <form action={action} className="flex flex-col gap-4 w-full">
      <input
        type="email"
        name="email"
        required
        disabled={status === "loading"}
        placeholder="Your email"
        className="rounded-lg border border-white/20 bg-background/40 px-5 py-2 text-sm"
      />

      <textarea
        name="message"
        rows={10}
        required
        disabled={status === "loading"}
        placeholder="Your message"
        className="resize-none rounded-lg border border-white/20 bg-background/40 px-5 py-2 text-sm"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-4 py-2 text-sm transition hover:bg-foreground hover:text-background disabled:opacity-60"
      >
        {status === "loading" ? "Sending your message..." : "Send Message"}

        {status !== "loading" && (
          <FiSend className="transition-transform group-hover:translate-x-1 group-hover:rotate-45" />
        )}
      </button>

      <div className="h-6 flex items-center">
        {status === "error" && (
          <p className="text-sm text-red-400">
            Please check your inputs and try again.
          </p>
        )}
        {status === "success" && (
          <p className="text-sm text-green-400">Message sent successfully!</p>
        )}
      </div>
    </form>
  );
}
