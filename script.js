const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'color';

let currentSize;
let currentColor;
let currentMode;
let isClicked = false;

const gridContainer = document.querySelector('#grid-container');
const colorButton = document.querySelector('#color-button');
const rainbowButton = document.querySelector('#rainbow-button');
const eraserButton = document.querySelector('#eraser-button');
const inputColor = document.querySelector('#input-color');
const inputSize = document.querySelector('#input-size');
const outputSize = document.querySelector('#output-size');
const clearButton = document.querySelector('#clear-button');

inputColor.addEventListener("input", function () {
    currentColor = inputColor.value;
})

colorButton.addEventListener("click", function () {
    if (currentMode === 'rainbow') {
        rainbowButton.classList.remove('selected-mode');
    } else if (currentMode === 'eraser') {
        eraserButton.classList.remove('selected-mode');
    }
    currentMode = 'color';
    colorButton.classList.add('selected-mode');
})

rainbowButton.addEventListener("click", function () {
    if (currentMode === 'color') {
        colorButton.classList.remove('selected-mode');
    } else if (currentMode === 'eraser') {
        eraserButton.classList.remove('selected-mode');
    }
    currentMode = 'rainbow';
    rainbowButton.classList.add('selected-mode');
})

eraserButton.addEventListener("click", function () {
    if (currentMode === 'color') {
        colorButton.classList.remove('selected-mode');
    } else if (currentMode === 'rainbow') {
        rainbowButton.classList.remove('selected-mode');
    }
    currentMode = 'eraser';
    eraserButton.classList.add('selected-mode');
})

clearButton.addEventListener("click", function () {
    if (currentMode === 'rainbow') {
        rainbowButton.classList.remove('selected-mode');
    } else if (currentMode === 'eraser') {
        eraserButton.classList.remove('selected-mode');
    }
    currentMode = 'color';
    colorButton.classList.add('selected-mode');
    clearGrid();
    loadGrid();
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
    if (e.type === 'mousedown') {
        isClicked = true;
    } else if (e.type === 'mouseup') {
        isClicked = false;
    }
    
    if (isClicked) {
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
        }
        if (currentMode) {
            e.target.style.backgroundColor = currentColor;
        }
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
        gridElement.addEventListener('mousedown', setColor);
        gridElement.addEventListener('mouseup', setColor);
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