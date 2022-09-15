let w = 0;
let l = 0;
let d = 0;

// Rolls random number
function roll (x,y) {
    return Math.floor(Math.random()*(y - x + 1) + x)
}

// Makes computer make a random roll
function computerRoll() {
    let opponent = roll (0,2)
    let opponentRoll = "R"
    let opponentRolls = ["R", "P", "S"]

    for (x in opponentRolls) {
        if (x == opponent){
            opponentRoll = opponentRolls[x]
            return opponentRoll
        }
    }
}

// Main Code for the Game
function game () {
    alert ("Hello! Welcome to Rock Paper Scissors!")

    game_active = confirm ("Would you like to play?")
    while (game_active){
        let player = prompt("Enter R, P, or S to play against the computer")

        if (player === null){
            alert("Understandable, have a nice day!")
        }

        player = player.toUpperCase() //Capitalizes Input in case user types in lower case
        if (player != "R" && player != "P" && player != "S"){
            alert("Your input was invalid, please try again") //Informs user if they did not type in r, p, or s
        }

        let rival = computerRoll()

        if (player === rival){
            alert("The computer played " + rival);
            alert("You tied with the computer");
            d += 1;

        } else if (player === "R" && rival === "P"){
            alert("The computer played " + rival);
            alert("You lost to the computer");
            l += 1;
        } else if (player === "R" && rival === "S"){
            alert("The computer played " + rival);
            alert("You beat the computer");
            w += 1;

        } else if (player === "S" && rival === "R"){
            alert("The computer played " + rival);
            alert("You lost to the computer");
            l += 1;
        } else if (player === "S" && rival === "P"){
            alert("The computer played " + rival);
            alert("You beat the computer");
            w += 1;

        } else if (player === "P" && rival === "S"){
            alert("The computer played " + rival);
            alert("You lost to the computer");
            l += 1;
        } else if (player === "P" && rival === "R"){
            alert("The computer played " + rival);
            alert("You beat the computer");
            w += 1;

        } else{
            alert("Something went wrong, please try again"); //Redundancy in case something breaks in the code, or the user input is invalid
        }
        
        alert("Here are your current records: \n Wins = " + w + ",\n Loses = "+ l + ",\n Draws = "+ d)
        game_active = (confirm("Play Again?"))
    }

    if (game_active == false){
        alert("Understandable, have a nice day!")
    }
}

game()