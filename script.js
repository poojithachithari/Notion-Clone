document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-section2');
  const carousel = document.querySelector('#carouselExampleIndicators');
  const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const slideIndex = button.getAttribute('data-slide-index');
      if (slideIndex !== null) {
        bsCarousel.to(parseInt(slideIndex));
      }
    });
  });
});
