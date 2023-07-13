const click = document.querySelector(".click");
const text = document.querySelector(".onclick");
click.addEventListener("click", () => {
  text.innerHTML = "You just clicked me";
});

// double click
const val = document.querySelector(".value");
const dbText = document.querySelector(".dbText");
dbText.addEventListener("dblclick", () => {
  val.innerHTML = "you just double clicked me";
});

// mouseover
const mouseover = document.querySelector(".mouseover");
mouseover.addEventListener("mouseover", () => {
  mouseover.style.width = "300px";
  mouseover.style.height = "300px";
  mouseover.style.backgroundColor = "grey";
  mouseover.style.color = "white";
});

// mouse out
mouseover.addEventListener("mouseout", () => {
  mouseover.style.width = "0px";
  mouseover.style.height = "0px";
  mouseover.style.backgroundColor = "white";
  mouseover.style.color = "black";
});

// keypress
const keypress = document.querySelector(".input");
const pressed = document.querySelector(".pressed");
keypress.addEventListener("keypress", (e) => {
  pressed.innerHTML = "you have Pressed " + e.key;
});

// keydown
const inputText = document.querySelector(".inputkey");
const textP = document.querySelector(".text");
inputText.addEventListener("keydown", (e) => {
  textP.textContent += ` ${e.code}`;
});

// keyup
const inputKeyup = document.querySelector(".inputkey");
const textkeyup = document.querySelector(".text");
inputKeyup.addEventListener("keyup", () => {
  textkeyup.style.color = "blue";
});
