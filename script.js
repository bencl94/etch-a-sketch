const containerDiv = document.querySelector(".container");

for (let i = 0; i < 16; i++){
    let lineDiv = document.createElement("div");

    lineDiv.classList.add("line");
    
    for (let j = 0; j < 16; j++) {
        let gridCell = document.createElement("div");
        gridCell.classList.add("cell");
        
        lineDiv.appendChild(gridCell);
    }
    
    containerDiv.appendChild(lineDiv);
}