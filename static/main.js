// variable
let colorMode = 0; // 0 = random - 1 = defined color
let editionMode = 0; //0 = hover - 1 = click
const gridSize = 980 ; // = base size (width and height)
let clientWidth = document.querySelector("body").clientWidth;
console.log(clientWidth);


// DOM element
const colorBoolBtn = document.querySelector("#randomColor");
const editionBtn = document.querySelector("#editionMode");
const colorParam = document.querySelector("#colorLabel");
const resizeBtn = document.querySelector("#resizeBtn");
const spanClose = document.querySelector(".close");
const resetBtn = document.querySelector(".reset_grid");
const resizeModal = document.querySelector("#resize_modal");
const divResizeDemo = document.querySelector("#resize_demo");
const cellInputDimension = document.querySelector("#cellInputDimension");

// base grid creation
createGrid(16, gridSize);

// creation of all the event attached to DOM element
// ----------------------------------------------------
//
// reset the color of all the cells in the grid
resetBtn.addEventListener("click", () => {
	const allGridCell = document.querySelectorAll(".cell");
	allGridCell.forEach((cell) => {
		cell.style.backgroundColor = "white";
	});
});

//close the resize modal 
spanClose.addEventListener("click", () => {
	resizeModal.style.display = "none";
});

//display the resize modal
resizeBtn.addEventListener("click", (e) => {
	resizeModal.style.display = "block";
});

//display the demo cell inside the resize modal
cellInputDimension.addEventListener("keyup", (e) => {
	let demoDiv = document.querySelector("#demo_div");
		if (cellInputDimension.value.length >2){
		if (cellInputDimension.value > clientWidth){
			cellInputDimension.value = clientWidth-50;
		} else if (cellInputDimension.value < 100){
			cellInputDimension.value = 100;
		}
		let dim = Number(cellInputDimension.value) + "px";
		demoDiv.style.outline = "solid 1px black";
		demoDiv.style.width = cellInputDimension.value + "px";
		demoDiv.style.height = cellInputDimension.value + "px";
	}
});


resizeBtn.addEventListener("clicki", (e) => {
	let newSize = 0;
	let keepLooping = true;
	while (keepLooping){
		newSize =Number(prompt("How many cells you want in your grid? (Ex:  64 for a 64x64 grid, max 64"));
		if (newSize >=0 || newSize < 64){
			keepLooping = false;

		} 
	}
	const gridContainer = document.querySelector(".grid_container");
	while(gridContainer.firstChild){
		gridContainer.removeChild(gridContainer.lastChild);
	}
	createGrid(newSize,cellH);

});

// ------------------ Function definition --------------
// add Events to a cell 
function setEventOnCells(cell){
	cell.addEventListener("mouseover", (e) => {
		if (editionMode == false){
			if(colorMode === 0){
				hoverTrail(e.target);
			}else{
				const colorSelected = document.querySelector("#color");
				hoverTrail(e.target, colorSelected.value);
			}
		}
	});
	cell.addEventListener("click", (e) => {
		if (editionMode == true){
			if(colorMode === 0){
				hoverTrail(e.target);
			}else{
				const colorSelected = document.querySelector("#color");
				hoverTrail(e.target, colorSelected.value);
			}
		}
	});
}

// create a grid of height*width cells, each cell have a width and height of cellDim
function createGrid(cellNb, gridDim){
	const gridContainer = document.querySelector(".grid_container");
	gridContainer.style.width = gridDim + "px";
	gridContainer.style.height = gridDim + "px";
	cellDim = (gridDim/cellNb) + "px";
	for ( let j = 1; j <= cellNb; ++j){
		let row = document.createElement('div');
		row.classList.add("row"); 
		row.style.height = cellDim;
		gridContainer.appendChild(row);
		for (let i = 1; i <= cellNb; ++i){
			let cell = document.createElement("div");
			const baseTagId = "cell-";
			cell.style.width = cellDim;
			cell.style.height = cellDim;
			cell.id = baseTagId + j + "-" + i;
			cell.classList.add("cell");
			row.appendChild(cell);
			setEventOnCells(cell);
		}
	}
}

// generate a rgb color code
function generateRandomColor(){
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

// change cell color, need to pass the cell DOM element and a color in rgb or hex, if none generate a random color
function hoverTrail(cell, color=generateRandomColor()) {
	cell.style.backgroundColor =`${color}`;
}


// change the color mode
function switchColorMode(){
	if(colorMode === 0){
	colorMode = 1;
	colorParam.style.display = "block";
	colorBoolBtn.textContent = "No";
}else {
	colorMode = 0;
	colorBoolBtn.textContent = "Yes";
	colorParam.style.display = "none";
	}
}

// change edition mode
function switchEditionMode(){
	if(editionMode===0){
		editionMode = 1;
		editionBtn.textContent = "Click to modify"
	}else{
		
		editionMode = 0;
		editionBtn.textContent = "Hover to modify"
	}
}
