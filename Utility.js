let StartingPosition = 0;
const WinningPosition = 100;
let count = 0;
let throwDice;
let option;

class SnakeLadder {

    getRandomNo = (input) => {
        return (Math.floor(Math.random() * input)) + 1;
    }

    getWinResult = () => {
        while (StartingPosition != WinningPosition) {
            throwDice = this.getRandomNo(6);
            option = this.getRandomNo(3);
            switch (option) {
                case 1:
                    StartingPosition = this.getSnakeMove();
                    count++;

                case 2:
                    this.getFoulMove();
                    count++;

                case 3:
                    StartingPosition = this.getLadderMove();
                    count++;
            }
        }
        console.log("TOTAL NO OF DICE PLAYED==>" + count)
    }

    getSnakeMove = () => {
        console.log("YOU GOT==>" + throwDice)
        console.log("OOPS.. YOU STEP ON SNAKE")
        StartingPosition = StartingPosition - throwDice;
        if (StartingPosition < 0)
            StartingPosition = StartingPosition + throwDice;
        console.log("YOUR CURRENT POSITION==>" + StartingPosition)
        console.log();
        return StartingPosition;
    }

    getFoulMove = () => {
        console.log("YOU GOT==>" + throwDice)
        console.log("OOPS...YOU MADE A FOUL")
        console.log("YOU WILL BE IN SAME POSITION")
        console.log();
    }

    getLadderMove = () => {
        console.log("YOU GOT==>" + throwDice)
        console.log("CONGRATS... YOU STEP ON LADDER")
        StartingPosition = StartingPosition + throwDice;
        if (StartingPosition > WinningPosition) {
            StartingPosition = StartingPosition - throwDice;
            console.log("OOPS...YOU CANT EXCEED 100")
        }
        console.log("YOUR CURRENT POSITION IS " + StartingPosition)
        console.log();
        return StartingPosition;
    }
}


module.exports = new SnakeLadder();