import { Carousel } from "./carousel";

// Toggle Menu Functionality
function toggleMenu() {
    const menu = document.getElementById('menuPage');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
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

// add spotlight

function updateCursor({ x, y }) {
    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--y', y)
}

document.body.addEventListener('pointermove', updateCursor)

// add carousels
new Carousel("carousel-1")
new Carousel("carousel-2")

