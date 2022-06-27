import Navbar from '../src/components/navbar/Navbar'
import "./App.css";
import Intro from '../src/components/intro/Intro'
import Services from '../src/components/services/Services'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
