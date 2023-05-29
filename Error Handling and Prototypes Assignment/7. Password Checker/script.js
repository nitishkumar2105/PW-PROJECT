const pattern = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm;  //RegEx Pattern

// Class

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  //Setter
  setPassword(newPassword) {
    if (pattern.test(newPassword)) {
      this.password = newPassword;
    } else {
      console.log(
        "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
      );
    }
  }

  //Getter
  getPassword() {
    return this.password.replace(/./gi, "*");
  }
}

const user = new User("Pankaj", "Password123");
console.log(user.getPassword());

user.setPassword("myPassword");
user.setPassword("MyPassword");

user.setPassword("myPassword123");
console.log(user.getPassword());