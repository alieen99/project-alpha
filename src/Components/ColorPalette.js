import Data from "../Data.json";
import "./ColorPalette.css";

function ColorPalette(){
    return(
        <img alt="cp"  id="CP" src={Data.cp.image}/>
        )
}

export default ColorPalette;