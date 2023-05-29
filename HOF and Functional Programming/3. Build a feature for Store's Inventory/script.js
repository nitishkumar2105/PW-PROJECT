const store = {
    apple: 1,
    banana: 10,
    orange: 2,
    mango: 4,
  };
  
  //1 USD to 80 INR
  
  const converTpriceINRS = Object.entries(store).map(([item, price]) => {
    const priceInRupees = price * 80;
    return { item, priceInRupees };
  });
  
  console.log(converTpriceINRS);