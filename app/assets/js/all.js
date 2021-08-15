$(function() {
  console.log('Hello Bootstrap5');
});
 
//Initialize Swiper

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // }, -->下方圓形的換頁效果，設計稿沒有，不用加。
  });
