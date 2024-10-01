// Toggle Menu Functionality
function toggleMenu() {
    const menu = document.getElementById('menuPage');
    if (menu) {
        menu.classList.toggle('active');
    }
}

window.toggleMenu = toggleMenu;

// Dynamic Words Animation
const words = ['PRODUCER', 'NOVELIST', 'PLAYWRIGHT', 'DIRECTOR'];
let currentIndex = 0;
const dynamicWordsElement = document.getElementById('dynamic-words');

function updateWord() {
    dynamicWordsElement.innerHTML = `<span>${words[currentIndex]}</span>`;
    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(updateWord, 4000);
document.addEventListener('DOMContentLoaded', updateWord);
