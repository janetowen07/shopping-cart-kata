let products = {
  'A99': 50,
  'B15': 30,
  'C40': 60,
  'T34': 99
}

export const calculate = (sku, quantity) => {

  let total = 0;
  
  for(let item in products) {
     if (item === sku) {
       total = quantity * products[item]
     }
  }

  return total;
};
