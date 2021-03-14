// products object
let products = {
  'A99': 50,
  'B15': 30,
  'C40': 60,
  'T34': 99
}

// special offers object
let offers = {
  'A99': {
    quantity: 3,
    price: 130
  },
  'B15': {
    quantity: 2,
    price: 45
  }
}

/**
 * This function calculates cost of the number of special offers and the remaining items.
 * 
 * @param {*} sku 
 * @param {*} quantity
 * @returns result object
 */
let getTotalOffer = (sku, quantity) => {
  let result = {
    totalOffer: 0,
    looseItems: quantity
  }

  let skuOffer = offers[sku];

  if (skuOffer && quantity >= skuOffer.quantity) {
    let numberOfMultiples = Math.floor( quantity / skuOffer.quantity);
    result.looseItems = quantity % skuOffer.quantity;
    result.totalOffer = skuOffer.price * numberOfMultiples;
  }

  return result;
}

/**
 * This calculates the total cost of items.
 * 
 * @param {*} sku 
 * @param {*} quantity
 * @returns The total cost of items
 */
export const calculate = (sku, quantity) => {

  let total = 0;

  let calculatedResults = getTotalOffer(sku, quantity);
  total += products[sku] * calculatedResults.looseItems;
  total += calculatedResults.totalOffer;

  return total;
};
