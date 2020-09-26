class SnakeLadder{
    getDiceRandomNo(){
        var startPosition = 0;
        return (Math.floor(Math.random()*6)) + 1;
      }
}

module.exports = new SnakeLadder();