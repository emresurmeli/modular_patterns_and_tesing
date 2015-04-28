'use strict';

var expect = require('chai').expect;
var greet = require('../greet_hw');

describe('greet_hw.js', function() {
  it('should greet someone, man', function() {
    expect(greet.greeting('emre')).to.eql('hello emre');
  });
});