const containerDiv = document.querySelector(".container");
const button = document.querySelector("button");

const addStyleOnHover = (event) => {
    event.target.classList.add("colored");
};

const deleteSketchArea = () => {
    const childs = Array.from(containerDiv.childNodes);
    childs.forEach((child) => {child.remove()});
};

const userPrompt = () => {
    let number = parseInt(prompt('How big should your sketch area grid be?'));

    if (number < 2 || !number) {
        number = 2;
    }

    return number;
};

const buildSketchArea = (number) => {
    if (!number || number < 2) {
        number = 16;
    }

    for (let i = 0; i < number; i++){
        let lineDiv = document.createElement("div");
    
        lineDiv.classList.add("line");
        
        for (let j = 0; j < number; j++) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("cell");
    
            gridCell.addEventListener("mouseenter", addStyleOnHover);
            
            lineDiv.appendChild(gridCell);
        }
        
        containerDiv.appendChild(lineDiv);
    }
};


button.addEventListener("click", () => {
    deleteSketchArea();
    let number = userPrompt();
    buildSketchArea(number);
});

buildSketchArea();