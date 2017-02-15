function Bowling() {}

Bowling.prototype = {
    calculateScore: function(shots) {
      var me = this;
      var score = 0;
      var firstNextShot = 0;
      var secondNextShot = 0;
      var lastShot = 0;

      shots.push([0]);

      shots.forEach(function(shot, index) {
        if (index===10) { return; }
        if (index===9) {
          if (me.isSpare(shot) || me.isStrike(shot)) {
              firstNextShot = shot[2];
              if (me.isSecondoStrike(shot)) {
                secondNextShot = 10;
              } else {
                secondNextShot = 0;
              }
          } else {
            firstNextShot = 0;
            secondNextShot = 0;
          }
        } else {
          firstNextShot = shots[index+1][0];
          secondNextShot = shots[index+1][1];
        }

        if (me.isStrike(shot)) {
          //console.log(index+1);
          if (me.isStrike(shots[index+1])) {
            if (index===8) {
                lastShot = shots[index+1][2];
            } else {
                lastShot = shots[index+2][0];
            }
            score += shot[0] + firstNextShot + lastShot;
          } else {
            score += shot[0] + firstNextShot + secondNextShot;
          }
        } else if (me.isSpare(shot)) {
          score += shot[0] + shot[1] + firstNextShot;
        } else {
          score += shot[0] + shot[1];
        }
      });

      return score;
    },
    
    isSpare: function(shot) {
      return ((shot[0] + shot[1]) === 10);
    },
    
    isStrike: function(shot) {
      return (shot[0] === 10);
    },
    
    isSecondoStrike: function(shot) {
      return (shot[1] === 10);
    }
};
