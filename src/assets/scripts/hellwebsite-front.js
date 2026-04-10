const littleImages = document.querySelectorAll('.little-image');
const mainImage = document.querySelector('.selected-image');

littleImages.forEach(img => {
  img.addEventListener('click', () => {
    mainImage.src = img.src;

    littleImages.forEach(i => i.classList.remove('active'));
    img.classList.add('active');
  });
});
