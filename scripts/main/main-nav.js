
const sidebar =  document.querySelector('.sidebar');
const showBtn = document.querySelector('.js-show-sidebar');
const hideBtn = document.querySelector('.js-hide-sidebar');

showBtn.addEventListener('click', () => {
  sidebar.style.display = "flex";
})

hideBtn.addEventListener('click', () => {
  sidebar.style.display = "none";
})

document.addEventListener('click', (event) => {
  const isOpen = sidebar.classList.contains('open');

  const clickedOutside = !sidebar.contains(event.target) && !showBtn.contains(event.target);

  if (isOpen && clickedOutside) {
    sidebar.classList.remove('open');
  }
})

document.addEventListener('click', (event) => {
  const isOpen = sidebar.style.display === 'flex';
  const clickedOutside = !sidebar.contains(event.target) && !showBtn.contains(event.target);

  if (isOpen && clickedOutside) {
    sidebar.style.display = 'none';
  }
})