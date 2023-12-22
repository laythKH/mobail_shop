$(document).ready(function() {
   $('.landing-page-content > div').hover(function () {
      $(this).addClass('full-width');
      $(this).siblings().not('.full-width').hide();
   }, function () {
      // $('.landing-page-content > div').removeClass('full-width');
      // $('.landing-page-content > div:nth-child(4)').addClass('full-width');
      // $('.landing-page-content > div').show();
      $(this).removeClass('full-width');
      $(this).show();
      $('.landing-page-content > div').show();

   });

   // $("#test").css("background-color", "blue");
   $('.landing-page-content > div:nth-child(4)').addClass('full-width');


   
});


const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1,
   spaceBetween: 10,
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 3,
         spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 4,
         spaceBetween: 40
      }
   },
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   // navigation: {
      // nextEl: '.swiper-button-next',
      // prevEl: '.swiper-button-prev',
   // },

   // And if we need scrollbar
   // scrollbar: {
      // hide: true,
      // el: '.swiper-scrollbar',
   // },
});


