describe("Prime Factors Calculator", function() {
  var primeFactorsCalculator;

  beforeEach(function() {
    primeFactorsCalculator = new PrimeFactorsCalculator();
  });

  it("should return empty array for 1", function () {
    expect(primeFactorsCalculator.get(1)).toEqual([]);
  });

});
