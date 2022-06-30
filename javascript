var h = document.getElementById("one");
var m = document.getElementById("one2");
var w = document.getElementById("one1");
var y = document.getElementById("pink");
function disImg(){ 
  h.classList.remove("none");
  y.classList.remove("none");
  m.classList.remove("none");
	w.classList.remove("none"); }

window.onload=function(){

setTimeout( disImg, 3000);}






const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
      splash.classList.add('display-none');
    }, 2000);
})



