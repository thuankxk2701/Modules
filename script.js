// Importing module
/*import {
  addToCart,
  totalPrice as price, // rename price
  tq,
} from './shoppingCart.js';
// console.log(shippingCost);
addToCart('bread', 5);
console.log(tq, price);
console.log('Importing module');
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.tq);
import add, {
  addToCart,
  totalPrice as price, // rename price
  tq,
} from './shoppingCart.js';
add('mitom', 2);
console.log(price, tq);
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 6);
console.log(cart);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  return {
    addToCart,
    cart,
    totalQuantity,
    totalPrice,
  };
})();
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCart);

// Export (Error)
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};
// Import (Error)
const { addTocart } = require('./shoppingCart.js');
*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';
import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'pizza', quantity: 5 },
    { product: 'bread', quantity: 1 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);
if (module.hot) {
  module.hot.accept();
}
class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');
console.log('Jonas' ?? null);
Promise.resolve('Test').then(x => console.log(x));
import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';
// Polifilling async function
import 'regenerator-runtime/runtime';
