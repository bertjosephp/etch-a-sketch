const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'color';

let currentSize;
let currentColor;
let currentMode;

const gridContainer = document.querySelector('#grid-container');
const colorButton = document.querySelector('#color-button');
const rainbowButton = document.querySelector('#rainbow-button');
const eraserButton = document.querySelector('#eraser-button');
const inputColor = document.querySelector('#input-color');
const inputSize = document.querySelector('#input-size');
const outputSize = document.querySelector('#output-size');

inputColor.addEventListener("input", function () {
    currentColor = inputColor.value;
})

colorButton.addEventListener("click", function () {
    currentMode = 'color';
})

rainbowButton.addEventListener("click", function () {
    currentMode = 'rainbow';
})

eraserButton.addEventListener("click", function () {
    currentMode = 'eraser';
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
    switch (currentMode) {
        case 'color':
            currentColor = inputColor.value;
            break;
        case 'rainbow':
            let randomColorR = Math.floor(Math.random() * 256);
            let randomColorG = Math.floor(Math.random() * 256);
            let randomColorB = Math.floor(Math.random() * 256);
            currentColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`;
            break;
        case 'eraser':
            currentColor = '#FFFFFF';
            break;
        default:
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