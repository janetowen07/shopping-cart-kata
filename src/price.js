let products = {
  'A99': 50,
  'B15': 30,
  'C40': 60,
  'T34': 99
}

export const calculate = (sku, quantity) => {

  let total = 0;

  if (quantity % 3 === 0 & sku === 'A99') {
    let numberOfMultiples = quantity / 3;
    return total = numberOfMultiples * 130;
  }

  for(let item in products) {
    if (item === sku) {
      total = quantity * products[item]
    }
  }

  return total;
};
