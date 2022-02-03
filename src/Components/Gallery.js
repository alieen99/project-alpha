import Image from "./Image";
import "./Gallery.css"
import Data from "../Data.json";

function shuffle(array) {
  let currentIndex = array.length,
      randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]
      ];
  }

  return array;
}

function Gallery(props){
  let server = props.comments;
  let comments = [];
  for(let key in server){
    comments.push(server[key]);
  }
  comments = shuffle(comments);
  console.log(comments);

  let coms_1 = comments[0] ? comments[0] : "loading ...";
  let coms_2 = comments[1] ? comments[1] : "loading ...";
  let coms_3 = comments[2] ? comments[2] : "loading ...";
  let coms_4 = comments[3] ? comments[3] : "loading ...";
  let coms_5 = comments[4] ? comments[4] : "loading ...";
  let coms_6 = comments[5] ? comments[5] : "loading ...";
 

     let images = Data.sections[0].gallery;
    let a = images[0];
    let b = images[1];
    let c = images[2];
    let d = images[3];
    let f = images[4];
    let g = images[5];
    
      return(
    <div className="gallery-columns">
      <Image comments={[coms_1,coms_2]} images={[a,b]}></Image>
      <Image comments={[coms_3,coms_4]} images={[c,d]}></Image>
      <Image comments={[coms_5,coms_6]} images={[f,g]}></Image>

    </div>
  )
}


export default Gallery;