import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <Navbar />
      <About />
      <Projects />
    </main>
  );
}
