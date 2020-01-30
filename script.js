'use strict';


function randomInteger() {
  let min = 1,
    max = 100;
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
