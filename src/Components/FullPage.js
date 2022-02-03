import React, {Component} from "react";
import './FullPage.css'
class Fullpage extends Component{
    render() {
        const { children } = this.props
        return(
            <div id={this.props.id} className={`fullpage ${this.props.className} || '' ` } style={{background:this.props.background,color:this.props.color} }>
                {children}

            </div>
        )
    }

}

export default Fullpage;