const board = document.getElementById("board");

const pieces = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜", "♟️", "♟️", "♟️", "♟️"];

function createBoard() {
  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    const row = Math.floor(i / 8);
    const col = i % 8;
    if ((row + col) % 2 === 0) {
      square.classList.add("light");
    } else {
      square.classList.add("dark");
    }

    
    if (Math.random() < 0.2) {
      const piece = document.createElement("span");
      piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
      piece.addEventListener("click", movePiece);
      square.appendChild(piece);
    }

    board.appendChild(square);
  }
}

function movePiece(event) {
  const piece = event.target;
  const squares = document.querySelectorAll(".square");
  const randomSquare = squares[Math.floor(Math.random() * squares.length)];

  if (randomSquare.children.length === 0) {
    randomSquare.appendChild(piece);
  }
}

createBoard();