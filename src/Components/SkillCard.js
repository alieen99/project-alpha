
import './SkillCard.css'

function SkillCard(props){
        return(
            <div className="card" >
                <div className="image">
                    <img src={props.skill.content.image} alt="img"/>
                </div>
                <div className="skill-title-wrapper">
                    <h4>
                        {props.skill.content.title}
                    </h4>
                </div>
                
            </div>
            
        )
    }


export default SkillCard;