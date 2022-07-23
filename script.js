const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';

let currentSize;
let currentColor;

const gridContainer = document.querySelector('#grid-container');
const eraserButton = document.querySelector('#eraser-button');
const inputColor = document.querySelector('#input-color');
const inputSize = document.querySelector('#input-size');
const outputSize = document.querySelector('#output-size');

inputColor.addEventListener("input", function () {
    currentColor = inputColor.value;
})

eraserButton.addEventListener("click", function () {
    currentColor = '#FFFFFF';
})

inputSize.addEventListener("change", function () {
    clearGrid();
    loadGrid();
})

function setSize() {
    currentSize = inputSize.value;
    setOutputSizeText();
}

function setOutputSizeText() {
    outputSize.textContent = `${currentSize} x ${currentSize}`;
}

function setColor(e) {
    if (!currentColor) {
        currentColor = DEFAULT_COLOR;
    }
    e.target.style.backgroundColor = currentColor;
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

function clearGrid() {
    gridContainer.innerHTML = '';
}

function loadGrid() {
    setSize();
    generateGrid(currentSize);
}

loadGrid();