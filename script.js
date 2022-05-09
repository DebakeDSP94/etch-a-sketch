const penColor = document.getElementById('color-palette');
const rainbowToggle = document.getElementById('rainbox');
const clearBtn = document.getElementById('clear');
const eraserBtn = document.getElementById('eraser');
const gridSize = document.getElementById('grid-size');
const gridSizeTextEl = document.getElementById('grid-size-text');
const canvas = document.getElementById('canvas');
let gridSizeNum = 16;

createGrid(gridSizeNum);

gridSize.addEventListener('input', (e) => {
	gridSizeNum = +e.target.value;
	clearGrid(canvas);
	createGrid(gridSizeNum);
	updateGridSizeTextEl(gridSizeNum);
});

clearBtn.addEventListener('click', newGrid);

/* eraserBtn.addEventListener('click', eraserMode)

function eraserMode() {

} */

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
	let color = penColor.value;
	element.target.style.background = `${color}`;
}

function clearGrid(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function updateGridSizeTextEl(gridSizeNum) {
	gridSizeTextEl.innerText = `Grid Size: ${gridSizeNum} x ${gridSizeNum}`;
}
