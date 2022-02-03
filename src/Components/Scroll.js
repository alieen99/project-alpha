import React, {Component} from "react";
import {Link} from 'react-scroll';


class Scroll extends Component{
    render() {
    
    return(
            <a href="#title"><div>{this.props.className}</div></a>
        
       
    )
}
}


export default Scroll;