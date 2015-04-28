'use strict';

var expect = require('chai').expect;
var greet = require('../greet_hw.js');

describe('greet_hw.js', function() {
  it('should greet someone, man', function() {
    expect(greet(' emre')).to.eql('hello emre');
  });
});