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