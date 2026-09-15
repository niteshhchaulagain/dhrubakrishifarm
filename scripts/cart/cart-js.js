import './cart-navbar.js';
import { cart } from '../../data/cart.js';
import { getProduct, checkStock } from "../../data/products.js";

console.log('hello')

function renderCart() {

  let cartHTML = '';

  cart.forEach((cartItem) => {

    let product = getProduct(cartItem.id);

    cartHTML += `
      <div class="cart-item-container">
        <div class="cart-item-image">
          <img src="/images/products/${product.image}" alt="">
        </div>
        <div class="cart-items-details-container">
          <div class="cart-item-details">
            <p class="cart-item-name">${product.name}</p>
            <p class="cart-item-overview">${product.subCategory}</p>
            <p class="cart-item-sku-number">SKU: ${product.inventory.sku}</p>
            <div class="cart-in-stock-div">
              ${checkStock(product.id)}
            </div>
          </div>
          <div class="cart-features">
            <div class="cart-item-add-sub-feature inMobile">
              <button class="cart-item-minus">
                <img src="images/icons/remove.png" alt="">
              </button>
              <input type="text" class="cart-item-input-box" placeholder="1">
              <button class="cart-item-add">
                <img src="images/icons/add.png" alt="">
              </button>
            </div>
            <button class="remove-cart-item-button inMobile">
              Remove
            </button>
          </div>
        </div>
        <div class="cart-item-price-div">
          <p class="cart-item-price">
            रु ${product.pricing.basePrice}
          </p>
        </div>
      </div>
    `;
  });

  const cartItemsContainer = document.querySelector('.cart-items-container');
  cartItemsContainer.innerHTML = cartHTML;
};


function renderOrderSummary() {
  let orderSummaryHTML = '';

}



renderCart();