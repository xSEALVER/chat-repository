let index = 0;

      function showSlide(i) {
        const slides = document.querySelector("#carousel");
        const totalSlides = slides.children.length;
        index = (i + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${index * 100}%)`;
      }

      function prevSlide() {
        showSlide(index - 1);
      }

      function nextSlide() {
        showSlide(index + 1);
      }

      // Ensure slides are properly displayed in a row
      document.addEventListener("DOMContentLoaded", () => {
        const slides = document.querySelector("#carousel");
        slides.classList.add("flex", "w-full");
        slides.style.width = `${slides.children.length * 100}%`;
        for (let slide of slides.children) {
          slide.classList.add("w-full", "flex-shrink-0");
        }
      });