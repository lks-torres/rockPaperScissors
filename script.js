const cOptions = ["Rock", "Paper", "Scissors"];
let pScore = 0;
let cScore = 0;
let plays = 0;

function hide() {
    document.getElementById("display-moves").style.display = "none";

    // Display thank you message
    var thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for playing, feel free to play again!";

	//Thank you message style
    thankYouMessage.style.textAlign = "center";
    thankYouMessage.style.fontWeight = "bold";
    thankYouMessage.style.fontSize = "20px";
	
    document.body.appendChild(thankYouMessage);

    //Creating "Play Again" button
    var playAgainButton = document.createElement("button");

	//Play again button style
    playAgainButton.textContent = "Play Again";
	playAgainButton.style.padding = "25px"
	playAgainButton.style.fontWeight = "bold";
	playAgainButton.style.border =  "1px solid #000000";
	playAgainButton.style.backgroundColor = "Azure";
	playAgainButton.style.borderRadius = "8px";
    playAgainButton.style.margin = "20px auto";

	//Play again function
    playAgainButton.onclick = function() {
        location.reload();
    };
    document.body.appendChild(playAgainButton);
}

function checkWinner(e){ 
		plays++;
		const pInput = e.value;

		const randomNumber = Math.floor(Math.random() * 3);
		const cInput = cOptions[randomNumber];
		console.log({pInput,cInput})

		document.getElementById("playerMove").src = `./images/${pInput}.svg`;
		document.getElementById("computerMove").src = `./images/${cInput}.svg`;

		const currentMatch = `${pInput} vs ${cInput}`;
		

		if (pInput === cInput) {
			document.getElementById('result').innerText = `${currentMatch} is a Tie`;
		} else if (pInput === "Rock") {
			if (cInput === "Scissors") {
				document.getElementById('result').innerText = `${currentMatch} = You Win`;
				pScore++;
			} else {
				document.getElementById('result').innerText = `${currentMatch} = Computer Wins`;
				cScore++;
			}
		} else if (pInput === "Paper") {
			if (cInput === "Rock") {
				document.getElementById('result').innerText = `${currentMatch} = You Win`;
				pScore++;
			} else {
				document.getElementById('result').innerText = `${currentMatch} = Computer Wins`;
				cScore++;
			}
		} else {
			if (cInput === "Paper") {
				document.getElementById('result').innerText = `${currentMatch} = You Win`;
				pScore++;
			} else {
				document.getElementById('result').innerText = `${currentMatch} = Computer Wins`;
				cScore++;
			}
		}
		if(plays === 3){
			console.log({cScore, pScore,plays})
			if(pScore > cScore){
				alert("You Win the game!")
			}
			else if(pScore < cScore){
				alert("Computer Wins the game, try again next time!")
			}
			else{
				alert("is a Tie")
			}
			pScore = 0;
			cScore = 0;
			plays = 0;
			
			if (confirm("Would you like to play again?") === true) {
			  alert("Let's play again!");
			} else {
				hide();
			}
		}
	}