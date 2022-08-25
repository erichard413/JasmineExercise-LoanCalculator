
describe('Testing the calculation', function () {
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100000,
    years: 24,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('568.42');
});
})


describe('testing decimal places', function() {
  it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});
})


/// etc
