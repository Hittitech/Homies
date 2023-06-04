import Header from "./components/Hero/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Hero/Comapnies";
import Residencies from "./components/Hero/Residencies";
import './App.css'
import Value from "./components/Value";
import Contact from "./components/Contact";
import Start from "./components/Start";
import Footer from "./components/Footer";
function App() {
  return(
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header />
      <Hero/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    <Start/>
    <Footer/>
    </div>
  );
}

export default App;