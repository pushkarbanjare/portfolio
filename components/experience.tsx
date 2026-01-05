import { experiences } from "@/lib/data/experience";
import { BiUser } from "react-icons/bi";

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen py-20 max-w-4xl w-full flex flex-col gap-10">
            <h2 className="font-heading text-3xl font-semibold text-center">Experience</h2>
            {/* experience card */}
            <div className="flex flex-col gap-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="rounded-xl border border-white/10 p-6 backdrop-blur-sm bg-background/40 flex flex-col gap-4">
                        {/* header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <BiUser size={16}/>
                                <h3 className="text-md font-medium">{exp.role}</h3>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground/70 font-style: italic">
                                {exp.duration}
                            </div>
                        </div>
                        {/* company */}
                        <p className="text-sm text-foreground/80">{exp.company}</p>
                        {/* description */}
                        <ul className="list-disc list-inside text-sm text-foreground/70 flex flex-col gap-2">
                            {exp.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        {/* techstack */}
                        <ul className="flex flex-wrap gap-2 pt-2">
                            {exp.techStack.map((tech)=>(
                                <li key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-foreground/80">{tech}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}