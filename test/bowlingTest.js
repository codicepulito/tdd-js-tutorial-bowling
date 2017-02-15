describe("bowling", function() {
  it("game with all the empty shots", function() {
      var shots = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];        
      expect(Bowling.calcolateScore(shots)).toEqual(0);
  });

  it("game with all the shots that hit a pin", function() {
    var shots = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calcolateScore(shots)).toEqual(20);
  });
  
  it("game with the first frame when closed and all the others that hit a pin", function() {
    var shots = [[9,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calcolateScore(shots)).toEqual(29);
  });
  
  it("game with the first frame in strike and all the others that hit a pin", function() {
    var shots = [[10],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    expect(Bowling.calcolateScore(shots)).toEqual(30);
  });
});