
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/

console.log("Hey look in your browser console. It works!");

import images from "./images/*.jpg";

let count = 2;
let countImg = Object.keys(images).length

document.getElementById("CatImg").src =images["cat1"];


setInterval( ()=>{

  document.getElementById("CatImg").src =images["cat"+count];

  count++;
  if (i == 12){
    i = 1
  }
}, 1000)
