var Bowling = {
  calcolateScore: function(shots) {
    var score = 0;

    shots.forEach(function(shot, index) {
      if (shot[0] == 10) {
        if (shots[index+1][0] == 10) {
            score += shot[0] + shots[index+1][0] + shots[index+2][0];
        } else {
            score += shot[0] + shots[index+1][0] + shots[index+1][1];
        }
      } else if ((shot[0] + shot[1]) == 10) {
        score += shot[0] + shot[1] + shots[index+1][0];
      } else {
          score += shot[0] + shot[1];
      }
    });
    
    return score; 
  }
};