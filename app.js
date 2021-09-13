const container = document.querySelector(".container");

function playGrid(col, row) {
  //16 x 16
  for (let i = 0; i < col * row; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.border = "1px black solid"; //testing
    div.style.height = "30px";
    div.style.width = "30px";
    container.style.gridTemplateColumns = `repeat(${col}, ${div.style.height})`;
    container.style.gridTemplateRows = `repeat(${row}, ${div.style.height});`;
    // div.style.float = "left";
  }
}
playGrid(16, 16);
