import { products } from "./products.js";

export let cart;

getCartFromStorage();

function getCartFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
};

export function addToCart(productId, quantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if(cartItem.id === productId) {
      return matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
      cart.push({
        "id": productId,
        "quantity": quantity,
        "deliveryOptionId": "1"
      })
  }

  saveToStorage();
  console.log(cart);
};

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export function totalCartQuantity() {
  return cart.reduce((sum, cart) => {
    return sum + cart.quantity;
  }, 0);
};





// cart example
// {
//   "id": "3e73d39d-1437-4586-b855-7f54443b8036",
//   "quantity": 1,
//   "deliveryOptionId": "1"
// }, {
//   "id": "95522ca2-50f6-4e2a-b0d0-58c0b497dea3",
//   "quantity": 1,
//   "deliveryOptionId": "1"
// }