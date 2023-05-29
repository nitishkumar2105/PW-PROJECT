class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    //Member Function
    getSalary() {
      return this.salary;
    }
  }
  
  const Employee1 = new Employee("Pankaj", "Web Developer", 80000);
  
  console.log(Employee1.getSalary());