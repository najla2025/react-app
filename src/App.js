import "./App.css";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer";
import Players from "./components/Players";
function App() {
 let players=[
  {name:"Carvajal", age:"Défenseur  Passionné depuis son plus jeune âge,  incarne l'esprit du football avec une énergie et un dévouement sans faille",  img:"https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--9c37ce1e-ab30-4fde-872e-e462f598777e/_80x501____13.app.webp?preferwebp=true&width=288&height=384"},
  {name:"E.Milirao", age:"Défenseur Passionné depuis son plus jeune âge, incarne l'esprit du football avec une énergie et un dévouement sans faille", img:"https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--3028ae67-31e7-402f-8fc5-434d903fd36a/_80x501____11.app.webp?preferwebp=true&width=288&height=384"},
  {name:"Alaba", age:"DéfenseurDéfenseur Passionné depuis son plus jeune âge, incarne l'esprit du football avec une énergie et un dévouement sans faille", img:"https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--f4b44e86-eace-425c-a684-6e66fa875ed9/_80x501____15.app.webp?preferwebp=true&width=288&height=384"},
  {name:"Lucas V.", age:"Défenseur Passionné depuis son plus jeune âge, incarne l'esprit du football avec une énergie et un dévouement sans faille", img:"https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--8098c96b-b057-49ed-a8d3-1f3e738572a0/_80x501____21.app.webp?preferwebp=true&width=288&height=384"},
  
  
 ]

  return (
    <div className="App">

      <Navbar/>
      <h1 className="tit"> Défensseur</h1>

      <Players players={players}/>
      <h1 className="tit"> Attaquant</h1>
      <Players players={players}/>

      <Footer/>

    </div>

  );
}

export default App;
