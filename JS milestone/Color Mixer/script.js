
color1 = document.getElementById("color1");
color2 = document.getElementById("color2");

const resultColor = document.getElementById("resultColor");

// Condition Code

function valueAssign() {
  inputVal1 = color1.value.toLowerCase();
  inputVal2 = color2.value.toLowerCase();

//   console.log(inputVal1);
//   console.log(inputVal2);

  switch (true) {
    case inputVal1 == "red" && inputVal2 == "blue":
      resultColor.innerText = "purple";
      document.body.style.backgroundColor = "purple";

      break;

    case inputVal1 == "blue" && inputVal2 == "red":
      resultColor.innerText = "purple";
      document.body.style.backgroundColor = "purple";

      break;

    case inputVal1 == "red" && inputVal2 == "yellow":
      resultColor.innerText = "orange";
      document.body.style.backgroundColor = "orange";

      break;

    case inputVal1 == "yellow" && inputVal2 == "red":
      resultColor.innerText = "orange";
      document.body.style.backgroundColor = "orange";

      break;

    case inputVal1 == "yellow" && inputVal2 == "blue":
      resultColor.innerText = "green";
      document.body.style.backgroundColor = "green";

      break;

    case inputVal1 == "blue" && inputVal2 == "yellow":
      resultColor.innerText = "green";
      document.body.style.backgroundColor = "green";

      break;

    default:
      resultColor.innerText = "Invalid color combination";
      document.body.style.backgroundColor = "white";
      break;
  }
}