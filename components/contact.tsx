"use client";

import { useEffect, useState } from "react";
import { sendMail } from "@/app/actions/send-mail";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin, FiYoutube, FiSend } from "react-icons/fi";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function action(formData: FormData) {
    setStatus("loading");

    const res = await sendMail(formData);

    if (!res.success) {
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  // auto-dismiss messages
  useEffect(() => {
    if (status === "idle" || status === "loading") return;

    const timer = setTimeout(() => {
      setStatus("idle");
    }, 3000);

    return () => clearTimeout(timer);
  }, [status]);

  return (
    <section id="contact" className="min-h-screen pt-20 max-w-xl flex flex-col gap-8 text-center">
      <h2 className="font-heading text-3xl font-semibold">Contact</h2>

      <form action={action} className="flex flex-col gap-4">
        <input type="email" name="email" required disabled={status === "loading"} placeholder="Your email" className="rounded-md border border-white/10 bg-background/40 px-6 py-3 text-sm"/>

        <textarea name="message" rows={5} required disabled={status === "loading"} placeholder="Your message" className="resize-none rounded-md border border-white/10 bg-background/40 px-6 py-3 text-sm"/>

        <button type="submit" disabled={status === "loading"} className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm transition hover:bg-foreground hover:text-background disabled:opacity-60">
          {status === "loading" ? "Sending..." : "Send Message"}
          {status !== "loading" && (
            <FiSend className="group-hover:translate-x-1 transition-transform" />
          )}
        </button>

        {status === "error" && (
          <p className="text-sm text-red-400">Please check your inputs and try again.</p>
        )}

        {status === "success" && (
          <p className="text-sm text-green-400">Message sent successfully!</p>
        )}
        </form>
        
        {/* socials */}
        <div className="flex justify-center gap-6 pt-4">
            <a href="https://github.com/pushkarbanjare" target="_blank" aria-label="Github" className="text-foreground/70 hover:text-foreground transition"><FiGithub size={20}/></a>
            <a href="https://linkedin.com/in/pushkarbanjare" target="_blank" aria-label="Linkedin" className="text-foreground/70 hover:text-foreground transition"><FiLinkedin size={20}/></a>
            <a href="https://x.com/pushkarbanjare" target="_blank" aria-label="X" className="text-foreground/70 hover:text-foreground transition"><FaXTwitter size={20}/>                </a>
            <a href="https://www.instagram.com/pushkar.banjare" target="_blank" aria-label="Instagram" className="text-foreground/70 hover:text-foreground transition"><FiInstagram size={20}/></a>
            <a href="https://www.youtube.com/@pushkarbanjare" target="_blank" aria-label="Youtube" className="text-foreground/70 hover:text-foreground transition"><FiYoutube size={20}/></a>
        </div>
    </section>
  );
}
