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

  let steps = 9,
    random = randomInt();
  console.log(random);

  function callUser() {

    let numUser = prompt('Угадай число от 1 до 100');
    let choice;

    if (numUser !== null && steps > 0) {
      if (isNumber(numUser)) {
        if (Number(numUser) === random) {

          choice = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

          if (choice) {
            steps = 9;
            random = randomInt();
            callUser();
          }
        } else {
          if (numUser > random) {
            alert('Загаданное число меньше, осталось попыток ' + steps);
            --steps;
            callUser();
          } else {
            alert('Загаданное число больше, осталось попыток ' + steps);
            --steps;
            callUser();
          }
        }
      } else {
        alert('Введи число!');
        callUser();
      }
    } else if (steps === 0) {
      choice = confirm('Жаль, Вы не угадали(... Хотели бы сыграть еще?');

      if (choice) {
        random = randomInt();
        steps = 9;
        callUser();
      }
    }
  }

  callUser();
}

randomBot();
