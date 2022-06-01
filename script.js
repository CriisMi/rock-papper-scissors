
/* generate rock paper or scissors*/

function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    if (i == 0) {
        return 'Rock';
    } else if ( i == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

/* decides who won from two paper scissors rock values*/

function playRound(playerSelection, computerSelection) {
    let upperPlayer = playerSelection.toUpperCase();
    let upperComputer = computerSelection.toUpperCase();

    if (upperPlayer == upperComputer) {
        return 'It\'s a tie';
    } else if (upperPlayer == 'ROCK' && upperComputer == 'SCISSORS' || upperPlayer == 'SCISSORS' && upperComputer == 'PAPER' || upperPlayer == 'PAPER' && upperComputer == 'ROCK') {    
        return 'You won!';
    } else {
        return 'You lost';
    }
}

/* plays a game of 3 rounds and decides who wins the game */

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}!`)
        
        let player = prompt('Choose: ');
        console.log(`You chose ${player}`);

        let computer = computerPlay();
        console.log(`The computer chose ${computer}`);

        let result = playRound(player, computer);
        console.log(result);
        if (result == 'You won!') {
            playerPoints++;
        } else if (result == 'You lost') {
            computerPoints++;
        }
        console.log(`You: ${playerPoints} - Computer: ${computerPoints}`);
    }

    if (playerPoints > computerPoints) {
        console.log(`You won the game!`)
    } else if (computerPoints > playerPoints) {
        console.log('The computer won the game')
    } else {
        console.log('This game is a tie');
    }
}

game();
