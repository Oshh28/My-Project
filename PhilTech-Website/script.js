let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const botNavbar = document.getElementById("bot-navbar");
const toggleButton = document.getElementById("toggleBottomNav");
const closeButton = document.getElementById("closeBottomNav");
const scrollThreshold = 100;
let isBottomNavManuallyHidden = false;

// Scroll functionality
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Only trigger if scrolled more than threshold and not manually hidden
  if (Math.abs(scrollTop - lastScrollTop) > 10 && !isBottomNavManuallyHidden) {
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      // Scrolling down - hide top navbar, show bottom navbar
      navbar.classList.add("hide-top");
      botNavbar.classList.remove("hide-bottom");
      toggleButton.classList.remove("show");
    } else if (scrollTop < lastScrollTop) {
      // Scrolling up - show top navbar, hide bottom navbar
      navbar.classList.remove("hide-top");
      botNavbar.classList.add("hide-bottom");
      toggleButton.classList.add("show");
    }
    lastScrollTop = scrollTop;
  }
});

// Close button functionality
closeButton.addEventListener("click", function () {
  botNavbar.classList.add("hide-bottom");
  toggleButton.classList.add("show");
  isBottomNavManuallyHidden = true;
});

// Toggle button functionality
toggleButton.addEventListener("click", function () {
  botNavbar.classList.remove("hide-bottom");
  toggleButton.classList.remove("show");
  isBottomNavManuallyHidden = false;
});

// Initially hide bottom navbar and show toggle button
botNavbar.classList.add("hide-bottom");
toggleButton.classList.add("show");



const popOutButton = document.getElementById("SHS-Button");
const popOutButton2 = document.getElementById("COLLEGE-Button");
const popOutButton3 = document.getElementById("SUNDAY-Button");
const popOutButton4 = document.getElementById("DEVELOPER-Button");
const bg_PopOffers = document.querySelector(".Bg-PopOffers");
const bg_PopOffers2 = document.querySelector(".Bg-PopOffers2");
const bg_PopOffers3 = document.querySelector(".Bg-PopOffers3");
const bg_PopDev = document.querySelector(".BgDev-Popup");
const cancelPop = document.getElementById("Close");
const cancelPop2 = document.getElementById("Close2");
const cancelPop3 = document.getElementById("Close3");
const cancelPop4 = document.getElementById("Close4");

// Show popup on button click
popOutButton.addEventListener("click", function (e) {
  e.preventDefault();
  bg_PopOffers.classList.add("show");
  document.body.style.overflow = "hidden";
});

popOutButton2.addEventListener("click", function (e) {
  e.preventDefault();
  bg_PopOffers2.classList.add("show");
  document.body.style.overflow = "hidden";
});

popOutButton3.addEventListener("click", function (e) {
  e.preventDefault();
  bg_PopOffers3.classList.add("show");
  document.body.style.overflow = "hidden";
});

popOutButton4.addEventListener("click", function (e) {
  e.preventDefault();
  bg_PopDev.classList.add("show");
  document.body.style.overflow = "hidden";
});

// Close popup
cancelPop.addEventListener("click", function (e) {
  e.preventDefault();
  bg_PopOffers.classList.remove("show");
  document.body.style.overflow = "auto";
});

cancelPop2.addEventListener("click", function (e) {
  e.preventDefault();
  bg_PopOffers2.classList.remove("show");
  document.body.style.overflow = "auto";
});

cancelPop3.addEventListener("click", function (e) {
  e.preventDefault();
  bg_PopOffers3.classList.remove("show");
  document.body.style.overflow = "auto";
});

cancelPop4.addEventListener("click", function (e) {
  e.preventDefault();
  bg_PopDev.classList.remove("show");
  document.body.style.overflow = "auto";
});



let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';

function showToast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
    location.reload();
  }, 5000);
}

new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // Pagination bullets
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
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});
