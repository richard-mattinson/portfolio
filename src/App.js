import "./App.css";

import Nav from "./Components/Nav/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <main className="font-['Poppins'] body-font text-gray-300 bg-yellow-900">
      <Nav />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
