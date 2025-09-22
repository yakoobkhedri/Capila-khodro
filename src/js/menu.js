// menu

let hamIcon = document.getElementById('hamIcon');

hamIcon.addEventListener('click', function () {
  hamIcon.classList.toggle('active');
  document.querySelector('.mobileMenu').classList.toggle('active');
  document.querySelector('header').classList.toggle('active');
});