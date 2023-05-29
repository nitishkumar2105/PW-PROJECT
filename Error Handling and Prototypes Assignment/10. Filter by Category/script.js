let products = [
    { name: "Pants", category: "Clothing" },
    { name: "Shorts", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "HeadFone", category: "Accessories" },
    { name: "Earphone", category: "Accessories" },
  ];
  
  //Function Return Product By Category
  function filterByCategory(products) {
    return function (category) {
      return products.filter((product) => product.category === category);
    };
  }
  
  let colthingProduct = filterByCategory(products)("Clothing");
  
  console.log(colthingProduct);