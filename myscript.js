const container = document.querySelector("div.bodyContainer");
const button = document.createElement("button");
// container.style.width = "500px";
// container.style.height = "auto";
// button.textContent = "Adjust Size";

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    const cells = document.querySelectorAll("div.grid-item");
    cells.forEach((cells) =>
      cells.addEventListener("mouseover", () => {
        cells.style.backgroundColor = "gray";
      })
    );
  }
}

makeGrid(20, 20);
