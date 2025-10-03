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

var brands = new Swiper(".brands", {
  slidesPerView: 2,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
  },
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 14,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 14,
    },
    1200: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 7,
    }
  },
});

var brands2 = new Swiper(".brands2", {
  slidesPerView: 2,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
  },
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 22,
    },
    768: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 7,
    },
    1200: {
      slidesPerView: 9,
    },
    1300: {
      slidesPerView: 10,
    }
  },
});
// ابتدا اسلایدر کوچک را تعریف می‌کنیم
var smallImg = new Swiper(".smallImg", {
   direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 12,
  autoplay: false, // غیرفعال می‌کنیم چون توسط carDetails کنترل می‌شود
    breakpoints: {
                     480: {
      slidesPerView: 4,
    },
                  578: {
      slidesPerView: 5,
    },
               680: {
      slidesPerView: 6,
    },
            768: {
      slidesPerView: 7,
    },
         992: {
      slidesPerView: 8,
    },
    1024: {
     direction: "vertical",
      slidesPerView: 3,
    },
  },
  on: {
    slideChange: function () {
      // همگام‌سازی اسلایدر اصلی
      if (carDetails && !carDetails.destroyed) {
        carDetails.slideTo(this.activeIndex);
      }
      updateSlideNumber();
    }
  }
});

// سپس اسلایدر اصلی را تعریف می‌کنیم
var carDetails = new Swiper(".carDetails", {
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  on: {
    slideChange: function () {
      // همگام‌سازی اسلایدر کوچک
      if (smallImg && !smallImg.destroyed) {
        smallImg.slideTo(this.activeIndex);
      }
      updateSlideNumber();
    },
    init: function () {
      updateSlideNumber();
    }
  }
});

// تابع برای به‌روزرسانی شماره اسلاید
function updateSlideNumber() {
  const slideNumberElement = document.getElementById('slideNumber');
  if (slideNumberElement && carDetails && !carDetails.destroyed) {
    slideNumberElement.textContent = `${carDetails.activeIndex + 1} / ${carDetails.slides.length}`;
  }
}

// اضافه کردن event listener برای کلیک روی اسلایدهای کوچک
document.querySelectorAll('.smallImg .swiper-slide').forEach((slide, index) => {
  slide.addEventListener('click', function() {
    if (carDetails && !carDetails.destroyed) {
      carDetails.slideTo(index);
    }
    if (smallImg && !smallImg.destroyed) {
      smallImg.slideTo(index);
    }
  });
});

// همچنین برای فعال کردن استایل اسلاید فعال در smallImg
smallImg.on('activeIndexChange', function() {
  document.querySelectorAll('.smallImg .swiper-slide').forEach((slide, i) => {
    const div = slide.querySelector('div');
    if (div) {
      if (i === smallImg.activeIndex) {
        div.style.backgroundColor = 'white';
      } else {
        div.style.backgroundColor = '#ffffff46';
      }
    }
  });
});

// مقداردهی اولیه استایل
setTimeout(() => {
  document.querySelectorAll('.smallImg .swiper-slide').forEach((slide, i) => {
    const div = slide.querySelector('div');
    if (div) {
      if (i === smallImg.activeIndex) {
        div.style.backgroundColor = 'white';
      } else {
        div.style.backgroundColor = '#ffffff46';
      }
    }
  });
}, 100);



// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
});

// persian number

function convertPageNumbersToPersian() {
  const elements = document.querySelectorAll('body *:not(script):not(style)');

  elements.forEach(element => {
    element.childNodes.forEach(node => {
      if (node.nodeType === 3) { // Text node
        node.nodeValue = node.nodeValue.replace(/\d/g, (digit) => {
          return String.fromCharCode(digit.charCodeAt(0) + 1728);
        });
      }
    });
  });
}

// اجرا پس از لود صفحه
document.addEventListener('DOMContentLoaded', convertPageNumbersToPersian);
