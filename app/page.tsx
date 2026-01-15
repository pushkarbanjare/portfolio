import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/home";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="px-5 flex flex-col items-center">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
