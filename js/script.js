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
  