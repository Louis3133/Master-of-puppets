const leftHand = document.querySelector('.left-hand');
const rightHand = document.querySelector('.right-hand');

const setLeftX  = gsap.quickSetter(leftHand,  'x', 'px');
const setLeftY  = gsap.quickSetter(leftHand,  'y', 'px');
const setRightX = gsap.quickSetter(rightHand, 'x', 'px');
const setRightY = gsap.quickSetter(rightHand, 'y', 'px');

let targetX = 0, targetY = 0;
let currentLX = 0, currentLY = 0;
let currentRX = 0, currentRY = 0;

const strength = 15;
const lerp = 0.06;

document.addEventListener('mousemove', (e) => {
  const { innerWidth: w, innerHeight: h } = window;
  targetX = (e.clientX / w - 0.5) * 2 * strength;
  targetY = (e.clientY / h - 0.5) * 2 * strength;
});

gsap.ticker.add(() => {
  currentLX += (targetX * -1 - currentLX) * lerp;
  currentLY += (targetY        - currentLY) * lerp;
  currentRX += (targetX        - currentRX) * lerp;
  currentRY += (targetY        - currentRY) * lerp;

  setLeftX(currentLX);  setLeftY(currentLY);
  setRightX(currentRX); setRightY(currentRY);
});
