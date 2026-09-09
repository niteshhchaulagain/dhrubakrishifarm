
const sidebar =  document.querySelector('.sidebar');
const showBtn = document.querySelector('.js-show-sidebar');
const hideBtn = document.querySelector('.js-hide-sidebar');

showBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
})

hideBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
})

document.addEventListener('click', (event) => {
  const isOpen = sidebar.classList.contains('open');

  const clickedOutside = !sidebar.contains(event.target) && !showBtn.contains(event.target);

  if (isOpen && clickedOutside) {
    sidebar.classList.remove('open');
  }
})