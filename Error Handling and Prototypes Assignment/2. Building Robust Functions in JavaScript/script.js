function getPerson(person) {
    try {
      if (
        typeof person !== "object" ||
        person === null ||
        !("name" in person) ||
        !("age" in person)
      ) {
        throw new Error("Invalid parameter type");
      }
  
      return `Name: ${person.name}, Age:${person.age}`;
    } catch (error) {
      return error.message;
    }
  }
  
  const person1 = { name: "Pankaj Kar", age: 27 };
  console.log(getPerson(person1));
  
  const person2 = { name: "Pankaj" };
  console.log(getPerson(person2));
  
  const person3 = null;
  console.log(getPerson(person3));
  
  const person4 = "John";
  console.log(getPerson(person4));
  
  const person5 = ["name", "pankaj"];
  console.log(getPerson(person5));