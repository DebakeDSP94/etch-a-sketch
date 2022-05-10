const penColor = document.getElementById('color-palette');
const rainbowToggle = document.getElementById('rainbow');
const clearBtn = document.getElementById('clear');
const eraserToggle = document.getElementById('eraser');
const gridSize = document.getElementById('grid-size');
const gridSizeTextEl = document.getElementById('grid-size-text');
const canvas = document.getElementById('canvas');

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

let gridSizeNum = 16;
let rainbow = false;
let eraser = false;
let color = '#000000';

createGrid(gridSizeNum);

gridSize.addEventListener('input', (e) => {
	gridSizeNum = +e.target.value;
	clearGrid(canvas);
	createGrid(gridSizeNum);
	updateGridSizeTextEl(gridSizeNum);
});

clearBtn.addEventListener('click', newGrid);

rainbowToggle.addEventListener('change', (e) => rainbowMode(e.target));

function rainbowMode(rainbowBtn) {
	console.log(rainbowBtn.checked);
	if (rainbowBtn.checked) {
		rainbow = true;
		eraserToggle.target.checked = false;
	} else {
		rainbow = false;
	}
}

eraserToggle.addEventListener('change', (e) => eraserMode(e.target));

function eraserMode(eraserBtn) {
	console.log(eraserBtn.checked);
	if (eraserBtn.checked) {
		eraser = true;
		rainbowToggle.target.checked = false;
	} else {
		eraser = false;
	}
}

function newGrid() {
	clearGrid(canvas);
	createGrid(gridSizeNum);
}

function createGrid(gridSizeNum) {
	for (i = 1; i <= gridSizeNum; i++) {
		for (j = 1; j <= gridSizeNum; j++) {
			const square = document.createElement('div');
			square.classList.add('square');

			square.addEventListener('mouseover', setColor);

			canvas.appendChild(square);
			let squareSize = 600 / gridSizeNum;
			square.style.height = `${squareSize}px`;
			square.style.width = `${squareSize}px`;
		}
	}
}

function setColor(element) {
	if (!eraser && !rainbow) {
		color = penColor.value;
	} else if (rainbow && !eraser) {
		color = randomColor();
	} else if (eraser && !rainbow) {
		color = '#ffffff';
	}
	element.target.style.background = `${color}`;
}

function randomColor() {
	let hex = '#';

	for (let i = 0; i < 6; i++) {
		let index = Math.floor(Math.random() * hexValues.length);
		hex += hexValues[index];
	}

	return hex;
}

function clearGrid(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function updateGridSizeTextEl(gridSizeNum) {
	gridSizeTextEl.innerText = `Grid Size: ${gridSizeNum} x ${gridSizeNum}`;
}
