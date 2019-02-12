
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/

console.log("Hey look in your browser console. It works!");

import images from "./images/*.jpg";

let i = 1;
let countImg = Object.keys(images).length

console.log(countImg);

setInterval( ()=>{
  document.getElementById("CatImg").src =images["cat"+i];
  console.log(images["cat"+i]);
  i++;
  if (i == 12){
    i = 1
  }
}, 1000)
