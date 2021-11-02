"use strict";

//Initialize Swiper
var exhibitionSwiper = document.querySelector(".exhibitionSwiper");

if (exhibitionSwiper) {
  var swiper = new Swiper(".exhibitionSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    slidesOffsetBefore: 0,
    breakpoints: {
      992: {
        slidesPerView: 3,
        slidesOffsetBefore: 65
      }
    }
  });
}
//# sourceMappingURL=all.js.map
