import { projects } from "@/lib/data/projects";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen pt-20 max-w-6xl w-full flex flex-col gap-10">
            <h2 className="font-heading text-3xl font-semibold text-center">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.title} className="flex flex-col justify-between rounded-xl border border-white/20 p-6 backdrop-blur-sm bg-background/40">

                        {/* project info */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-heading text-lg font-medium">{project.title}</h3>
                            <p className="text-sm text-foreground/70">{project.description}</p>

                            {/* tech-stacks */}
                            <ul className="mt-2 flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <li key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-foreground/80 cursor-pointer">{tech}</li>
                                ))}
                            </ul>
                        </div>

                        {/* action links */}
                        <div className="mt-6 flex items-center gap-4">
                            {project.githubUrl && 
                                <a href={project.githubUrl} target="_blank" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground">
                                    <FiGithub size={16}/> Github
                                </a>
                            }
                            {project.liveUrl && 
                                <a href={project.liveUrl} target="_blank" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground">
                                    <FiGlobe size={16}/> Live
                                </a>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}