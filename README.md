#Javascript Test Drive Development Tutorial #
[![Build Status](https://travis-ci.org/gianlucaciarcelluti/tdd-js-tutorial-bowling.svg?branch=master)](https://travis-ci.org/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![codecov](https://codecov.io/gh/gianlucaciarcelluti/tdd-js-tutorial-bowling/branch/master/graph/badge.svg)](https://codecov.io/gh/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Code Climate](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling/badges/gpa.svg)](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling)
[![Issue Count](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling/badges/issue_count.svg)](https://codeclimate.com/github/gianlucaciarcelluti/tdd-js-tutorial-bowling)

*Read this in other languages: [Italian](README.md).*

This tutorial has the objective to illustrate the approach of TDD oriented to an implementation for successive approximations that leads the developer to focus on the problems as they arise.

Even today, many developers are used to carry out a comprehensive analysis of the development of a project at last to find a working solution to implement; this approach poses great difficulties when the problem to be solved is complex, in particular by discouraging people who have not had the opportunity to experience appropriate experience.

Through the use of the TDD method, the solution is built in stages and incremental approximations that make it much more simple and within the reach of all the management of a complex problem.

Git tags:

- step1: initial project state

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
git checkout passo1
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
git checkout passo2
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