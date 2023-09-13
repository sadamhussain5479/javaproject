var container = document.getElementById("container");
var button = document.getElementById("button");

function trigger() {
    container.style.backgroundColor = "brown";
    container.style.color = "red";
    container.style.color = "white"

}

button.addEventListener('mouseover', trigger);


var buttonSecond = document.getElementById("buttonSecond");
var containerSecond = document.getElementById("container");

function original() {
    containerSecond.style.backgroundColor= " green";
    containerSecond.style.color= "white";
    
}
buttonSecond.addEventListener("click",original);



function switch_on() {

 document.getElementById("img").src="bulbon.jpg";}
 
function switch_off() {

    
 document.getElementById("img").src="bulboff.jpg";
}
