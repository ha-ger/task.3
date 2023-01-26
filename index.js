//generate random number
let num = Math.trunc(Math.random() * 10 + 1);
// call elements in html
let submitButton = document.querySelector(".submit");
let input = document.querySelector(".input");
let result = document.querySelector(".result");
let guessNum = document.querySelector(".guess-num");
let overlay = document.querySelector(".over-lay");

// function
submitButton.addEventListener("click", showResult);

function showResult() {
  let newInput = Number(input.value);
  if (!isNaN(newInput) && newInput <= 10 && newInput >= 0) {
    if (newInput === num) {
      result.textContent = `well done :)`;
      overlay.style.display = "block";
    } else {
      result.textContent = `Try again :]`;
    }
  } else {
    result.textContent = "plz enter num(0-10)";
  }
  showColor();
  showOverLay();
}

//for backgroundcolor
function showColor() {
  result.classList.add("active");
  guessNum.textContent--;
}
console.log(num);
//for show overlay
function showOverLay() {
  if (guessNum.textContent === "0" && Number(input.value) !== num) {
    result.textContent = `Game Over`;
    overlay.style.display = "block";
  }
}
