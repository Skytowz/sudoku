
const td = document.getElementsByTagName("td");
const div = document.getElementsByTagName("div");
let ctrl = false;
let mouse = false;
const number = document.getElementById("number");
const corner = document.getElementById("corner");
const center = document.getElementById("center");
let isNumber = true;
let isCorner = false;
let isCenter = false;

number.onclick = function(e){
    isNumber = true;
    isCorner = false;
    isCenter = false;
}

corner.onclick = function(e){
    isNumber = false;
    isCorner = true;
    isCenter = false;
}

center.onclick = function(e){
    isNumber = false;
    isCorner = false;
    isCenter = true;
}

document.onkeydown = function(e){
    if(e.ctrlKey) ctrl = true;
    if(e.key == "Backspace" || e.key == "Delete") {
        for (const j of td) if(j.style.backgroundColor == "yellow"){
             j.innerHTML = "<div class=\"r1\"> <div class=\"1\"></div><div class=\"2\"></div><div class=\"3\"></div></div><div class=\"r2\"><div class=\"4\"></div><div class=\"5\"></div><div class=\"6\"></div></div><div class=\"r3\"><div class=\"7\"></div><div class=\"8\"></div><div class=\"9\"></div></div>"
            }
    }
}
document.onkeyup = function(e){
    if(!e.ctrlKey) ctrl = false;
}

document.onkeypress = function(e){
    if(!isNaN(e.key)) put(e.key);
}


document.onmousedown = function(e){ 
    clear();
    mouse = true;
    color(e);
}

document.getElementsByTagName("table")[0].onmouseover = function(e){
    color(e);
}

function color(e){
    if(e.target.localName =="td" && mouse) select(e.target);
    if(e.target.localName == "div"&& mouse){
        if(e.target.childElementCount == 3 && e.target.parentElement.localName == "td"){
            select(e.target.parentElement);
        }else if(e.target.childElementCount ==0 && e.target.parentElement.parentElement.localName =="td"){
            select(e.target.parentElement.parentElement);
        }
    }
}
document.onmouseup = function(e){
    mouse = false;
}



for (const i of td){
    i.innerHTML = "<div class=\"r1\"> <div class=\"1\"></div><div class=\"2\"></div><div class=\"3\"></div></div><div class=\"r2\"><div class=\"4\"></div><div class=\"5\"></div><div class=\"6\"></div></div><div class=\"r3\"><div class=\"7\"></div><div class=\"8\"></div><div class=\"9\"></div></div>"
}

function clear(){
    for (const j of td) if(!ctrl)  j.style.backgroundColor = "white";
}

function put(input){
    for (const i of td){
        if(i.style.backgroundColor == "yellow"){
            if(isNumber){
                i.textContent = input;
            }else if(i.childElementCount !=0){
                if(isCorner){
                    var k = 0;
                    var notPut = true;
                    while(k<9 && notPut){
                        console.log('\''+i.children[Math.trunc(k/3)].children[k%3].textContent+'\'');
                        if(i.children[Math.trunc(k/3)].children[k%3].textContent == '' && k!=4){
                            i.children[Math.trunc(k/3)].children[k%3].textContent = input;
                            notPut = false;
                        }
                        k++;
                    }
                }else if(isCenter){
                    i.children[1].children[1].textContent += input;
                }
            }
        }
    }
}

function select(e){
    e.style.backgroundColor = "yellow";
}


//"<div class=\"r1\"> <div class=\"1\"></div><div class=\"2\"></div><div class=\"3\"></div></div><div class=\"r2\"><div class=\"4\"></div><div class=\"5\"></div><div class=\"6\"></div></div><div class=\"r3\"><div class=\"7\"></div><div class=\"8\"></div><div class=\"9\"></div></div>"oui