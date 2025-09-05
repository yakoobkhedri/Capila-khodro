// menu

let hamIcon = document.getElementById('hamIcon');
let overlay = document.getElementById('overlay');

hamIcon.addEventListener('click', function () {
  hamIcon.classList.toggle('active');
  overlay.classList.toggle('active');
  document.querySelector('.mobileMenu').classList.toggle('active');
  document.querySelector('header').classList.toggle('active');
});
overlay.addEventListener('click', function () {
  hamIcon.classList.remove('active');
  overlay.classList.remove('active');
  document.querySelector('.mobileMenu').classList.remove('active');
  document.querySelector('header').classList.remove('active');
});