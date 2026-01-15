"use client";

import { useEffect, useState } from "react";
import { sendMail } from "@/app/actions/send-mail";
import { FaXTwitter } from "react-icons/fa6";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiSend,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function action(formData: FormData) {
    setStatus("loading");
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
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col items-center pt-24"
    >
      <div className=" flex-1 w-full flex justify-center">
        <div className="w-full max-w-5xl mx-auto px-5">
          <div className="flex flex-col gap-12">
            {/* heading */}
            <h2 className="font-heading text-3xl font-semibold text-center">
              Contact
            </h2>

            {/* main content */}
            <div className="grid gap-10 md:grid-cols-2 mt-10">
              {/* contact form */}
              <form action={action} className="flex flex-col gap-4 w-full">
                <input
                  type="email"
                  name="email"
                  required
                  disabled={status === "loading"}
                  placeholder="Your email"
                  className="rounded-md border border-white/20 bg-background/40 px-5 py-2 text-sm"
                />

                <textarea
                  name="message"
                  rows={5}
                  required
                  disabled={status === "loading"}
                  placeholder="Your message"
                  className="resize-none rounded-md border border-white/20 bg-background/40 px-5 py-2 text-sm"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/20 px-4 py-2 text-sm transition hover:bg-foreground hover:text-background disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  {status !== "loading" && (
                    <FiSend className="transition-transform group-hover:translate-x-1" />
                  )}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Please check your inputs and try again.
                  </p>
                )}
                {status === "success" && (
                  <p className="text-sm text-green-400">
                    Message sent successfully!
                  </p>
                )}
              </form>

              {/* socials + context */}
              <div className="flex flex-col justify-evenly gap-10 text-center">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Feel free to reach out for collaborations, opportunities, or
                  just to have a conversation about technology product thinking.
                </p>

                <div className="flex justify-center items-center gap-5">
                  <a
                    href="https://leetcode.com/u/pushkarbanjare/"
                    target="_blank"
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <SiLeetcode size={20} />
                  </a>
                  <a
                    href="https://github.com/pushkarbanjare"
                    target="_blank"
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/pushkarbanjare"
                    target="_blank"
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="https://x.com/pushkarbanjare"
                    target="_blank"
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <FaXTwitter size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/pushkar.banjare"
                    target="_blank"
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <FiInstagram size={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/@pushkarbanjare"
                    target="_blank"
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <FiYoutube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer line */}
      <div className="pt-4 pb-4 border-t border-white/20 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} Pushkar Banjare. All rights reserved.
      </div>
    </section>
  );
}
