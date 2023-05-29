const inputStValue = document.querySelector("#inputStValue");
const countBtn = document.getElementById("countBtn");
const countValueDisplay = document.getElementById("countValueDisplay");

let personName;

countBtn.addEventListener("click", countFun); //Event Apply

// Code For Count Vowel Within String

function countFun() {
  let count = 0;
  personName = [...inputStValue.value];
  personName.map((el) => {
    el = el.toLowerCase();
    if (el == "a" || el == "i" || el == "o" || el == "e" || el == "u") {
      count++;
    }
  });

  countValueDisplay.innerText = `Total Vowel in Given String is: ${count}`;
}