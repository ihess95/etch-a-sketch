const container = document.querySelector("div.bodyContainer");
const button = document.createElement("button");
// button.textContent = "Adjust Size";

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
}

makeGrid(16, 16);
