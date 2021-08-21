"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); //Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  //這裡如果設3，手機模式會無法順利滑動。
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
//# sourceMappingURL=all.js.map
