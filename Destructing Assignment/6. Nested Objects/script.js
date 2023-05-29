const person = {
    name: "Pankaj",
    age: 26,
    address: {
      street: "Ranchi Road",
      city: "Ranchi",
      state: "Jharkhnad",
    },
  };
  
  // Code For destructuring
  
  function destruct({ name, address: { street } }) {
    return { name, street };
  }
  
  let { name, street } = destruct(person);
  
  console.log(name);
  console.log(street);