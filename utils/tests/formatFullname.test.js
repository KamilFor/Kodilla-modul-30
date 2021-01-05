const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('Format Full Name', () => {
  // Test of truth
  it('should work', () => {
    expect(formatFullname('jOHn dOE')).to.equal('John Doe');
  });
  // Test 1
  it('should return an error if content is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  // Test 2
  it('Should return an error if fullName arg is not a string', () => {
    if (typeof content !== 'string') return 'Error';

    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });
  // Test 3
  it('should return an error if fullName arg is not correct', () => {
    expect(formatFullname('jOHn ')).to.equal(false);
    expect(formatFullname('jOHn dOE test')).to.equal('John Doe');
  });
});
