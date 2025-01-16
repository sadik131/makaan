const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000, // 5 seconds delay
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next', // Link to your custom next button
    prevEl: '.swiper-button-prev', // Link to your custom prev button
  },
});

// Initialize Swiper
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
  slidesPerView: 1, // Default for small screens
  spaceBetween: 20, // Spacing between slides
  loop: true, // Enables infinite looping
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2 },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 3000, // 3 seconds delay between slides
  //   disableOnInteraction: false, // Continue autoplay after user interaction
  // },
});

// scroll releav
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: "3000",
  delay: 600,
})

sr.reveal(".heding__text", {
  duration: "1000",
  distance: "100px",
  interval: 200
})

sr.reveal(".card__animation > div", {
  duration: "1000",
  distance: "100px",
  interval: 100
})
sr.reveal(".animation__bottom")