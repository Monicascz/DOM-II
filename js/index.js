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

//5 Load
const letsGo = document.querySelector('.text-content h2')
window.addEventListener('load', () =>{
    letsGo.style.color = "gold";
})

//6 DBlClick
busImg.addEventListener('dblclick', (event)=>{
    busImg.style.border = "none"
})

