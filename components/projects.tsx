import { projects } from "@/lib/data/projects";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center pt-24"
    >
      <div className="w-full max-w-5xl mx-auto px-5">
        <div className="flex flex-col gap-6">
          {/* heading */}
          <h2 className="font-heading text-3xl font-semibold text-center">
            Projects
          </h2>

          {/* projects grid */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col justify-between rounded-xl border border-white/20 p-6 backdrop-blur-sm bg-background/40"
              >
                {/* project info */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-lg">{project.title}</h3>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* tech stack */}
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-white/20 px-3 py-1 text-xs text-foreground/80"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* action links */}
                <div className="mt-6 flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-3 py-2 text-xs text-foreground transition hover:bg-foreground hover:text-background"
                    >
                      <FiGithub size={16} />
                      Github
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-3 py-2 text-xs text-foreground transition hover:bg-foreground hover:text-background"
                    >
                      <FiGlobe size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
