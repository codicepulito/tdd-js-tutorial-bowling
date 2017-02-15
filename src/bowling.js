function Bowling() {}

Bowling.prototype = {
  calcolateScore: function(shots) {
    var me = this;
    var score = 0;
    var firstNextShoto = 0;
    var secondNextShot = 0;

    shots.forEach(function(shot, index) {
      if (index===9) {
        firstNextShoto = shot[2];
        secondNextShot = 0;
      } else {
        firstNextShoto = shots[index+1][0];
        secondNextShot = shots[index+1][1];
      }

      if (me.isStrike(shot)) {
        if (me.isStrike(shots[index+1])) {
          score += shot[0] + firstNextShoto + shots[index+2][0];
        } else {
          score += shot[0] + firstNextShoto + secondNextShot;
        }
      } else if (me.isSpare(shot)) {
        score += shot[0] + shot[1] + firstNextShoto;
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
  }
};
