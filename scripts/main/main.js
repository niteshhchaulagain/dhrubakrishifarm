
import '../main/main-nav.js';
import { products } from '../products/products.js';
import { ratingRoundOff } from '../main/utils.js';

console.log(ratingRoundOff(products[1].rating.stars));
function renderProducts() {

  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += `
      <div class="product-container" data-product-id=${product.id}>
        <div class="product-image-container">
          <img class="product-image" src="/images/products/${product.image}" alt="">
        </div>
        <div class="product-name">
          <p class="product-name-p">
            ${product.name}
          </p>
        </div>
        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${ratingRoundOff(product.rating.stars)}.png" alt="" >
          <p class="product-rating-count-p">${product.rating.count}</p>
        </div>
        <div class="product-price-container">
          <span class="product-price-currency">रु. </span>
          <span class="product-price-amount">${product.pricing.salePrice}<span class="standard-unit">${product.pricing.priceUnit}</span></span>
        </div>
        <div class="product-quantity-container">
          <div class="quantity-text">
            <span class="quantity-span">Quantity: </span>
          </div>
          <div class="quantity-slider-container">
            <div class="minus-quantity-slider align-quantity-divs"><button class="minus-button quantity-buttons"><img src="/images/icons/remove.png" alt=""></button></div>
            <div class="align-quantity-divs"><input type="text" value="1" class="quantity-input"></div>
            <div class="plus-quantity-slider align-quantity-divs"><button class="plus-button quantity-buttons"><img src="/images/icons/add.png" alt=""></button></div>
          </div>
        </div>
        <div class="product-spacer"></div>
        <div class="added-to-cart-container">
          <img class="added-tick-image" src="images/icons/checkmark.png" alt="">
          <p class="added-to-cart-text">Added</p>
        </div>
        <div class="add-to-cart-btn">
          <button class="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    `;

  });
  const productGrid = document.querySelector('.js-product-grid');
  productGrid.innerHTML = productsHTML;
};

renderProducts();