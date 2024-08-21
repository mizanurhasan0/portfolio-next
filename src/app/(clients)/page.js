import Profile from "./pages/Profile";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Map from "./pages/Map";

export default function Home() {
  return (
    <div className="font-playfair text-secondary pt-10">

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
        <div id="contact01">
          <Contact />
        </div>
        <div className="">
          <Map />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
