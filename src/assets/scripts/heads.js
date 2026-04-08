const table = document.querySelector('.board-table');
const heads = document.querySelectorAll('.head');

const baseAngles = [0, 0, 0, 0, 0, 0];
const maxTilt = 20;

table.addEventListener('mousemove', (e) => {
  const tableRect = table.getBoundingClientRect();
  const cursorX = e.clientX;
  const cursorY = e.clientY;

  heads.forEach((head, i) => {
    const headRect = head.getBoundingClientRect();
    const headCenterX = headRect.left + headRect.width / 2;
    const headCenterY = headRect.top + headRect.height / 2;

    const dx = cursorX - headCenterX;
    const dy = cursorY - headCenterY;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    const base = baseAngles[i];
    const clamped = Math.max(base - maxTilt, Math.min(base + maxTilt, angle));

    head.style.transform = `rotate(${clamped}deg)`;
    head.style.transition = 'transform 0.15s ease-out';
  });
});

table.addEventListener('mouseleave', () => {
  heads.forEach((head, i) => {
    head.style.transform = `rotate(${baseAngles[i]}deg)`;
  });
});
