let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex < slides.length - 1) {
        slideIndex++;
        showSlides();
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        showSlides();
    }
}

showSlides(); // Show initial slide
