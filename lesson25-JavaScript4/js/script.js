// Hometask
// ЗАВДАННЯ НОМЕР 3 МОЖНА ПОДИВИТИСЬ ЯКЩО ЗАКОМЕНТУВАТИ БЛОК ІЗ КЛАСОМ "CONTAINER".
// У 4ОМУ ЗАВДАННІ ВІДЧУВАЮ ЩО НАМУДРИВ, АЛЕ ВЖЕ БІЛЬШЕ НІЧОГО В ГОЛОВУ НЕ ЛІЗЛО, СПОДІВАЮСЬ, НЕ ВСЕ ТАК ПОГАНО))
//СПРОБУВАВ ЗРОБИТИ ДВОМА СПОСОБАМИ, АЛЕ ЯК ЙОГО ИНТЕРВАЛ ЗАПУСТИТИ ОДИН РАЗ НЕ ДОТЯМИВ... ДУЖЕ ОЧІКУЮ НА ПЕРЕВІРКУ))
//
"use strict";

/* 
Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас 
*/
document.addEventListener("click", someActions);

function someActions(event) {
  const eventTarget = event.target;
  if (eventTarget.closest(".block__item")) {
    eventTarget.classList.toggle("active");
  }

  if (eventTarget.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  } else if (eventTarget.closest(".menu__link")) {
    if (document.documentElement.classList.contains("menu-open")) {
      document.documentElement.classList.remove("menu-open");
    }
    const link = eventTarget.closest(".menu__link");
    const goto = link.dataset.goto;
    const gotoElement = document.querySelector(goto);

    if (gotoElement) {
      gotoElement.scrollIntoView({
        behavior: "smooth",
      });
    }
    event.preventDefault();
  }
}

/* 
Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/

/* document.body.style.backgroundColor = "red"; */
window.addEventListener("load", pageLoaded);
function pageLoaded() {
  document.documentElement.classList.add("loaded");
}
/* 
Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/

document.addEventListener("mousemove", movementReaction);

function movementReaction(event) {
  const footer = document.querySelector(".footer");
  const eventTarget = event.target;
  if (footer) {
    if (eventTarget.closest(".header")) {
      footer.classList.add("newBgColor");
    } else if (!eventTarget.closest(".header")) {
      footer.classList.remove("newBgColor");
    }
  } else {
    console.log("footer wasn't found");
  }
}

/* 
Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/

const item = document.querySelector(".text-block__counter-item span");
function increaseCounter() {
  if (increaseCounter.isRun) {
    return false;
  }
  increaseCounter.isRun = true;
  let speed = parseFloat(item.dataset.speedTime);
  let finishValue = parseFloat(item.dataset.finishValue);
  let beginValue = parseFloat(item.dataset.beginValue);
  item.textContent = `${beginValue}`;
  if (
    Number.isFinite(finishValue) &&
    Number.isFinite(speed) &&
    finishValue >= 0 &&
    beginValue >= 0 &&
    beginValue < finishValue
  ) {
    let i = beginValue;
    let timer = setInterval(() => {
      item.textContent = `${i}`;
      if (i === finishValue) {
        clearInterval(timer);
      }
      ++i;
    }, speed);
  } else {
    item.textContent = `Ups! There is a mistake...(`;
  }
}
let options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1,
};
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      increaseCounter();
    }
  });
};
let observer = new IntersectionObserver(callback, options);
const target = item;
observer.observe(target);

/* let options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1,
};
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let speed = parseFloat(target.dataset.speedTime);
      let finishValue = parseFloat(target.dataset.finishValue);
      let beginValue = parseFloat(target.dataset.beginValue);
      target.textContent = `${beginValue}`;
      if (
        Number.isFinite(finishValue) &&
        Number.isFinite(speed) &&
        finishValue >= 0 &&
        beginValue >= 0 &&
        beginValue < finishValue
      ) {
        let i = beginValue;
        let timer = setInterval(() => {
          target.textContent = `${i}`;
          if (i === finishValue) {
            clearInterval(timer);
          }
          ++i;
        }, speed);
      } else {
        target.textContent = `Ups! There is a mistake...(`;
      }
    }
  });
};
let observer = new IntersectionObserver(callback, options);
const target = document.querySelector(".text-block__counter-item span");
observer.observe(target);
 */
