'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function randomBot() {
  let min = 1,
    max = 100;

  function randomInt() {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  let random = randomInt();
  console.log(random);

  function callUser() {
    let numUser = prompt('Угадай число от 1 до 100');

    if (numUser !== null) {
      if (isNumber(numUser)) {
        if (Number(numUser) === random) {
          alert('Верно!');
        } else {
          if (numUser > random) {
            alert('Загаданное число меньше');
            callUser();
          } else {
            alert('Загаданное число больше');
            callUser();
          }
        }
      } else {
        alert('Введи число!');
        callUser();
      }
    }
  }

  callUser();
}

randomBot();
