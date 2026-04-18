import ContactClient from "./contact-client";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col items-center pt-24"
    >
      <div className="flex-1 w-full flex justify-center">
        <div className="w-full max-w-5xl mx-auto px-5">
          <div className="flex flex-col gap-12">
            {/* ========== heading ========== */}
            <h2 className="font-heading text-3xl font-semibold text-center">
              Contact
            </h2>

            {/* ========== main ========== */}
            <div className="grid gap-10 md:grid-cols-2">
              {/* ========== client form ========== */}
              <ContactClient />

              {/* ========== socials and context ========== */}
              <div className="flex flex-col justify-center text-center py-5 px-2">
                <p className="text-sm text-foreground/80 leading-relaxed px-5">
                  Feel free to reach out for collaborations, opportunities, or
                  just to have a conversation about technology product thinking.
                </p>

                <div className="flex justify-center items-center gap-5 py-10">
                  <a
                    href="https://leetcode.com/u/pushkarbanjare/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <SiLeetcode size={20} />
                  </a>

                  <a
                    href="https://github.com/pushkarbanjare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <FiGithub size={20} />
                  </a>

                  <a
                    href="https://linkedin.com/in/pushkarbanjare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <FiLinkedin size={20} />
                  </a>

                  <a
                    href="https://x.com/pushkarbanjare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <FaXTwitter size={20} />
                  </a>

                  <a
                    href="https://www.instagram.com/pushkar.banjare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <FiInstagram size={20} />
                  </a>

                  <a
                    href="https://www.youtube.com/@pushkarbanjare"
                    target="_blank"
                    rel="noopener noreferrer"
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

      {/* ========== footer ========== */}
      <div className="pt-4 pb-4 border-t border-white/20 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} Pushkar Banjare. All rights reserved.
      </div>
    </section>
  );
}
