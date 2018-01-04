describe("bowling", function() {
  var bowling;
  
  beforeEach(function() {
    bowling = new Bowling();
  });
    
  it("game with all the empty shots", function() {
      var shots = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];        
      expect(bowling.calculateScore(shots)).toEqual(0);
  });

  it("game with all the shots that hit a pin", function() {
    var shots = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(bowling.calculateScore(shots)).toEqual(20);
  });
  
  it("game with the first frame when closed and all the others that hit a pin", function() {
    var shots = [[9,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(bowling.calculateScore(shots)).toEqual(29);
  });
  
  it("game with the first frame in strike and all the others that hit a pin", function() {
    var shots = [[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(bowling.calculateScore(shots)).toEqual(30);
  });
  
  it("game with the first two frames in strike and all the others that hit a pin", function() {
    var shots = [[10],[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(bowling.calculateScore(shots)).toEqual(49);
  });
   
  it("game with all the frames in the closing and final shot that hit a pin", function() {
    var shots = [[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1,1]];
    expect(bowling.calculateScore(shots)).toEqual(182);
  });
  
  it("game with all the frames in strike", function() {
    var shots = [[10],[10],[10],[10],[10],[10],[10],[10],[10],[10,10,10]];
    expect(bowling.calculateScore(shots)).toEqual(300);
  });
  
});