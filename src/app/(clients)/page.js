import Profile from "./pages/Profile";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

export default function Home() {
  return (
    <div className="font-playfair text-secondary py-10">

      <div>
        <div id="profile01">
          <Profile />
        </div>
        <div id="about01">
          <About />
        </div>
        <div id="skills01">
          <Skills />
        </div>
        <div id="projects01">
          <Projects />
        </div>
      </div>
    </div>
  );
}
