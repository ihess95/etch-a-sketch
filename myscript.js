const container = document.querySelector("div.bodyContainer");
const buttonContainer = document.querySelector("div.buttonContainer");
const button = document.createElement("button");
const resetButton = document.createElement("button");
const colorButton = document.createElement("button");
let cells = "";
let x = 10;
let y = 10;
let randColor = Math.floor(Math.random() * 16777215).toString(16);
button.textContent = "Adjust resolution and reset";
buttonContainer.appendChild(button);
resetButton.textContent = "Reset";
buttonContainer.appendChild(resetButton);
colorButton.textContent = "Reroll color";
buttonContainer.appendChild(colorButton);

button.addEventListener("click", (event) => {
  adjustResolution();
});

colorButton.addEventListener("click", (event) => {
  colorRandomizer();
});

// container.style.width = "500px";
// container.style.height = "auto";
// button.textContent = "Adjust Size";

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cells = document.querySelectorAll("div.grid-item");
    cells.forEach((cells) =>
      cells.addEventListener("mouseover", () => {
        cells.style.backgroundColor = `#${randColor}`;
      })
    );
  }
}

function adjustResolution() {
  colorRandomizer();
  x = prompt("X axis value: ");
  y = prompt("Y axis value: ");
  if (x > 100 || y > 100) {
    x = prompt("Sorry, that number is too big, try x again: ");
    y = prompt("Sorry, that number is too big, try y again: ");
  }
  reset();
  makeGrid(x, y);
}

function reset() {
  cells.forEach((cells) => (cells.style.backgroundColor = "white"));
}

function colorRandomizer() {
  randColor = Math.floor(Math.random() * 16777215).toString(16);
  return randColor;
}

makeGrid(x, y);
console.log(colorRandomizer());
