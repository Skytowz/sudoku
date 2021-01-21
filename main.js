
const td = document.getElementsByTagName("td");
let ctrl = false;
let mouse = false;
const number = document.getElementById("number");
const corner = document.getElementById("corner");
const center = document.getElementById("center");

document.onkeydown = function(e){
    if(e.ctrlKey) ctrl = true;
    if(e.key == "Backspace" || e.key == "Delete") put(" ");
}
document.onkeyup = function(e){
    if(!e.ctrlKey) ctrl = false;
}

document.onkeypress = function(e){
    if(!isNaN(e.key)) put(e.key);
}


document.onmousedown = function(e){ 
    mouse = true;
    clear();
    if(e.target.localName =="td") select(e);    
}
document.onmouseup = function(e){
    mouse = false;
}

document.onmouseover = function(e){
    if(e.target.localName =="td" && mouse) select(e);
}


function clear(){
    for (const j of td) if(!ctrl)  j.style.backgroundColor = "white";
}

function put(input){
    for (const i of td) if(i.style.backgroundColor == "yellow") i.textContent = input;
}

function select(e){
    e.target.style.backgroundColor = "yellow";
}