const result = document.querySelector(".result");
const btns = document.querySelectorAll(".btn");

let counter = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("increase")) {
      counter++;
    } else if (btn.classList.contains("decrease")) {
      if (counter > 0) {
        counter--;
      } else {
        alert("Negative number is not allowed");
      }
    } else {
      counter = 0;
    }
    result.innerHTML = counter;
  });
});
