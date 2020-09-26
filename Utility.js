let PlayerOneStartingPosition = 0;
let PlayerTwoStartingPositin = 0
const WinningPosition = 100;
let PlayerOneCount = 0;
let PlayerTwoCount = 0;
let throwDice;
let option;
let turn = 0;

class SnakeLadder {   
    getRandomNo = (input) => {
        return (Math.floor(Math.random() * input)) + 1;
    }

    getSnakeMove = (position) => {
        console.log("YOU GOT==>" + throwDice)
        console.log("OOPS.. YOU STEP ON SNAKE")
        position = position - throwDice;
        if (position < 0)
        position = position + throwDice;
        console.log("YOUR CURRENT POSITION==>" + position)
        console.log();
        return position;
    }

    getFoulMove = (position) => {
        console.log("YOU GOT==>" + throwDice)
        console.log("OOPS...YOU MADE A FOUL")
        console.log("YOU WILL BE IN SAME POSITION")
        console.log("YOUR CURRENT POSITION IS "+position)
        console.log();
        return position;
    }

    getLadderMove = (position) => {
        console.log("YOU GOT==>" + throwDice)
        console.log("CONGRATS... YOU STEP ON LADDER")
        position = position + throwDice;
        if (position > WinningPosition) {
            position = position - throwDice;
            console.log("OOPS...YOU CANT EXCEED "+WinningPosition)
        }
        console.log("YOUR CURRENT POSITION IS " + position)
        console.log();
        return position;
    }

    getDoublePlayerResult = () => {

        while (PlayerOneStartingPosition != WinningPosition && PlayerTwoStartingPositin != WinningPosition) {
            throwDice = this.getRandomNo(6);
            option = this.getRandomNo(3);            
            if (turn % 2 == 0) {
                turn++;
                console.log("PLAYER 1 TURN ")
                switch (option) {
                    case 1:
                        PlayerOneStartingPosition = this.getSnakeMove(PlayerOneStartingPosition);
                        PlayerOneCount++;                     
                        break;

                    case 2:                       
                        PlayerOneStartingPosition = this.getFoulMove(PlayerOneStartingPosition);
                        PlayerOneCount++;                     
                        break;

                    case 3:                      
                        PlayerOneStartingPosition = this.getLadderMove(PlayerOneStartingPosition);
                        PlayerOneCount++;                       
                        break;
                }

                if(PlayerOneStartingPosition == WinningPosition)
                console.log("CONGRATS...PLAYER 1 WON THE GAME")
            }
            else {
                turn++;
                console.log("PLAYER 2 TURN ")
                switch (option) {
                    case 1:                       
                       PlayerTwoStartingPositin = this.getSnakeMove(PlayerTwoStartingPositin);
                        PlayerTwoCount++;                        
                        break;

                    case 2:                        
                        PlayerTwoStartingPositin = this.getFoulMove(PlayerTwoStartingPositin);
                        PlayerTwoCount++;                      
                        break;
                    case 3:                      
                        PlayerTwoStartingPositin = this.getLadderMove(PlayerTwoStartingPositin);
                        PlayerTwoCount++;                     
                        break;
                }
                if(PlayerTwoStartingPositin == WinningPosition)
                console.log("CONGRATS...PLAYER 2 WON THE GAME")
            }
        }
        console.log("TOTAL NO OF DICE PLAYED BY PLAYER 1 ==>" + PlayerOneCount);
        console.log("TOTAL NO OF DICE PLAYED BY PLAYER 2 ==>" + PlayerTwoCount)
    }




   

   

   
}


module.exports = new SnakeLadder();