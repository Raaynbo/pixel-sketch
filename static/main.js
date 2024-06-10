alert("hello from js");

function createGrid(height, width){
	const gridContainer = document.querySelector(".grid_container");
	for ( let j = 1; j <= height; ++j){
		let row = document.createElement('div');
		row.style.margin = "0";
		row.style.padding = "0";
		row.style.height = "50px";
		gridContainer.appendChild(row);
		for (let i = 1; i <= width; ++i){
			let cell = document.createElement("div");
			const baseTagId = "cell-";
			cell.style.border = "1px solid black";
			cell.style.display = "inline-block";
			cell.style.width = "50px";
			cell.style.height = "50px";
			cell.id = baseTagId + i + "-" + j;
			row.appendChild(cell);
			cell.addEventListener("click", (e) => {
				console.log(e.target.id);
			});
		}
	}
}

createGrid(16,16);
