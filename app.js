const container = document.querySelector(".container");
const blackBtn = document.querySelector("#black");
const randBtn = document.querySelector("#random");
const eraserBtn = document.querySelector("#eraser");
const resetBtn = document.querySelector("#reset");
const sizeText = document.querySelector("#grid-size-text");
const slider = document.querySelector("#slider-range");

let defaultColor = "";
let defaultNum = 16;
let sliderValue = 16;

function playGrid(num) {
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    // div.style.border = "1px solid #242526";
    div.addEventListener("mouseover", colorPick);
  }
}

function resetGrid() {
  resetBtn.blur();
  defaultColor = "";
  container.innerHTML = "";
  playGrid(sliderValue);
}

// Color Picker
function colorPick(e) {
  if (defaultColor === "#18191A") {
    e.target.style.backgroundColor = "#18191A";
  }

  if (defaultColor === "red") {
    e.target.style.backgroundColor = "red";
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

sizeText.innerHTML = slider.value;
slider.addEventListener("change", () => {
  sizeText.innerHTML = slider.value;
  sliderValue = slider.value;
  defaultColor = "";
  container.innerHTML = "";
  resetGrid(sliderValue);
});
// EVENT LISTENERS
blackBtn.addEventListener("click", () => {
  defaultColor = "#18191A";
});
resetBtn.addEventListener("click", resetGrid);
eraserBtn.addEventListener("click", () => {
  defaultColor = "#FFFFFF";
});

randBtn.addEventListener("click", () => {
  defaultColor = "rgb";
});

//Initialize Default Grid
playGrid(defaultNum);
