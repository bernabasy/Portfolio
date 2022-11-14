const nav = document.querySelector('.nav-items');
const humburger1 = document.querySelector('.humburger');
humburger1.addEventListener('click', () => {
  humburger1.classList.toggle('active');
  nav.classList.toggle('active');
});
document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  humburger1.classList.remove('active');
  nav.classList.remove('active');
}));