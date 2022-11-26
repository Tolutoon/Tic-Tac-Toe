// Selecting All "Starting Page" Tags
let startingPage = document.querySelector("#startingPage");
let choose = document.querySelectorAll(".choose");

// Selecting All "Main Page" Tags
let mainPage = document.querySelector("#mainpage");
let showChange = document.querySelector("#showChange");
let boxes = document.querySelectorAll(".boxes");

// Selecting All "Winner Page" Tags
let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let quit = document.querySelector("#quit");

// How can we change turns
// False => X's Turn
// True => O's Turn
let changeTurn = false;

// Select Which You want to be>
// X or O
choose.forEach(chooseNow => {
    chooseNow.addEventListener("click", ()=>{
        if(chooseNow.id === "playerX"){
            changeTurn = false;
            //console.log(changeTurn);
            showChange.style.left = '0px';
        }else{
            changeTurn = true;
            // console.log(changeTurn);
            showChange.style.left = '160px';

        }
        startingPage.style.display = "none";
        mainPage.style.display = "block";
    })
});

boxes.forEach(items => {
    items.addEventListener("click", ()=>{
        // Add "X" Icon if "ChangeTurn" = False
        // Add "O" Icon if "ChangeTurn" = True
        if(changeTurn == false){
            items.innerHTML = `<i class="fa-solid fa-x"></i>`;
            items.id = "X";
            items.style.pointerEvents = "none";
            showChange.style.left = "160px";

            // Change the 'changeTurn' Value False into True
            changeTurn = true;
        } else{
            items.innerHTML = `<i class="fa-regular fa-circle"></i>`;
            items.id = "O";
            items.style.pointerEvents = "none";
            showChange.style.left = "0px"; 

            // Change the 'changeTurn' Value False into True
            changeTurn = false;
        }
        winningFunc();
        drawFunc();
    })
})

// All Possible Winning Combinations
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let winningFunc = ()=>{
    for (let i = 0; i <= 7; i++) {
        let j = winningCombinations[i];
        // console.log(j);

        if(boxes[j[0]].id == "" || boxes[j[1]].id == "" || boxes[j[2]].id == ""){
            continue;
        } else if(boxes[j[0]].id == "X" && boxes[j[1]].id == "X" && boxes[j[2]].id == "X"){
           // console.log("X is the winner");

           winnerName.innerText = `Player X wins the game!`;

           //Adding the winner page and hide the main page
           mainPage.style.display = "none";
           winner.style.display = "block";

        }else if(boxes[j[0]].id == "O" && boxes[j[1]].id == "O" && boxes[j[2]].id == "O"){
            //console.log("O is the winner");  

            winnerName.innerText = `Player O wins the game!`;

            //Adding the winner page and hide the main page
            mainPage.style.display = "none";
            winner.style.display = "block";
    }
    else {
        continue;
    }
}


}

// Match Draw Function
let drawFunc = ()=>{
    if(boxes[0].id != "" && boxes[1].id != "" && 
    boxes[2].id != "" && boxes[3].id != "" &&
    boxes[4].id != "" && boxes[5].id != "" &&
    boxes[6].id != "" && boxes[7].id != "" && boxes[7].id != ""){
        winnerName.innerText = `Match Draw!`;

        //Adding the winner page and hide the main page
        mainPage.style.display = "none";
        winner.style.display = "block"; 
    }
}

// Reset Game
quit.addEventListener("click" , ()=>{
    window.location.reload();
})