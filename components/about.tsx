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
          <div className="mt-6 space-y-6 sm:mx-10">
            {aboutData.paragraph.map((text, index) => (
              <p
                key={index}
                className="text-sm text-foreground/70 leading-loose text-center"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
