import './App.css';

import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
