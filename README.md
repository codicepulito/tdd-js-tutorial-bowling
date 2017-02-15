#Javascript Test Drive Development Tutorial #
[![Build Status](https://travis-ci.org/gianlucaciarcelluti/tdd-js-tutorial-bowling.svg?branch=master)](https://travis-ci.org/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![codecov](https://codecov.io/gh/gianlucaciarcelluti/tdd-js-tutorial-bowling/branch/master/graph/badge.svg)](https://codecov.io/gh/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Code Climate](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling/badges/gpa.svg)](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![Issue Count](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling/badges/issue_count.svg)](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling)


This tutorial has the objective to illustrate the approach of TDD oriented to an implementation for successive approximations that leads the developer to focus on the problems as they arise.

Even today, many developers are used to carry out a comprehensive analysis of the development of a project at last to find a working solution to implement; this approach poses great difficulties when the problem to be solved is complex, in particular by discouraging people who have not had the opportunity to experience appropriate experience.

Through the use of the TDD method, the solution is built in stages and incremental approximations that make it much more simple and within the reach of all the management of a complex problem.

Git tags:

- step1: initial project state
- step2: game with all the shots that hit a pin
- step3: game with the first frame in Spare and all the others that hit a pin
- step4: game with the first frame in Strike and all the others that hit a pin
- step5: game with the first two frames in Strike and all the others that hit a pin
- step6: refactoring
- step7: game all the frames in Spare and final shot that hit a pin
- step8: game all the frames in strike

The practice of TDD takes place in three distinct phases: Red Flag, Green Flag and Refactoring.
The first phase (Red Flag) requires that the test wrote fails his first run, ensuring that the test itself was well written.

The second phase requires writing code you are testing, making sure to write what is necessary to perform the test successfully

In the third and final phase, we can focus on the analysis of the code you just wrote, verifying the possibility to improve its readability and elegance.

### Project Creation
Clone the project through the command
```
git clone https://github.com/gianlucaciarcelluti/tdd-js-tutorial-bowling
```
then move to the newly created folder and download the necessary libraries with the command
```
npm install
```

### Step1: Start of the project
Position yourself in the initial project status by running the following command
```
git checkout step1
```
We start with an initial test to verify that all the done vacuum shots give back as a result zero points by writing the following code in the test file / bowlingTest.js
```
describe("bowling", function() {

    it("game with all the empty shots", function() {
        var shots = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];        
        expect(Bowling.calcolateScore(shots)).toEqual(0);
    });    
});
```
then we write the following function to be tested within the src / file bowling.js
```
function Bowling () {}

Bowling.prototype = {
  calcolateScore: function (shots) {
    return
  }
}
```
launching the test with the following command should get a test failure as follows
```
tdd-js-tutorial-bowling: ./node_modules/.bin/karma start
04 01 2017 00:23:13.986:WARN [karma]: No captured browser, open http://localhost:9876/
04 01 2017 00:23:14.007:INFO [karma]: Karma v1.3.0 server started at http://localhost:9876/
04 01 2017 00:23:14.008:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
04 01 2017 00:23:14.034:INFO [launcher]: Starting browser PhantomJS
04 01 2017 00:23:15.353:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket /#wIPf20S9JFX4UjEhAAAA with id 80746822
PhantomJS 2.1.1 (Mac OS X 0.0.0) bowling partita con tutti i tiri a vuoto FAILED
	Expected null to equal 0.
	test/bowlingTest.js:5:55
	loaded@http://localhost:9876/context.js:151:17
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 1 of 1 (1 FAILED) ERROR (0.007 secs / 0.004 secs)
```
at this point we move to phase 2 writing
```
function Bowling () {}

Bowling.prototype = {
  calcolaPunteggio: function (tiri) {
    return 0
  }
}
```
re-launching the test, this time we should get its running successfully
```
tdd-js-tutorial-bowling: ./node_modules/.bin/karma start
04 01 2017 00:25:53.304:WARN [karma]: No captured browser, open http://localhost:9876/
04 01 2017 00:25:53.323:INFO [karma]: Karma v1.3.0 server started at http://localhost:9876/
04 01 2017 00:25:53.324:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
04 01 2017 00:25:53.387:INFO [launcher]: Starting browser PhantomJS
04 01 2017 00:25:54.648:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket /#flyhaVqaAERUUOljAAAA with id 80882250
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 1 of 1 SUCCESS (0.007 secs / 0.004 secs)
```

### Step2: game with all the shots that hit a pin
Position yourself in the next stage of the project by running the following command
```
git checkout step2
```
We continue with the addition of the test in the test file / bowlingTest.js to verify that all the done shots hit a pin and that the end result is 20 points
```
  it("game with all the shots that hit a pin", function() {
    var shots = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calcolateScore(shots)).toEqual(20);
  });
```
therefore, our function will succeed only to meet the first test and to overcome also the second will need to be modified, for example, in the following manner
```
var Bowling = {
  calcolateScore: function(shots) {
    var score = 0;
        
    shots.forEach(function(shots, index) {
        score += shots[0] + shots[1];
    });

    return score; 
  }
};
```

### Step3: playing with the first frame when closed and all the others that hit a pin
Position yourself in the next stage of the project by running the following command
```
git checkout step3
```
If the first shot we will make a closing (Spare) and all other shots hit a pin, the end result will be to 29 points
```
  it("game with the first frame when closed and all the others that hit a pin", function() {
    var shots = [[9,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calcolateScore(shots)).toEqual(29);
  });
```
therefore, our function will succeed only to meet the first two tests and to overcome also the third will need to be modified, in such a way to compute, in the event of closure, the first next shot
```
var Bowling = {
  calcolateScore: function(shots) {
    var score = 0;

    shots.forEach(function(shot, index) {
      if ((shot[0] + shot[1]) == 10) {
          score += shot[0] + shot[1] + shots[index+1][0];
      } else {
          score += shot[0] + shot[1];
      }
    });
    
    return score; 
  }
};
```

### Step4: playing with the first frame in the strike and all the others that hit a pin
Position yourself in the next stage of the project by running the following command
```
git checkout step4
```
If the first shot we will make a Strike and all other shots hit a pin, the end result will be 30 points
```
  it("game with the first frame in strike and all the others that hit a pin", function() {
    var shots = [[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calcolateScore(shots)).toEqual(30);
  });
```
to overcome even the fourth modify tests, in such a way to compute, in the case of Strike, the 2 shots of the next Frame
```
var Bowling = {
  calcolateScore: function(shots) {
    var score = 0;

    shots.forEach(function(shot, index) {
      if (shot[0] == 10) {
        score += shot[0] + shots[index+1][0] + shots[index+1][1];
      } else if ((shot[0] + shot[1]) == 10) {
        score += shot[0] + shot[1] + shots[index+1][0];
      } else {
          score += shot[0] + shot[1];
      }
    });
    
    return score; 
  }
};
```
### Step5: playing with the first two frames in the strike and all the others that hit a pin
Position yourself in the next stage of the project by running the following command
```
git checkout step5
```
If the first shot we will make a Strike and all other shots hit a pin, the end result will be 49 points
```
  it("game with the first two frames in strike and all the others that hit a pin", function() {
    var shots = [[10],[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calcolateScore(shots)).toEqual(49);
  });
```
to overcome even the fifth modify tests, in such a way to compute, in the case of Strike, the 2 shots of the next Frame
```
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
```
### STEP6: refactoring
Position yourself in the next stage of the project by running the following command
```
git checkout step6
```
Analyzing the code, we can note that there are cases that more than once are checked, such as the case of the Strike (shot [0] == 10) and the case of the Spare ((shot [0] + shot [1] ) == 10); philosophy [DRY] (https://it.wikipedia.org/wiki/Don't_Repeat_Yourself) (Do not repeat yourself) suggests that we make a Refactoring extracting repeated checks within a designated external function.
The functions may be so:
```
isSpare: function(shot) {
  return ((shot[0] + shot[1]) === 10);
},
```
and
```
isStrike: function(shot) {
  return (shot[0] === 10);
}
```
replacing the previous code, we get
```
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
```
### Step 7: game with all the frames in the closing and final shot that hit a pin
Position yourself in the next stage of the project by running the following command
```
git checkout step7
```
If all the shots we'll have a closing we are entitled to an additional shot. Assuming that the extra shot he will drop a single pin, the end result will be of 182 points
```
  it("game all the frames in the closing and final shot that hit a pin", function() {
    var shots = [[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1,1]];
    expect(bowling.calcolateScore(shots)).toEqual(182);
  });
```
to overcome even the sixth modify tests, in such a way to compute, in the case of Strike, the first pitch of the next frame. In the event that we are the last frame, however, we will have to add an extra kick.
```
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
```
