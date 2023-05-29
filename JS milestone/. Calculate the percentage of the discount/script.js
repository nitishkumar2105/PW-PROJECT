const ProductOrginalPrice = 450;
const ProductDiscountedPrice = 300;

// Code for Calculate Percentage
const calculatePercentage = (ProductOrginalPrice, ProductDiscountedPrice) => {
  const savePrice = ProductOrginalPrice - ProductDiscountedPrice;
  const discountPercentage =
    100 - Math.floor((ProductDiscountedPrice / ProductOrginalPrice) * 100);
  console.log("Percentage Of discount:", discountPercentage + "%");
  console.log("save Price:", savePrice);
};

calculatePercentage(ProductOrginalPrice, ProductDiscountedPrice);