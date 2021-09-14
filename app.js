const container = document.querySelector(".container");
const blackBtn = document.querySelector("black-btn");
const resetBtn = document.querySelector("reset-btn");

function playGrid(num) {
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.border = "1px solid grey"; //
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    div.addEventListener("mouseover", colorSelect);
  }
}
playGrid(16);

function resetColor(e) {
  e.target.style.backgroundColor = "";
}

function colorSelect(e) {
  e.target.style.backgroundColor = "black";
}
