"use strict";

//Домашне завдання

//Задача №1
//Отримати в константу елемент <body>

const body = document.body;
console.log(body);

//Задача №2
//Написати функцію, яка додає в <body> список UL
//з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
const list = document.createElement("UL");
list.classList.add("list");
function addUlIntoBody(liQuantity = 5) {
  let i;
  for (i = 1; i <= liQuantity; ++i) {
    let listItem = document.createElement("li");
    listItem.textContent = `This is an item by number ${i}`;
    listItem.style.cssText = `
	  font-size:32px;
    color:red;
    font-weight:800;
`;
    list.insertAdjacentElement("beforeend", listItem);
  }
  body.insertAdjacentElement("afterbegin", list);
}
addUlIntoBody();

//Задача №3
//Додати до елементу <body> класс loaded.
//Потім перевірити чи є клас loaded у елемента <body>
//і, якщо є, додати стиль кольору тесту зедлений.

body.classList.add("loaded");
if (body.classList.contains("loaded")) {
  body.style.cssText = `
	color:green;
`;
}

//Задача №4
//Дано в html: три елементи з класом item.
//Треба отримати ці елементи в константу, кожному додати клас active,
//та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const flexItem = document.querySelectorAll(".flex__item");
console.log(flexItem);
flexItem.forEach((item, index) => {
  item.classList.add("active");
  item.textContent = `Елемент ${index + 1}`;
});

//Задача №5
//Дано в html: текст, далі кнопка з класом button.
//Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector(".button"),
  buttonTop = document.querySelector(".button-top");
buttonTop.addEventListener("click", () => {
  function scrollToBlock(element) {
    const block = element.dataset.scroll;
    element.scrollIntoView({
      block: block,
      inline: "nearest",
      behavior: "smooth",
    });
  }
  scrollToBlock(button);
});
button.addEventListener("click", () => {
  function scrollToBlock(element) {
    const block = element.dataset.scroll;
    element.scrollIntoView({
      block: block,
      inline: "nearest",
      behavior: "smooth",
    });
  }
  scrollToBlock(buttonTop);
});
//Задача №6
//Дано в html: посилання з класом link
//Треба додати до посилання дата атрибут зі значенням 100
//Поім отримати значення трибуту, та, якщо значення меньше 200
//пофарбувати колір тексту посилання в червоний

const link = document.querySelector(".link");
let value = parseFloat(link.dataset.value);
console.log(typeof value);
if (value < 200) {
  link.style.cssText = `
  color:red;
  `;
} else if (value > 200) {
  link.style.cssText = `
  color:violet;
  `;
} else {
  link.style.cssText = `
  color:yellow;
  `;
}
