import FullPage from "../Components/FullPage";
import Data from "../Data.json";
import "./AboutSection.css"
import {Link} from "react-scroll";
import TabGroup from "../Components/Tabs";
import ColorPalette from "../Components/ColorPalette";
import Gallery from "../Components/Gallery";
import Comment from "../Components/Comment";
import { Component } from "react/cjs/react.development";
import axios from "axios";
import {getComments} from "../services/commentService"

class AboutSection extends Component{
    state = {comments:[]};
    async componentDidMount() {
        const {data:comments} = await axios.get("https://guarded-fortress-61509.herokuapp.com/api/comments/");
        this.setState({comments})
    }
   
    
        
       render(){
        return(
            <FullPage id="2" className="second" color={this.props.color} background={this.props.background}>
                <TabGroup
                tabs={[
                    "Gallery",
                    "Comments",
                    "FeedBack"
                ]}
                 contents={[
                    <Gallery comments={this.state.comments}></Gallery>,
                    <Comment></Comment>,
                    Data.sections[0].items[0].content4
                 ]}
                />
               

                
                <Link activeClass="active" to="3" spy={true} smooth={true} offset={0} duration={500} delay={0}>
                    <a href={""}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                             d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                             fill={this.props.color}
                            />
                            </svg>
                    </a>
                </Link>
                
            </FullPage>
        )
       }
    }


export default AboutSection;