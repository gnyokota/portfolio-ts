import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Profile from "./components/header/Profile";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
    </Router>
  );
}

export default App;
