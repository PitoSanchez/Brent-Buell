// Toggle Menu Functionality
function toggleMenu() {
    const menu = document.getElementById('menuPage');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

window.toggleMenu = toggleMenu;

// Dynamic Words Animation
const words = ['PRODUCER', 'NOVELIST', 'PLAYWRIGHT', 'DIRECTOR'];
let currentIndex = 0;
const dynamicWordsElement = document.getElementById('dynamic-words');

function updateWord() {
    dynamicWordsElement.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(updateWord, 4000);
document.addEventListener('DOMContentLoaded', updateWord);

// Carousel Functionality
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel .item');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel .list').style.transform = `translateX(${offset}%)`;
}

window.moveSlide = moveSlide;
