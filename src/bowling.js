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
    
    shots.push([0])
    for (var index = 0; index < 10; index++) {
      var shot = shots[index]            
      score += shot[0] + me.calculateSecondComponent(shots, index)
    }

    return score
  },

/**
 * Calculate the second component of the score for each frame
 * @param {type} shots
 * @param {type} index
 * @returns {Number} Value of the second component of score
 */
  calculateSecondComponent: function(shots, index) {
    var secondScore = 0
    var me = this
    var shot = shots[index]
    var shotNext = shots[index + 1] 
    var firstNextShot = me.calculateFirstNextShot(shots, index)
    if (me.isStrike(shot) && (me.isStrike(shotNext)) && (index === 8)) {
      secondScore = firstNextShot + shotNext[2]
    } else if (me.isStrike(shot) && (me.isStrike(shotNext))) {
      secondScore = firstNextShot + shots[index + 2][0]
    } else if (me.isStrike(shot)) {
      secondScore = firstNextShot + me.calculateSecondNextShot(shots, index)
    } else if (me.isSpare(shot)) {
      secondScore = shot[1] + firstNextShot
    } else {
      secondScore = shot[1]
    }
    return secondScore;
  },
  
  /**
   * Calculates the score of the second shot in the next frame.
   * @param {array} shots Array composed of 10 elements, each of two shots.
   * @param {number} index indicating the frame in which you are located
   * @return {number} score for the second shot of the next frame.
   */
  calculateSecondNextShot: function (shots, index) {
    var me = this
    var score = 0
    var shot = shots[index]
    if (
        (index === 9) && 
        (me.isSpare(shot) || me.isStrike(shot)) && 
        (me.isSecondoStrike(shot))
        ) {      
      score = 10               
    } else {
      score = shots[index + 1][1]
    }
    return score
  },

  /**
   * Calculates the score of the first shot in the next frame.
   * @param {array} shots Array composed of 10 elements, each of two shots.
   * @param {number} index indicating the frame in which you are located
   * @return {number} score for the first shot of the next frame.
   */
  calculateFirstNextShot: function (shots, index) {
    var me = this
    var score = 0
    var shot = shots[index]
    if (index === 9) {
      if (me.isSpare(shot) || me.isStrike(shot)) {
        score = shot[2]
      }
    } else {
      score = shots[index + 1][0]
    }
    return score
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
  },

  /**
  * Check if the last shot of the last frame is a strike.
  * @param {array} shot Array with the results of the two shots
  * @return {boolean} True if it is a Strike false otherwise
  */
  isSecondoStrike: function (shot) {
    return (shot[1] === 10)
  }
}
