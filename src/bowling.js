var Bowling = {
  calcolateScore: function(shots) {
    var score = 0;
        
    shots.forEach(function(shots, index) {
        score += shots[0] + shots[1];
    });

    return score; 
  }
};