import { aboutData } from "@/lib/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col items-center pt-24"
    >
      <div className="w-full max-w-5xl mx-auto px-5">
        <div className="flex flex-col gap-6">
          {/* heading */}
          <h2 className="font-heading text-3xl font-semibold text-center">
            About
          </h2>

          {/* paragraph */}
          <ul className="mt-8 max-w-3xl mx-auto space-y-5">
            {aboutData.paragraph.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-2 rounded-full bg-foreground/60"></span>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
