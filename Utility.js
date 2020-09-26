let StartingPosition = 0;
const WinningPosition = 100;
class SnakeLadder {

    getRandomNo = (input) => {
        return (Math.floor(Math.random() * input)) + 1;
    }

    getWinResult = () => {
        while (StartingPosition != WinningPosition) {
            let throwDice = this.getRandomNo(6);
            let option = this.getRandomNo(3);
            switch (option) {
                case 1:
                    console.log("YOU GOT==>" + throwDice)
                    console.log("OOPS.. YOU STEP ON SNAKE")
                    StartingPosition = StartingPosition - throwDice;
                    if(StartingPosition < 0)
                    StartingPosition = StartingPosition + throwDice;
                    console.log("YOUR CURRENT POSITION==>" + StartingPosition)
                    console.log();

                case 2:
                    console.log("YOU GOT==>" + throwDice)
                    console.log("OOPS...YOU MADE A FOUL")
                    console.log("YOU WILL BE IN SAME POSITION")
                    console.log();

                case 3:
                    console.log("YOU GOT==>" + throwDice)
                    console.log("CONGRATS... YOU STEP ON LADDER")
                    StartingPosition = StartingPosition + throwDice;
                    if(StartingPosition > WinningPosition)
                    StartingPosition = StartingPosition - throwDice;
                    console.log("YOUR CURRENT POSITION IS " + StartingPosition)
                    console.log();
            }
        }
    }
}


module.exports = new SnakeLadder();