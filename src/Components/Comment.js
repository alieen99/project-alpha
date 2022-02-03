import axios from "axios";
import { Component } from "react/cjs/react.production.min";
import "./Comment.css"
class Comment extends Component{
    state = {
        name: '',
        body:'',
        email:''
      };
    /* This is where the magic happens 
    */
    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
        const comment = {
          name: this.state.name,
          body:this.state.body,
          email:this.state.email
        }
        axios.post('https://guarded-fortress-61509.herokuapp.com/api/comments/',  comment )
          .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
          }).catch(err=>console.log(err.message))
      }
    handleNameChange = event =>{
        this.setState({ name: event.target.value});
      }
      handleEmailChange = event =>{
        this.setState({email:event.target.value});
      }
      handleBodyChange = event =>{
        this.setState({body:event.target.value});
      }
      
    render(){
return(
    <div class="comment--card">
    <form onSubmit = {this.handleSubmit}
      class="comment--card-form">
        <div class="info">
            <div class="input">
                <input type="text" onChange= {this.handleNameChange} name="name" class="input-field" required/>
                <label class="input-label">Full name</label>
            </div>
            <div class="input">
                <input type="text" onChange= {this.handleEmailChange} name="email" class="input-field" required/>
                <label class="input-label">Email</label>
            </div>
        </div>
        <div>

        </div>
        <div class="input">
            <textarea onChange= {this.handleBodyChange}  class="input-field comment-field" name="body" id="comments" required></textarea>
            <label class="input-label">Your Comment</label>
        </div>
        <div class="action">
            <button class="action-button">Submit</button>
        </div>
    </form>

</div>

)
    }
}
export default Comment;