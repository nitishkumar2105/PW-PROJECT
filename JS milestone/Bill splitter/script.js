const dishCost=[20,10,30,40,12];
let numbersOfPersons=3;


// Code for splitBill
function splitBill(dishCost,numbersOfPersons){
    const totalBill=dishCost.reduce((acc,curr)=>acc+curr,0);
    const billPerPerson=totalBill/numbersOfPersons;

    return {totalBill,billPerPerson}
}

const bill=splitBill(dishCost,numbersOfPersons);
console.log(`Total bill : ${bill.totalBill} , Bill to be paid by each person : ${bill.billPerPerson}`)