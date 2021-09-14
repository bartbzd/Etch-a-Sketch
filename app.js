const container = document.querySelector(".container");
const blackBtn = document.querySelector("#black-btn");
const resetBtn = document.querySelector("#reset-btn");
const rainBtn = document.querySelector("#rainbow");
const eraseBtn = document.querySelector("#eraser");

let defaultColor = "";

function playGrid(num) {
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.border = "1px solid grey"; //
    div.addEventListener("mouseover", colorSelect);
  }
}

let num = prompt("Enter a number", "");
playGrid(num);
function resetColor() {
  container.innerHTML = "";
  num = prompt("Enter a number", "");
  playGrid(num);
}

// Color Picker
function colorSelect(e) {
  if (defaultColor === "") {
    e.target.style.backgroundColor = "black";
  } else if (defaultColor === "red") {
    e.target.style.backgroundColor = "red";
  }
}

// RESET COLORS
resetBtn.addEventListener("click", resetColor, () => {
  resetBtn.stlyle.buttonFocus = "outline:0";
});
blackBtn.addEventListener("click", () => {
  defaultColor = "red";
});
rainBtn.addEventListener("click", () => {
  const R = (Math.random() * 256) >> 0;
  const G = (Math.random() * 256) >> 0;
  const B = (Math.random() * 256) >> 0;
  defaultColor = `rgb(${R}, ${G}, ${B})`;
});
