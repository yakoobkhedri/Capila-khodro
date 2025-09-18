// swiper

var newCars = new Swiper(".newCars", {
  slidesPerView: 1.5,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
  },
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
  },
});
var newCars2 = new Swiper(".newCars2", {
slidesPerView: 1.5,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
  },
    spaceBetween: 10,
 breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next2', // دکمه بعدی
    prevEl: '.swiper-button-prev2', // دکمه قبلی
  },
});


// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
});
