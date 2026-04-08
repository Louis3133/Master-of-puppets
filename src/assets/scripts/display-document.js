const folders = document.getElementsByClassName('document');
const folderDisplay = document.getElementById('documents-section');

Array.from(folders).forEach(element => {
  element.addEventListener('click', () => {
    folderDisplay.classList.toggle('hidden');
  });
});
