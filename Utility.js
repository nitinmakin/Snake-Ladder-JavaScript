class SnakeLadder{
    getDiceRandomNo(){
        return (Math.floor(Math.random()*6)) + 1;
      }
      getOption(){
          return (Math.floor(Math.random() * 3)) +1;
      }
}

module.exports = new SnakeLadder();