import './App.css';
import {useState,useEffect} from "react";
import ColorPalette from './Components/ColorPalette';
import AboutSection from './Sections/AboutSection';
import SkillCard from './Components/SkillCard';
import SkillsSection from './Sections/SkillSection';
import FullPage from './Components/FullPage';
import Scroll from './Components/Scroll';
import "./Components/Navbar.css"
import TitleSections from './Sections/TitleSection';
import Countdown from './Components/Countdown';
import Toggle from './Components/Toggle';
import Data from "./Data.json";
import SliderPage from './Components/ReactSliderPage';
import {Link} from "react-scroll";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





function App() {
 

  let [bgColors,setBgColors] = useState(["#ffd700","#ffffff","#f89f18"]);
  let [colors,setColors] = useState(["#292300","#000000","#744703"]);

  function colorChange(){ 

    if(bgColors[0]==="#ffd700"){
      setBgColors(["#292300","#000000","#744703"]);
      setColors(["#ffd700","#ffffff","#f89f18"]);
    }
    else{
      setBgColors(["#ffd700","#ffffff","#f89f18"])
      setColors(["#292300","#000000","#744703"]);
    }
    
  }
 
  return (
    <div className="App">
      <ToastContainer/>
      <div className="navbar">
                    <div>
                    <Link activeClass="" to="1" spy={true} smooth={true} offset={0} duration={500} delay={0}><a href={"/"}>HOME</a></Link>
                    </div>
                    <div>
                    <Link activeClass="active" to="2" spy={true} smooth={true} offset={0} duration={500} delay={0}><a href={"/"}>TABS</a></Link>
                    </div>
                    <div>
                    <Link activeClass="active" to="3" spy={true} smooth={true} offset={0} duration={500} delay={0}><a href={"/"}>SKILS</a></Link>
                    </div>
                    <div onClick={colorChange} ><Toggle/></div>
                </div>
        
     <TitleSections color={colors[0]} background={bgColors[0]}/>
      <AboutSection  color={colors[1]} background={bgColors[1]}/>
      <SkillsSection color={colors[2]} background={bgColors[2]}/>      
      
    </div>
  );
}

export default App;
