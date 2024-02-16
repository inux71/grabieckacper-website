import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar
        title="grabieckacper.com"
        links={["about", "skills", "experience", "projects"]}
      />

      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
