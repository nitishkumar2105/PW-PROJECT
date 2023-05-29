let delay = 3;

const countInterval = setInterval(() => {
  if (delay === 0) {
    const randamNumber = Math.floor(Math.random() * 100) + 1; //Generate Number between 1 to 100
    console.log("Random Number :", randamNumber);
    clearInterval(countInterval);
  } else {
    console.log(
      `Remaining Time in seconds to generate Random Number...${delay}seconds`
    );
    delay--;
  }
}, 1000);