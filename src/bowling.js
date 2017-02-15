var Bowling = {
  calcolateScore: function(shots) {
    var score = 0;
    var me = this;

    shots.forEach(function(shot, index) {
        if (me.isStrike(shot)) {
            if (me.isStrike(shots[index+1])) {
                score += shot[0] + shots[index+1][0] + shots[index+2][0];
            } else {
                score += shot[0] + shots[index+1][0] + shots[index+1][1];
            }
        } else if (me.isSpare(shot)) {
            score += shot[0] + shot[1] + shots[index+1][0];
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