import Profile from "./pages/Profile";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

export default function Home() {
  return (
    <div className="font-playfair text-secondary py-10">

      <div>
        <Profile />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
