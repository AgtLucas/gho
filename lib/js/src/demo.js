// Generated by BUCKLESCRIPT VERSION 1.8.1, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry   = require("bs-platform/lib/js/curry.js");

console.log("Reason!");

var x = ( 'here is  a string from JS.' );

console.log(x + " back in Reason land");

var jsCalculate = (
  function (numbers, scaleFactor) {
    let result = 0
    numbers.forEach(number => {
      result += number
    })
    return result * scaleFactor
  }
);

function calculate(numbers, scaleFactor) {
  return Curry._2(jsCalculate, $$Array.of_list(numbers), scaleFactor);
}

console.log(Curry._2(jsCalculate, $$Array.of_list(/* :: */[
              1,
              /* :: */[
                2,
                /* :: */[
                  3,
                  /* [] */0
                ]
              ]
            ]), 10));

exports.x           = x;
exports.jsCalculate = jsCalculate;
exports.calculate   = calculate;
/*  Not a pure module */
