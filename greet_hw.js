'use strict';

var greet = module.exports = function() {};

greet.greeting = function (name) {
	return "hello " + name;
};

if(process.argv.length > 2) {
  for (var i = 2; i < process.argv.length; i++){
    var insertName = process.argv[i];
    console.log(greet.greeting(insertName));
  };
}