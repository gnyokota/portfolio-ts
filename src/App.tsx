import Navbar from "./components/header/Navbar";
import Profile from "./components/header/Profile";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
