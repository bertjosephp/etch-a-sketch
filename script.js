const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

const gridContainer = document.querySelector('#grid-container');

function setColor(e) {
    e.target.style.backgroundColor = 'black';
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