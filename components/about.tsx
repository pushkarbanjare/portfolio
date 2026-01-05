import { aboutData } from "@/lib/data/about";

export default function About() {
    return (
        <section id="about" className="min-h-screen pt-20 max-w-3xl flex flex-col gap-6 text-center">
            <h2 className="font-heading text-3xl font-semibold">About</h2>
            
            {aboutData.paragraph.map((text, index) => (
                <p key={index} className="text-sm text-foreground/70 leading-relaxed">{text}</p>
            ))}

            <ul className="mt-6 flex flex-wrap justify-center gap-3">
                {aboutData.focusArea.map((area)=>(
                    <li key={area} className="rounded-full border border-white/10 px-4 py-2 text-xs text-foreground/80">
                        {area}
                    </li>
                ))}
            </ul>
        </section>
    )
}