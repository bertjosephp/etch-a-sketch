const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;
let currentColor;

const gridContainer = document.querySelector('#grid-container');
var inputColor = document.querySelector('#input-color');

inputColor.addEventListener("input", function () {
    currentColor = inputColor.value;
})

function setColor(e) {
    if (currentColor) {
        e.target.style.backgroundColor = currentColor;
    } else {
        e.target.style.backgroundColor = '#000000';
    }
}

function generateGrid(size) {
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.textContent = '';
        gridElement.addEventListener('mouseover', setColor);
        gridContainer.appendChild(gridElement);
    }
}

generateGrid(currentSize);