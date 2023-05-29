{
    console.log(x); // undefined due to Hoisting
    //console.log(y);  //remove Comment an Run throw Error RefrenceError
    //console.log(z);    //remove Comment an Run throw Error RefrenceError
  
  
    var x="Value Of X";
    let y="Value Of Y";
    const z="Value Of z";
  
  
    console.log(x);// Value Of X
    console.log(y);// Value Of y
    console.log(z);// Value Of z
  }