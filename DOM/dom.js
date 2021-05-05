const body = document.body;

const btn = document.createElement("div");

btn.classList.add("btn btn-primary");

body.appendChild(btn) ;

btn.addEventListener("click, alertFunction()");

const text = document.createTextNode('Hello world');

function alertFunction(){
    alert(text);
}
