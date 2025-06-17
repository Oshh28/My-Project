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
