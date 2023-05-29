class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
  
    //Member Function
    
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}`;
    }
  }
  
  const myCar = new Car("Tata", "Nexon", "2020");
  
  console.log(myCar.getDescription());