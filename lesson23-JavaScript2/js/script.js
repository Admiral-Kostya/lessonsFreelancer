"use strict";
//-------------Lesson 2 -------------//

//------------- Hometask -------------//

/* Задача №1
Що потрапить в консоль?
let someVar = 0;
++someVar;
if (someVar) {
	console.log(someVar);
} */

// Відповідь. В консоль потрапить - 1.

/* Задача №2
За допомогою циклу FOR виведіть в консоль 10 рядків:
Пункт №1
Пункт №2
і т.д. */

// Відповідь.
for (let i = 1; i <= 10; ++i) {
  console.log(`Пункт №${i}`);
}

/* Задача №3
Що потрапить в консоль ?
if (2 * 20 <= 10  30 / 2 < 5 && 10 <= "10"  20 === "20") {
 console.log('000');
} */

//1. 2 * 20 == 40; 30 / 2 == 15;
//2. 40 <= 10 - false; 15 < 5 - false; 10 <= “10” - true.
//3. 20 === “20” - false
//4. if (false  false && true  false){ console.log('000');}
//5. false && true - false
//6. if (false || false || false){ console.log('000');}
//7. Відповідь. В консоль нічого не потрапить.

/* Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку  */

function numsDiv(a, b) {
  let result;
  result = a / b;
  if (Number.isFinite(result)) {
    console.log(`Результат ділення: ${result}`);
    return `Результат ділення: ${result}`;
  }
}
numsDiv(10, 2);
numsDiv(10, 5);
numsDiv(10, -5);
numsDiv(0, 5);
numsDiv(10, 0);
numsDiv(Infinity, 0);
numsDiv(Infinity, Infinity);
numsDiv(Infinity, "Infinity");
numsDiv(Infinity, -Infinity);
numsDiv(10, "");
numsDiv(10, " ");

/* 

Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
*/

const myArray = ["fruit", "string", "", "10", 10, "hello"];

myArray.forEach((value) => {
  if (value === 10) {
    console.log(`Знайдено число ${value}`);
  }
});
