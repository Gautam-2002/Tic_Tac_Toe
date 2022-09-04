console.log("let's play")
let music= new Audio("music.mp3")
let ting= new Audio("ting.mp3")
let gameOver= new Audio("gameover.mp3")

let turn="X"

//Function to change turn
const changeTurn = ()=>{
    return turn === "X"?"0" : "X"
}

//Function to check for a win
const checkWin = ()=>{

}

//Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxText=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
        }
    })
})