const littleImages = document.querySelectorAll('.little-image');
const mainImage = document.querySelector('.selected-image');

const basketButton = document.getElementById('basket-button');
const productButton = document.getElementById('product-button');
const pageProducts = document.getElementById('hellsite-products');
const pageBasket = document.getElementById('hellsite-basket');

const addBucket = document.getElementById('addBucket');

basketButton.addEventListener('click', () => {
  pageProducts.classList.toggle('hidden');
  pageBasket.classList.toggle('hidden');
})

addBucket.addEventListener('click', () => {
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

const ignorecheckbox = document.getElementById('ignore');
const donationContainer  = document.getElementById('donationContainer');

ignorecheckbox.addEventListener('click', () => {
  if (ignorecheckbox.checked) {
    donationContainer.classList.toggle('hidden');
  } else {
    donationContainer.classList.toggle('hidden');
  }
})
