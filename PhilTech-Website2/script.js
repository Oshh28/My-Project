  const popOutButton = document.getElementById("SHS-Button");
  const popOutButton2 = document.getElementById("COLLEGE-Button");
  const popOutButton3 = document.getElementById("SUNDAY-Button");
  const bg_PopOffers = document.querySelector(".Bg-PopOffers");
  const bg_PopOffers2 = document.querySelector(".Bg-PopOffers2");
  const bg_PopOffers3 = document.querySelector(".Bg-PopOffers3");
  const cancelPop = document.getElementById("Close");
  const cancelPop2 = document.getElementById("Close2");
  const cancelPop3 = document.getElementById("Close3");

  // Show popup on button click
  popOutButton.addEventListener("click", function (e) {
    e.preventDefault();
    bg_PopOffers.classList.add("show");
    document.body.style.overflow = "hidden"; // prevent background scroll
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

  // Close popup
  cancelPop.addEventListener("click", function (e) {
    e.preventDefault();
    bg_PopOffers.classList.remove("show");
    document.body.style.overflow = "auto"; // re-enable scroll
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
