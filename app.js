let whichPlayer = document.querySelector("#whichPlayer");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let arr = ["1","2","3","4","5","6","7","8","9"];
let currentPL = 1;

function Reset(){
    currentPL = 1;
    arr = ["1","2","3","4","5","6","7","8","9"];
    whichPlayer.textContent = "Player: 1";
    b1.textContent = "1";
    b2.textContent = "2";
    b3.textContent = "3";
    b4.textContent = "4";
    b5.textContent = "5";
    b6.textContent = "6";
    b7.textContent = "7";
    b8.textContent = "8";
    b9.textContent = "9";
}

function checkPL1(){
    if(arr[0] === "O" && arr[1] === "O" && arr[2] === "O"){
        whichPlayer.textContent = "Player 1 Won!";
    }
    if(arr[3] === "O" && arr[4] === "O" && arr[5] === "O"){
        whichPlayer.textContent = "Player 1 Won!";
    }
    if(arr[6] === "O" && arr[7] === "O" && arr[8] === "O"){
        whichPlayer.textContent = "Player 1 Won!";
    }
    if(arr[0] === "O" && arr[3] === "O" && arr[6] === "O"){
        whichPlayer.textContent = "Player 1 Won!";
    }
    if(arr[1] === "O" && arr[4] === "O" && arr[7] === "O"){
        whichPlayer.textContent = "Player 1 Won!";
    }
    if(arr[2] === "O" && arr[5] === "O" && arr[8] === "O"){
        whichPlayer.textContent = "Player 1 Won!";
    }
    if(arr[0] === "O" && arr[4] === "O" && arr[8] === "O"){
        whichPlayer.textContent = "Player 1 Won!";
    }
    if(arr[6] === "O" && arr[4] === "O" && arr[2] === "O"){
        whichPlayer.textContent = "Player 1 Won!";
    }
    if(whichPlayer.textContent !== "Player 1 Won!"){
        currentPL === 1 ? whichPlayer.textContent = "Player: 2" : whichPlayer.textContent = "Player: 1";
        currentPL === 1 ? currentPL = 2 : currentPL = 1;
    }
}
function checkPL2(){
    if(arr[0] === "X" && arr[1] === "X" && arr[2] === "X"){
        whichPlayer.textContent = "Player 2 Won!";
    }
    if(arr[3] === "X" && arr[4] === "X" && arr[5] === "X"){
        whichPlayer.textContent = "Player 2 Won!";
    }
    if(arr[6] === "X" && arr[7] === "X" && arr[8] === "X"){
        whichPlayer.textContent = "Player 2 Won!";
    }
    if(arr[0] === "X" && arr[3] === "X" && arr[6] === "X"){
        whichPlayer.textContent = "Player 2 Won!";
    }
    if(arr[1] === "X" && arr[4] === "X" && arr[7] === "X"){
        whichPlayer.textContent = "Player 2 Won!";
    }
    if(arr[2] === "X" && arr[5] === "X" && arr[8] === "X"){
        whichPlayer.textContent = "Player 2 Won!";
    }
    if(arr[0] === "X" && arr[4] === "X" && arr[8] === "X"){
        whichPlayer.textContent = "Player 2 Won!";
    }
    if(arr[6] === "X" && arr[4] === "X" && arr[2] === "X"){
        whichPlayer.textContent = "Player 2 Won!";
    }
    if(whichPlayer.textContent !== "Player 2 Won!"){
        currentPL === 1 ? whichPlayer.textContent = "Player: 2" : whichPlayer.textContent = "Player: 1";
        currentPL === 1 ? currentPL = 2 : currentPL = 1;
    }
}

function box1(){
    if(b1.textContent === "X" || b1.textContent === "O"){
        return;
    }else{
        currentPL === 1 ? b1.textContent = "O" : b1.textContent = "X";
        currentPL === 1 ? arr[0] = "O" : arr[0] = "X";
        currentPL === 1 ? checkPL1() : checkPL2();
    }
}
function box2(){
    if(b2.textContent === "X" || b2.textContent === "O"){
        return;
    }else{
        currentPL === 1 ? b2.textContent = "O" : b2.textContent = "X";
        currentPL === 1 ? arr[1] = "O" : arr[1] = "X";
        currentPL === 1 ? checkPL1() : checkPL2();
    }
}
function box3(){
    if(b3.textContent === "X" || b3.textContent === "O"){
        return;
    }else{
        currentPL === 1 ? b3.textContent = "O" : b3.textContent = "X";
        currentPL === 1 ? arr[2] = "O" : arr[2] = "X";
        currentPL === 1 ? checkPL1() : checkPL2();
    }
}
function box4(){
    if(b4.textContent === "X" || b4.textContent === "O"){
        return;
    }else{
        currentPL === 1 ? b4.textContent = "O" : b4.textContent = "X";
        currentPL === 1 ? arr[3] = "O" : arr[3] = "X";
        currentPL === 1 ? checkPL1() : checkPL2();
    }
}
function box5(){
    if(b5.textContent === "X" || b5.textContent === "O"){
        return;
    }else{
        currentPL === 1 ? b5.textContent = "O" : b5.textContent = "X";
        currentPL === 1 ? arr[4] = "O" : arr[4] = "X";
        currentPL === 1 ? checkPL1() : checkPL2();
    }
}
function box6(){
    if(b6.textContent === "X" || b6.textContent === "O"){
        return;
    }else{
        currentPL === 1 ? b6.textContent = "O" : b6.textContent = "X";
        currentPL === 1 ? arr[5] = "O" : arr[5] = "X";
        currentPL === 1 ? checkPL1() : checkPL2();
    }
}
function box7(){
    if(b7.textContent === "X" || b7.textContent === "O"){
        return;
    }else{
        currentPL === 1 ? b7.textContent = "O" : b7.textContent = "X";
        currentPL === 1 ? arr[6] = "O" : arr[6] = "X";
        currentPL === 1 ? checkPL1() : checkPL2();
    }
}
function box8(){
    if(b8.textContent === "X" || b8.textContent === "O"){
        return;
    }else{
        currentPL === 1 ? b8.textContent = "O" : b8.textContent = "X";
        currentPL === 1 ? arr[7] = "O" : arr[7] = "X";
        currentPL === 1 ? checkPL1() : checkPL2();
    }
}
function box9(){
    if(b9.textContent === "X" || b9.textContent === "O"){
        return;
    }else{
        currentPL === 1 ? b9.textContent = "O" : b9.textContent = "X";
        currentPL === 1 ? arr[8] = "O" : arr[8] = "X";
        currentPL === 1 ? checkPL1() : checkPL2();
    }
}
