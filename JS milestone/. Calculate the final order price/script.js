const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 1, quantity: 3 },
    { unitPrice: 3, quantity: 4 },
    { unitPrice: 4, quantity: 1 },
  ];
  
  //Code For Calculate Total Cost
  const calculateTotalCost = (customerCart) => {
    return customerCart.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0
    );
  };
  
  const totalCost = calculateTotalCost(customerCart);
  
  console.log(`Total Cost:${totalCost}`);