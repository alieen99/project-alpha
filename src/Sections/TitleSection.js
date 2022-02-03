import React, {Component} from "react";
import FullPage from "../Components/FullPage";
import Data from "../Data.json";
import "./TitleSections.css"
import {Link} from "react-scroll";
import Countdown from "../Components/Countdown";
import "./TitleSection.css";


class TitleSections extends Component{
    render() {
        return(
            <FullPage id="1" className="first" color={this.props.color } background={this.props.background}>
            <div className="title__container">
            <Countdown color={this.props.color} countdownDate="02/04/2022"/>
                <h3 className="title">{Data.title}</h3>
                <h2 className="subtitle">{Data.subtitle}</h2>
                <Link activeClass="active" to="2" spy={true} smooth={true} offset={0} duration={500} delay={0}>
                        <a href={""}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
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

export default TitleSections;