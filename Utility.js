class SnakeLadder{
    getRandomNo(input){
        return (Math.floor(Math.random()*input)) + 1;
      }
}

module.exports = new SnakeLadder();