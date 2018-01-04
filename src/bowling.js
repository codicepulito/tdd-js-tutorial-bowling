function Bowling () {}

Bowling.prototype = {
  /**
  * Calculates the score of the game by analyzing every frame.
  * @param {array} shots Array composed of 10 elements, each of two shots.
  * @return {number} Match score
  */
  calculateScore: function (shots) {
    var me = this
    var score = 0
        
    shots.push([0,0])    
    for (var index = 0; index < 10; index++) {
      var shot = shots[index]   
      var isStrike = me.isStrike(shot)
      var isSpare = me.isSpare(shot)
                  
      if (isStrike) {
        score += 10 + me.calculateStrikeBonus(shots, index)
      } else if (isSpare) {
        score += 10 + me.calculateSpareBonus(shots, index)
      } else {
        score += me.calcolaPuntiFrame(shot, index)
      }      
    }

    return score
  },

 /**
 * Calculate the bonus for spare
 * @param {array} shots Array composed of 10 elements, each of two shots.
 * @param {number} index Frame index
 * @returns {number} Bonus value
 */
  calculateSpareBonus: function(shots, index) {
    if (index === 9) {
      return shots[index][2]
    } else {
      return shots[index + 1][0]
    }
  },
  
 /**
 * Calculate the bonus for Strike
 * @param {array} shots Array composed of 10 elements, each of two shots.
 * @param {number} index Frame index
 * @returns {number} Bonus value
 */
  calculateStrikeBonus: function(shots, index) {
    var shotNext = shots[index + 1] 
    var bonus = 0
            
    bonus = this.calcolaPuntiFrame(shotNext, index+1) 
    if (this.isStrike(shotNext)) { 
      bonus = 10 + shots[index+2][0] 
    }
    if (index == 8) {
      bonus = 10 + shots[index+1][0] 
    }
    if (index == 9) {
      bonus = this.calcolaPuntiFrame(shots[index], index) 
    }        
    return bonus
  },

  calcolaPuntiFrame: function(shot, index) {
    var punteggio =  shot[0]
    if (shot[1]) {
      punteggio += shot[1]
    }   
    return punteggio
  },
  /**
  * Checking whether a frame is a Spare.
  * Is a Spare when the sum of the two shots results in 10.
  * @param {array} shot Array with the results of the two shots
  * @return {boolean} True if it is a spare false otherwise
  */
  isSpare: function (shot) {
    return ((shot[0] + shot[1]) === 10)
  },

  /**
  * Checking whether a frame is a Strike.
  * Is a Strike when the first shot all 10 pins are knocked down.
  * @param {array} shot Array with the results of the two shots
  * @return {boolean} True if it is a Strike false otherwise
  */
  isStrike: function (shot) {
    return (shot[0] === 10)
  }
}
