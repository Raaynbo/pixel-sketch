alert("hello from js");

function createGrid(height, width){
	const gridContainer = document.querySelector(".grid_container");
	for (let i = 1; i <= width; ++i){
		let cell = document.createElement("div");
		const baseTagId = "cell-";
		cell.style.border = "1px solid black";
		cell.style.display = "inline-block";
		cell.style.width = "50px";
		cell.style.height = "50px";
		cell.id = baseTagId + i;
		gridContainer.appendChild(cell);
		cell.addEventListener("click", (e) => {
			console.log(e.target.id);
		});
	}
}

createGrid(0,5);
