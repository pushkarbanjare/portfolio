import { heroData } from "@/lib/data/site";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center gap-8 text-center">
            {/* profile picture */}
            <div className="relative h-50 w-50 overflow-hidden rounded-full border border-white/10">
                <Image src={heroData.profileImage} alt={heroData.name} fill sizes="(max-width: 768px) 144px, 144px" className="object-cover" priority/>
            </div>
            {/* name */}
            <h1 className="font-heading text-4xl sm:text-5xl font-bold">{heroData.name}</h1>
            {/* role */}
            <p className="text-xl text-foreground/90">{heroData.role}</p>
            {/* tagline */}
            <p className="max-w-xl text-sm text-foreground/70">{heroData.tagline}</p>
            {/* resume-btn */}
            <a href={heroData.resumeUrl} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-foreground hover:text-background">
                View Resume
                <FiArrowRight size={15}/>
            </a>
        </section>
    )
}