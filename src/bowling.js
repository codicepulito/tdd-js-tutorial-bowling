var Bowling = {
  calcolateScore: function(shots) {
    var punteggio = 0;
    var me = this;

    shots.forEach(function(shot, index) {
        if (me.isStrike(shot)) {
            if (me.isStrike(shots[index+1])) {
                punteggio += shot[0] + shots[index+1][0] + shots[index+2][0];
            } else {
                punteggio += shot[0] + shots[index+1][0] + shots[index+1][1];
            }
        } else if (me.isSpare(shot)) {
            punteggio += shot[0] + shot[1] + shots[index+1][0];
        } else {
            punteggio += shot[0] + shot[1];
        }
    });

    return punteggio;
  },
  
  isSpare: function(shot) {
    return ((shot[0] + shot[1]) === 10);
  },
    
  isStrike: function(shot) {
    return (shot[0] === 10);
  }
};