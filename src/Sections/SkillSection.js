import React, {Component} from "react";
import FullPage from "../Components/FullPage";
import Data from "../Data.json";
import SkillCard from "../Components/SkillCard";
import "./SkillsSection.css"
import {Link} from "react-scroll";
import axios from "axios";


class SkillsSection extends Component{
 
    render() {
        return(
            <FullPage id="3" className="third" color={this.props.color} background={this.props.background}>
               <div className="title">
               <h3></h3>
                <h3 >{Data.sections[1].title}</h3>
               </div>
                <div className="cards">
                    {
                        Data.sections[1].items.map(eachSkill => {
                            return (
                                <SkillCard skill={eachSkill}/>
                        )
                        })
                    }
                </div>
                <div className="arrow">
                <Link activeClass="active" to="1" spy={true} smooth={true} offset={0} duration={500} delay={0}>
                    <a href={""}>
                    <svg id="up" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path
                         d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                         fill={this.props.color}
                         />
                    </svg>
                    </a>
                </Link>
                </div>
            </FullPage>

        )
    }

}

export default SkillsSection;