const container = document.querySelector(".container");
const cPicker = document.querySelector("#cPicker");
const blackBtn = document.querySelector("#black");
const randBtn = document.querySelector("#random");
const eraserBtn = document.querySelector("#eraser");
const resetBtn = document.querySelector("#reset");
const sizeText = document.querySelector("#grid-size-text");
const slider = document.querySelector("#slider-range");

let defaultColor = "";
let defaultNum = 16;

function resizeGrid(num) {
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.border = "1px solid #111111";
    div.addEventListener("mouseover", colorGrid);
  }
}

// Button Picks
function colorGrid(e) {
  if (defaultColor === cPicker.value) {
    e.target.style.backgroundColor = cPicker.value;
  }
  if (defaultColor === "#000000") {
    e.target.style.backgroundColor = "#000000";
  }

  if (defaultColor === "#FFFFFF") {
    e.target.style.backgroundColor = "#FFFFFF";
  }

  if (defaultColor === "rgb") {
    const R = (Math.random() * 256) >> 0;
    const G = (Math.random() * 256) >> 0;
    const B = (Math.random() * 256) >> 0;
    e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  }
}

function resetGrid() {
  resetBtn.blur();
  defaultColor = cPicker.value;
  container.innerHTML = "";
  resizeGrid(slider.value);
}

// EVENT LISTENERS
cPicker.addEventListener("input", () => {
  defaultColor = cPicker.value;
  console.log(cPicker.value);
});
blackBtn.addEventListener("click", () => {
  defaultColor = "#000000";
});
resetBtn.addEventListener("click", resetGrid);
eraserBtn.addEventListener("click", () => {
  defaultColor = "#FFFFFF";
});
randBtn.addEventListener("click", () => {
  defaultColor = "rgb";
});
sizeText.innerHTML = `${slider.value} x ${slider.value}`;
slider.addEventListener("input", () => {
  sizeText.innerHTML = `${slider.value} x ${slider.value}`;
  resetGrid(slider.value);
});

resizeGrid(defaultNum);
