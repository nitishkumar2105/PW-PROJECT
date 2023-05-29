class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
    //Member Function
  
    getDetails() {
      return `"Name: ${this.name}, Age: ${this.age}"`;
    }
  }
  
  const Person1 = new Person("Pankaj", 27);
  console.log(Person1.getDetails());
  
  const Person2 = new Person();
  console.log(Person2.getDetails());