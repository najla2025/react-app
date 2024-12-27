import "./App.css";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/Card";
import Pointsdevente from "./components/Pointsdevente";
import Footer from "./components/Footer";
function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Pointsdevente/>
      <Footer/>

    </div>

  );
}

export default App;
