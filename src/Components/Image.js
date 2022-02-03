import "./Image.css"
import Data from "../Data.json";
import {useState,useEffect} from "react";
import { Component } from "react";
import axios from "axios";

     function Image(props){
  
     return(
          <div className="gallery-rows">
               <div className="image--gallery">
                   <img className="image__img" src={props.images[0].content.image} alt="Bricks"/>
                   <div className="image__overlay image__overlay--primary">
                   <div className="image__title">{props.comments[0].name}</div>
                         <p className="image__description">
                         {props.comments[0].body}
                       </p>
                       <p className="image__email">
                       {props.comments[0].email}
                       </p>
                   </div>
              </div>
              <div className="image--gallery">
                   <img className="image__img" src={props.images[1].content.image} alt="Bricks"/>
                   <div className="image__overlay image__overlay--primary">
                   <div className="image__title">{props.comments[1].name}</div>
                         <p className="image__description">
                         {props.comments[1].body}
                       </p>
                       <p className="image__email">
                       {props.comments[1].email}
                       </p>
                   </div>
              </div>
         </div>
          
      )

    
}


export default Image;