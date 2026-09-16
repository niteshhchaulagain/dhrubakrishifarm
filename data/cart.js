import { products, getProduct } from "./products.js";

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
  // return cart.reduce((sum, cart) => {
  //   return sum + cart.quantity;
  // }, 0);
  return cart.length;
};


export function removeFromCart(productId) {
  let newCart = cart.filter(cartItem => cartItem.id !== productId);
  cart = newCart;
  saveToStorage();
}

export function updateCartQuantity(productId, quantity) {
  let newCart = cart.map((cartItem) => {
    if (cartItem.id === productId) {
      return {...cartItem, quantity: quantity};      
    }
    return cartItem;
  });

  cart = newCart;
  saveToStorage();
}

export function totalCartItemsAmount() {
  // let matchingItems;
  let totalAmount = 0;

  cart.forEach(cartItem => {
    let product = getProduct(cartItem.id);
    totalAmount += cartItem.quantity * product.pricing.salePrice;
  });
  return totalAmount;
}

export function getProductQuantity(productId) {
  const matchingItem = cart.find(cartItem => cartItem.id === productId);
  return matchingItem.quantity;
}

export function eachProductTotalAmount(productId) {
  const matchingItem = cart.find(cartItem => cartItem.id === productId);
  const matchingProduct = getProduct(productId);

  return matchingItem.quantity * matchingProduct.pricing.salePrice;
}

export function productQuantity(productId) {
  let matchingItem = cart.find(cartItem => cartItem.id === productId);
  return matchingItem.quantity;
}