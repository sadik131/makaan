// Toggle the entire mobile menu
document.getElementById("hamburger").addEventListener("click", () => {
  const mobileNav = document.getElementById("mobile-nav-links");
  mobileNav.classList.toggle("hidden");
});

// Toggle nested links and rotate icons
document.querySelectorAll("#mobile-nav-links > li").forEach((item) => {
  const icon = item.querySelector("i"); // Find the icon
  const nestedLinks = item.querySelector("ul"); // Find the nested links

  item.addEventListener("click", (event) => {
    // Check if the clicked target is not part of the nested links
    if (event.target.closest("ul")) {
      // Toggle visibility of nested links
      nestedLinks.classList.toggle("hidden");

      // Rotate icon
      icon.classList.add("rotate-180");
      console.log(icon)
    }
  });
});

window.addEventListener("scroll", () => {
  const navContainer = document.querySelector("nav > .container");

  if (window.scrollY > 44) {
    navContainer.classList.remove("lg:w-[93%]", "lg:mt-11");
    navContainer.classList.add("lg:w-full"); // Add full width on scroll
  } else {
    navContainer.classList.remove("lg:w-full");
    navContainer.classList.add("lg:w-[93%]", "lg:mt-11"); // Revert back to original styles
  }
});




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
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  },
  navigation: {
    nextEl: '.swiper-button-next-test',
    prevEl: '.swiper-button-prev-test',
  },
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