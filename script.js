const squares = document.querySelectorAll(".grid div")
const result = document.querySelector("#result")
const dCurrentPlayer = document.querySelector("#current-player")
let currentPlayer = 1

function checkBoard(){
    
}
for (let i = 0; i<squares.length;i++){
    squares[i].onclick=()=>{
        if(squares[i+7].classList.contains("taken")){
            if (currentPlayer==1){
                squares[i].classList.add("taken")
                squares[i].classList.add("player-one")
                currentPlayer=2
                dCurrentPlayer.innerHTML =currentPlayer
            }
            if (currentPlayer==2){
                squares[i].classList.add("taken")
                squares[i].classList.add("player-two")
                currentPlayer=1
                dCurrentPlayer.innerHTML =currentPlayer
            }
            else{alert("cant go here");checkBoard()}
            
        }
    }
}