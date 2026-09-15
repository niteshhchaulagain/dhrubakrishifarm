const sidebar =  document.querySelector('.sidebar');
const showBtn = document.querySelector('.js-show-sidebar');
const hideBtn = document.querySelector('.js-hide-sidebar');

showBtn.addEventListener('click', () => {
  sidebar.style.display = "flex";
})

hideBtn.addEventListener('click', () => {
  sidebar.style.display = "none";
})
