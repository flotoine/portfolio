import Header from "@/containers/Header"
import Projects from "@/containers/Projects"
import Skills from "@/containers/Skills";
import Contact from "@/containers/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
