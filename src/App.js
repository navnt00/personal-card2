import Card from "./components/Card";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";
import Name from "./components/Name";
import Connect from "./components/Connect";
function App() {
  return (
    <div className="poster">
      <div className="bg"></div>
      <Card />
      <Name />
      <Connect />
      <About />
      <Interest />
      <Footer/>
    </div>
    
  )
  
}

export default App;
