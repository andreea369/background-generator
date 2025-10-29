var textCSS = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body_CSS= document.querySelector(".body_CSS");

function changeBackground(){
    
    body_CSS.style.background=`linear-gradient(to right, ${color1.value}, ${color2.value})`;
    textCSS.textContent=`${body_CSS.style.background}`;
    
}
changeBackground();
color1.addEventListener("input",changeBackground);
color2.addEventListener("input",changeBackground);