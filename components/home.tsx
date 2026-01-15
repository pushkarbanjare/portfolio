import { homeData } from "@/lib/data/site";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen w-full max-w-6xl flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-5xl p-5">
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-10 transition-[gap] duration-300">
          {/* matter */}
          <div className="w-full md:w-4/6 text-center md:text-left">
            {/* name */}
            <h1 className="mt-6 md:mt-0 font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold transition-[font-size,line-height] duration-300 ease-out">
              {homeData.name}
            </h1>

            {/* role */}
            <div className="mt-3 text-xl text-foreground/90 font-semibold">
              {homeData.role}
            </div>

            {/* tagline */}
            <div className="mt-6 max-w-lg text-sm text-foreground/80 leading-loose mx-auto md:mx-0 transition-all duration-300 ease-out">
              {homeData.tagline}
            </div>

            {/* resume btn */}
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href={homeData.resumeUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-4 py-2 text-sm transition hover:bg-foreground hover:text-background"
              >
                Resume <FiArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* picture */}
          <div className="w-full md:w-2/6 flex justify-center">
            <div className="relative h-60 w-60 overflow-hidden rounded-xl border border-white/20">
              <Image
                src={homeData.profileImage}
                alt={homeData.name}
                fill
                sizes="(max-width: 768px) 208px, 208px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
