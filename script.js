let numberOfSquare = 7;

addEventListener("DOMContentLoaded", (event) => {
  const grid = document.querySelector(".grid");

  // Use a nested for loop to create the grid cells
  for (let i = 0; i < numberOfSquare * numberOfSquare; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = 100 / numberOfSquare + "%";
    cell.style.height = 100 / numberOfSquare + "%";

    grid.appendChild(cell);

    // Add event listener to each cell
    cell.addEventListener("mouseover", (event) => {
      event.target.classList.add("hover");
    });
  }

  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.classList.remove("hover");
    });

    // Optional: Prompt for new grid size
    let newSize = prompt("Enter new grid size (1-100)");
    if (newSize !== null && newSize !== "") {
      newSize = parseInt(newSize);
      if (!isNaN(newSize) && newSize >= 1 && newSize <= 100) {
        numberOfSquare = newSize;
        resetGrid();
      } else {
        alert("Invalid input. Please enter a number between 1 and 100.");
      }
    }
  });

  function resetGrid() {
    grid.innerHTML = ""; // Clear the grid

    for (let i = 0; i < numberOfSquare * numberOfSquare; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = 100 / numberOfSquare + "%";
      cell.style.height = 100 / numberOfSquare + "%";

      grid.appendChild(cell);

      // Add event listener to each cell
      cell.addEventListener("mouseover", (event) => {
        event.target.classList.add("hover");
      });
    }
  }
});
