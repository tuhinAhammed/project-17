// swiper js here
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      slidesPerView: "auto",
      spaceBetween: 30,
    },
    autoplay: {
        delay: 5000, // Delay between each slide in milliseconds
        disableOnInteraction: false, // Set to true if you want to stop autoplay on user interaction
      },
  });
