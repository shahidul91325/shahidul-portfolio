import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ProfessionalDevelopment from "@/components/ProfessionalDevelopment";
import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="page-frame flex flex-col w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProfessionalDevelopment />
        <Contact />
      </div>
    </PageTransition>
  );
}
