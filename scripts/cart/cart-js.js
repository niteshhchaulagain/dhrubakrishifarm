import './cart-navbar.js';
import { cart, eachProductTotalAmount, removeFromCart, totalCartQuantity, updateCartQuantity, totalCartItemsAmount, getProductQuantity } from '../../data/cart.js';
import { getProduct, checkStock } from "../../data/products.js";

console.log('hello')

function renderCart() {

  let cartHTML = '';

  cart.forEach((cartItem) => {
    
    let product = getProduct(cartItem.id);
    const productPrice = eachProductTotalAmount(cartItem.id);
    cartHTML += `
      <div class="cart-item-container js-cart-item-container" data-product-id=${product.id}>
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
              <input type="text" class="cart-item-input-box js-cart-item-input-box" placeholder="1" value="${cartItem.quantity}">
              <button class="cart-item-add">
                <img src="images/icons/add.png" alt="">
              </button>
            </div>
            <button class="submit-cart-item-button js-submit-cart-item-button inMobile">
              Submit
            </button>
          </div>
        </div>
        <div class="cart-item-price-div">
          <p class="cart-item-price">
            ${`रु ${productPrice}`}
          </p>
          <button class="remove-item-button js-remove-item-button">
            <img src="images/icons/close-icon.png" alt="">
          </button>
        </div>
      </div>
    `;
  });

  const cartItemsContainer = document.querySelector('.js-cart-items-container');
  cartItemsContainer.innerHTML = cartHTML;

  document.querySelectorAll('.js-remove-item-button')
    .forEach((removeCartItemBtn) => {
      removeCartItemBtn.addEventListener('click', () => {
        let container = removeCartItemBtn.closest('.js-cart-item-container');
        let productId = container.dataset.productId;
        removeFromCart(productId);
        renderCart();
      });
    });

  document.querySelectorAll('.js-submit-cart-item-button')
    .forEach((submitBtn) => {
      submitBtn.addEventListener('click', () => {
        let container = submitBtn.closest('.js-cart-item-container');
        let productId = container.dataset.productId;
        let quantity = Number(container.querySelector('.js-cart-item-input-box').value);
        updateCartQuantity(productId, quantity);
        renderCart();
      })
    })


  renderOrderSummary();
  showCartQuantity(); 
};


function renderOrderSummary() {
  let orderSummaryHTML = `
    <div class="order-summary-heading">
      <p>Order Summary</p>
    </div>
    <div class="order-summary-mid-items">
      <div class="order-summary-mid-first-item">
        <div class="subtotal">
          <div>
            <span class="span-subtotal">Subtotal </span>
            <span class="span-subtotal-items">&nbsp;(3 Items)</span>
          </div>
          <p class="subtotal-amount">रु ${totalCartItemsAmount()}</p>
        </div>
        <div class="shippin-charge-div">
          <p class="shipping">Shipping</p>
          <p class="shipping-charge">Free</p>
        </div>
        <div class="estimated-tax-div">
          <p class="estimated-tax-text">Estimated Tax</p>
          <p class="estimated-tax">रु 0</p>
        </div>
      </div>
      <div class="order-summary-mid-second-item">
        <input type="text" placeholder="Promo Code">
        <button class="apply-button">
          Apply
        </button>
      </div>
    </div>
    <div class="order-summary-last-items">
      <div class="order-summary-last-items-first">
        <p class="order-summary-last-item-total">Total</p>
        <p class="order-summary-last-items-total-amount">$${totalCartItemsAmount()}</p>
      </div>
      <div class="checkout-div">
        <button class="proceed-to-checkout">
          Proceed to Checkout
        </button>
      </div>
      <div class="order-summary-message-div">
        <img src="images/icons/shield.png" alt="">
        <p class="secure-checkout">Secure checkout, encrypted payment</p>
      </div>
    </div>
  `;
  document.querySelector('.js-order-summary').innerHTML = orderSummaryHTML;
}


function showCartQuantity() {
  document.querySelector('.cart-notification').innerHTML = totalCartQuantity();
}


renderCart();

