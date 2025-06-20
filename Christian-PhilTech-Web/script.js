const popOutButton4 = document.getElementById("DEVELOPER-Button");
const bg_PopDev = document.querySelector(".BgDev-Popup");
const cancelPop4 = document.getElementById("Close4");

popOutButton4.addEventListener("click", function (e) {
    e.preventDefault();
    bg_PopDev.classList.add("show");
    document.body.style.overflow = "hidden";
  });

cancelPop4.addEventListener("click", function (e) {
    e.preventDefault();
    bg_PopDev.classList.remove("show");
    document.body.style.overflow = "auto";
  });


const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    620: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});

