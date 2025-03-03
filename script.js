document.addEventListener("DOMContentLoaded", function() {
    setupSlider();
});

// 이미지 슬라이더 스와이프 기능
let currentIndex = 0;
const slider = document.getElementById("slider");
let startX = 0;
let isDragging = false;

slider.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    isDragging = true;
});

slider.addEventListener("touchmove", function (e) {
    if (!isDragging) return;
    let moveX = e.touches[0].clientX - startX;
    slider.style.transform = `translateX(${moveX - currentIndex * 100}%)`;
});

slider.addEventListener("touchend", function (e) {
    isDragging = false;
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;
    if (diff > 50) {
        nextSlide();
    } else if (diff < -50) {
        prevSlide();
    } else {
        showSlide(currentIndex);
    }
});

function showSlide(index) {
    slider.style.transform = `translateX(${-index * 100}%)`;
}

function prevSlide() {
    currentIndex = Math.max(0, currentIndex - 1);
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = Math.min(slider.children.length - 1, currentIndex + 1);
    showSlide(currentIndex);
}

function setupSlider() {
    showSlide(currentIndex);
}
