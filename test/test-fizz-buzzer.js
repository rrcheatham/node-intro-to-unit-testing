const expect = require('chai').expect;

const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzz', function() {
  it('check if number is divisible by 3 and return fizz, divisble by 5 and return buzz, divisble by both and return fizz-buzz, else return number', function() {
    const normalCases = [
      { a: 30, expected: 'fizz-buzz' },
      { a: 20, expected: 'buzz' },
      { a: 9, expected: 'fizz' },
      { a: 8, expected: 8 },
      { a: -15, expected: 'fizz-buzz' }
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzz(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if arg not numbers', function() {
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzz(input[0]);
      }).to.throw(Error);
    });
  });
});
