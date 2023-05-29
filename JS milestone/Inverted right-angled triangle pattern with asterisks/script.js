let input = parseInt(prompt("Enter a no"));

// Code for Inverted right-angled pattern

document.write("Inverted right-angled pattern:<br>");
for (let i = input; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write(`if no=${input}`);