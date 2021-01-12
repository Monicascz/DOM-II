// Your code goes here
// * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop

//1 and 2 TITLE CHANGES TO BEEP BEEP WHEN MOUSE HOVERS OVER
const FunBusTitle = document.querySelector('.logo-heading')
FunBusTitle.addEventListener('mouseover', (event)=> {
    event.target.textContent = " BEEP BEEP "
})

FunBusTitle.addEventListener('mouseout', (event) => {
    event.target.textContent = "Fun Bus"
} )

// 3 Changes first h2 to blue text
const welcomeTitle = document.querySelector('h2')
document.addEventListener('keydown', (event)=>{
    if (event.key === "Enter" ){
        {welcomeTitle.style.color = "blue";}
    }
})

//4 Wheel

const busImg = document.querySelector('.intro img')
busImg.addEventListener('wheel', (event) => {
    busImg.style.border = '75px solid gold';
})

const mapImg = document.querySelector(".img-content img")

mapImg.addEventListener('wheel', zoom);
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    mapImg.style.transform = `scale(${scale})`;
  }
let scale = 1;

//5 Load
const letsGo = document.querySelector('.text-content h2')
window.addEventListener('load', () =>{
    letsGo.style.color = "gold";
})

const pickDestination = document.querySelector(".content-destination h2");

window.addEventListener('load', () => {
    pickDestination.style.fontSize = "10rem";
    setTimeout(function(){
        pickDestination.style.fontSize = "4rem";
    },1000);
}, false);

//6 DBlClick
busImg.addEventListener('dblclick', (event)=>{
    busImg.style.border = "none"
})

// //Drag 
// var dragged;
// document.addEventListener("drag", function(event) {

// }, false);

// document.addEventListener("dragstart", function(event){
//     dragged = event.target;
//     event.target.style.opacity =.5;
// }, false);


// document.addEventListener("dragend", function(event) {

//     event.target.style.opacity = "";
//   }, false);

// document.addEventListener("dragover", function(event){
//     event.preventDefault();
// }, false);

// document.addEventListener("dragenter", function(event){
//     if (event.target.className == "destination"){
//         event.target.style.background = "purple"
//     }
// }, false);

// document.addEventListener("dragleave", function(event){
//     if (event.target.className == "destination") {
//         event.target.style.background = "";
//     }
// }, false);

// document.addEventListener("drop", function(event){
//     event.preventDefault();
//     if(event.target.className == "destination"){
//         event.target.style.background = "";
//         dragged.parentNode.removeChild(dragged);
//         event.target.appendChild(dragged);
//     }
// }, false);

//7


const signUpButton = document.getElementsByClassName('btn');
// console.log(signUpButton)
const signUpButtonArr = Array.from(signUpButton)
// console.log(signUpButtonArr)
// signUpButtonArr.forEach(item =>{
//     item.addEventListener('click', () =>{
//     item.style.background = 'gold';
// });
// });

Array.from(signUpButton).forEach((elem)=>{
    elem.addEventListener('focusin', ()=>{
        elem.style.background = 'pink';
    })
}, true);

