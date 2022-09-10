import Navbar from '../src/components/navbar/Navbar'
import "./App.css";
import Intro from '../src/components/intro/Intro'
import Services from '../src/components/services/Services'
import Experience from './components/experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
    </div>
  );
}

export default App;
