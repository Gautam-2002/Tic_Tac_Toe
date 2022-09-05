console.log("let's play");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

let turn = "X";
let isgameOver = false;
//Function to change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxText");
  let wins = [
    //winning combinations:
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText = `${
        turn === "X" ? "P2" : "P1"
      } has WON`;
      isgameOver = true;
      document.getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};
// music.play();
//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      ting.play();
      checkWin();
      if (!isgameOver) {
        document.querySelector(".info").innerText = `Turn for ${
          turn === "X" ? "P1" : "P2"
        }`;
      }
    }
  });
});

// code for newgame
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxText");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameOver = false;
  document.querySelector(".info").innerText = `Turn for ${
    turn === "X" ? "P1" : "P2"
  }`;
  document.getElementsByTagName("img")[0].style.width = "0px";
});
