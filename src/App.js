import "./App.css";

import Nav from "./Components/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact"

function App() {
  return (
    <main className="font-['Poppins'] body-font text-black-300 bg-gray-100">
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
