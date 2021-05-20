const body = document.body;
const btn = document.createElement("div");
const btnText = document.createTextNode("Click Here");

// btn.style.display("inline");
btn.append(btnText);
body.appendChild(btn);
btn.addEventListener("click", hello());
btn.style.setProperty("cursor", "pointer");
function hello(){
    btn.style.setProperty("background-color", "red");
}