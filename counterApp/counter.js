const result = document.querySelector(".result");
const btns = document.querySelectorAll(".btn");

let counter = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("increase")) {
      if (counter < 10) {
        counter++;
      } else {
        alert("10+ number is not allowed");
      }
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
