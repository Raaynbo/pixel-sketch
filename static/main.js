alert("hello from js");

function createGrid(height, width, cellHeight, cellWidth){
	const gridContainer = document.querySelector(".grid_container");
	for ( let j = 1; j <= height; ++j){
		let row = document.createElement('div');
		row.style.margin = "0";
		row.style.padding = "0";
		row.style.display = "flex";
		row.style.height = cellHeight;
		gridContainer.appendChild(row);
		for (let i = 1; i <= width; ++i){
			let cell = document.createElement("div");
			const baseTagId = "cell-";
			cell.style.border = "1px solid black";
			cell.style.width = cellWidth;
			cell.style.height = cellHeight;
			cell.id = baseTagId + i + "-" + j;
			cell.classList.add("cell");
			row.appendChild(cell);
			cell.addEventListener("click", (e) => {
			});
			cell.addEventListener("mouseover", (e) => hoverTrail(e));
		}
	}
}

function generateRandomColor(){
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

function hoverTrail(event) {
	let color = generateRandomColor();
	console.log(color);
	event.target.style.backgroundColor =`${color}`;
}


const cellH = "20px" ;
createGrid(16,16, cellH, cellH);
const resetBtn = document.querySelector(".reset_grid");
resetBtn.addEventListener("click", () => {
	const allGridCell = document.querySelectorAll(".cell");
	allGridCell.forEach((cell) => {
		cell.style.backgroundColor = "white";
	});
});
