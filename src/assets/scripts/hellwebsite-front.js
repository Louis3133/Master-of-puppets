const littleImages = document.querySelectorAll('.little-image');
const mainImage = document.querySelector('.selected-image');

const basketButton = document.getElementById('basket-button');
const productButton = document.getElementById('product-button');
const pageProducts = document.getElementById('hellsite-products');
const pageBasket = document.getElementById('hellsite-basket');

basketButton.addEventListener('click', () => {
  pageProducts.classList.toggle('hidden');
  pageBasket.classList.toggle('hidden');
})

productButton.addEventListener('click', () => {
  pageProducts.classList.toggle('hidden');
  pageBasket.classList.toggle('hidden');
})

littleImages.forEach(img => {
  img.addEventListener('click', () => {
    mainImage.src = img.src;

    littleImages.forEach(i => i.classList.remove('active'));
    img.classList.add('active');
  });
});
