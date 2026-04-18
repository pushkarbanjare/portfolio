import { experiences } from "@/lib/data/experience";
import { BiBriefcase } from "react-icons/bi";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full flex flex-col items-center pt-24"
    >
      <div className="w-full max-w-5xl mx-auto px-5">
        <div className="flex flex-col gap-6">
          {/* ========== heading ========== */}
          <h2 className="font-heading text-3xl font-semibold text-center">
            Experience
          </h2>

          {/* ========== experience cards ========== */}
          <div className="mt-6 flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/20 p-6 backdrop-blur-sm bg-background/40 flex flex-col gap-4"
              >
                {/* ========== company and duration ========== */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-heading text-xl font-medium">
                    {exp.company}
                  </h3>
                  <span className="text-sm text-foreground/80">
                    {exp.duration}
                  </span>
                </div>

                {/* ========== role ========== */}
                <div className="flex items-center gap-2 text-md text-foreground/80">
                  <BiBriefcase size={16} className="relative" />
                  <span>{exp.role}</span>
                </div>

                {/* ========== responsibilities ========== */}
                <ul className="mt-1 list-disc list-inside text-sm text-foreground/70 flex flex-col gap-2">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* ========== tech stack ========== */}
                <ul className="mt-1 flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-foreground/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
