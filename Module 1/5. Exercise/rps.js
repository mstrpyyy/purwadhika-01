let playGame;

do {
    playGame = confirm("Let's play rock, paper, scissor!");

    if (playGame) {
        let player = prompt("Please enter rock, paper, or scissor");

        function rps(player) {
            let playerAnswer = player.toLowerCase();
            let computer = Math.floor(Math.random() * 3 + 1);
            let computerAnswer = computer === 1 ? "rock" 
                : computer === 2 ? "paper" 
                : "scissor";
            if (playerAnswer === computerAnswer) {
                return "It's a draw!";
            } else if (playerAnswer === "rock" && computerAnswer === "scissor") {
                return "You win! Rock beats scissor.";
            } else if (playerAnswer === "rock" && computerAnswer === "paper") {
                return "Computer wins! Paper beats rock.";
            } else if (playerAnswer === "paper" && computerAnswer === "rock") {
                return "You win! Paper beats rock.";
            } else if (playerAnswer === "paper" && computerAnswer === "scissor") {
                return "Computer wins! Scissor beats paper.";
            } else if (playerAnswer === "scissor" && computerAnswer === "paper") {
                return "You win! Scissor beats paper.";
            } else {
                return "Computer wins! Rock beats scissor.";
            } 
        }

        let result = rps(player);
        alert(result);

        // Ask if the user wants to play again
        playGame = confirm("Do you want to play again?");
    } else {
        alert("Maybe next time. Goodbye!");
    }
} while (playGame);
