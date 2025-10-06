// accordion

let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));

accordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
});
