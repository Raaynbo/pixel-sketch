let colorMode = 0;
let editionMode = 0; //0 = hover - 1 = click
const cellH = "20px" ;
const colorBoolBtn = document.querySelector("#randomColor");
const editionBtn = document.querySelector("#editionMode");
const colorParam = document.querySelector("#colorLabel");
createGrid(16,16, cellH, cellH);
const resetBtn = document.querySelector(".reset_grid");
resetBtn.addEventListener("click", () => {
	const allGridCell = document.querySelectorAll(".cell");
	allGridCell.forEach((cell) => {
		cell.style.backgroundColor = "white";
	});
});

const gridCells = document.querySelectorAll(".cell");
gridCells.forEach((cell) => {
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
});

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
