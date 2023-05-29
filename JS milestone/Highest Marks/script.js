let Marks = [];
let highestMark = 0;

//Input Marks Of Five Student
for (let i = 0; i < 5; i++) {
  Marks[i] = prompt(`Enter ${i + 1} Student Marks`);
}

//Display Marks Of Five Student
Marks.forEach((el, index) => {
  console.log(`Marks Of Student ${index + 1} is=${el}`);
});

// Code For Check Highest Marks

for (let index = 0; index < Marks.length; index++) {
  highestMark = Marks[index] > highestMark ? Marks[index] : highestMark;
}

document.write("Highest Marks Is ", highestMark);