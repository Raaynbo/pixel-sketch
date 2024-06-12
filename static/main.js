let colorMode = 0;
let editionMode = 0; //0 = hover - 1 = click
const cellH = "20px" ;
const colorBoolBtn = document.querySelector("#randomColor");
const editionBtn = document.querySelector("#editionMode");
const colorParam = document.querySelector("#colorLabel");
const resizeBtn = document.querySelector("#resizeBtn");
const spanClose = document.querySelector(".close");
createGrid(16,16, cellH, cellH);
const resetBtn = document.querySelector(".reset_grid");
const resizeModal = document.querySelector("#resize_modal");
const divResizeDemo = document.querySelector("#resize_demo");
const cellInputDimension = document.querySelector("#cellInputDimension");

resetBtn.addEventListener("click", () => {
	const allGridCell = document.querySelectorAll(".cell");
	allGridCell.forEach((cell) => {
		cell.style.backgroundColor = "white";
	});
});

spanClose.addEventListener("click", () => {
	resizeModal.style.display = "none";
});

resizeBtn.addEventListener("click", (e) => {
	resizeModal.style.display = "block";
});

cellInputDimension.addEventListener("keyup", (e) => {
	let demoDiv = document.querySelector("#demo_div");
	if (Number(cellInputDimension.value > 100)){
		cellInputDimension.value = 100;
	} else if (Number(cellInputDimension.value < 5)){
		cellInputDimension.value = 5;
	}
	let dim = Number(cellInputDimension.value) + "px";
	demoDiv.style.outline = "solid 1px black";
	demoDiv.style.width = cellInputDimension.value + "px";
	demoDiv.style.height = cellInputDimension.value + "px";
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
	createGrid(newSize, newSize,cellH, cellH);

});

function setEventOnCells(cell){
	cell.addEventListener("mouseover", (e) => {
		if (editionMode == false){
			if(colorMode === 0){
				hoverTrail(e);
			}else{
				const colorSelected = document.querySelector("#color");
				hoverTrail(e, colorSelected.value);
			}
		}
	});
	cell.addEventListener("click", (e) => {
		if (editionMode == true){
			if(colorMode === 0){
				hoverTrail(e);
			}else{
				const colorSelected = document.querySelector("#color");
				hoverTrail(e, colorSelected.value);
			}
		}
	});
}

function createGrid(height, width, cellHeight, cellWidth){
	const gridContainer = document.querySelector(".grid_container");
	for ( let j = 1; j <= height; ++j){
		let row = document.createElement('div');
		row.classList.add("row"); 
		row.style.height = cellHeight;
		gridContainer.appendChild(row);
		for (let i = 1; i <= width; ++i){
			let cell = document.createElement("div");
			const baseTagId = "cell-";
			cell.style.width = cellWidth;
			cell.style.height = cellHeight;
			cell.id = baseTagId + i + "-" + j;
			cell.classList.add("cell");
			row.appendChild(cell);
			setEventOnCells(cell);
		}
	}
}

function generateRandomColor(){
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

function hoverTrail(event, color=generateRandomColor()) {
	event.target.style.backgroundColor =`${color}`;
}



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

function switchEditionMode(){
	if(editionMode===0){
		editionMode = 1;
		editionBtn.textContent = "Click to modify"
	}else{
		
		editionMode = 0;
		editionBtn.textContent = "Hover to modify"
	}
}
