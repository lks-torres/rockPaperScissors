const cOptions = ["Rock", "Paper", "Scissors"];

function checkWinner(e) {
    const pInput = e.value;

    const randomNumber = Math.floor(Math.random() * 3);
    const cInput = cOptions[randomNumber];

    document.getElementById("playerMove").src = `./images/${pInput}.svg`;
    document.getElementById("computerMove").src = `./images/${cInput}.svg`;

    const currentMatch = `${pInput} vs ${cInput}`;

    if (pInput === cInput) {
        document.getElementById('result').innerText = `${currentMatch} is a Tie`;
    } else if (pInput === "Rock") {
        if (cInput === "Scissors") {
            document.getElementById('result').innerText = `${currentMatch} = You Win`;
        } else {
            document.getElementById('result').innerText = `${currentMatch} = Computer Wins`;
        }
    } else if (pInput === "Paper") {
        if (cInput === "Rock") {
            document.getElementById('result').innerText = `${currentMatch} = You Win`;
        } else {
            document.getElementById('result').innerText = `${currentMatch} = Computer Wins`;
        }
    } else {
        if (cInput === "Paper") {
            document.getElementById('result').innerText = `${currentMatch} = You Win`;
        } else {
            document.getElementById('result').innerText = `${currentMatch} = Computer Wins`;
        }
    }
}
