 let lastScrollTop = 0;
 navbar = document.getElementById("navbar");
 window.addEventListener("scroll", function(){
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
    lastScrollTop = scrollTop;
 })

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