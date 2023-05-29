let password=prompt("Enter Password");
let confirmPassword=prompt("Enter Confirm Password");

// validation code

if(password===confirmPassword){
    console.log("Password Matched ! Password validation Successful.");
}else{
    console.log("Password didn't match ! Password validation unsuccessful.");
}