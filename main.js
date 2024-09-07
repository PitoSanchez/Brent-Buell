import "./style.css"

function toggleMenu() {
    const menu = document.getElementById('menuPage');
    if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
}

// JavaScript for dynamic words
const words = ['PRODUCER', 'NOVELIST', 'PLAYWRIGHT', 'DIRECTOR'];
let currentIndex = 0;
const dynamicWordsElement = document.getElementById('dynamic-words');

function updateWord() {
    dynamicWordsElement.innerHTML = `<span>${words[currentIndex]}</span>`;
    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(updateWord, 2000);
updateWord(); // Initial call to set the first word
