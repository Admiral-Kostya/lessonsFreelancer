"use strict";
//----------------------------------------- Menu Burger -----------------------------------------//
const icon = document.querySelector(".icon-menu");
icon.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu-open");
});

//--------------------------------------------- TABS ---------------------------------------------//

const tabs = document.querySelectorAll(".tabs__item"),
  tabsContent = document.querySelectorAll(".tabs__content"),
  tabsParent = document.querySelector(".tabs__items");

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show", "fade");
  });
  tabs.forEach((item) => {
    item.classList.remove("tabs__item_active");
  });
}
function showTabContent(i = 1) {
  tabsContent[i].classList.add("show", "fade");
  tabsContent[i].classList.remove("hide");
  tabs[i].classList.add("tabs__item_active");
}

hideTabContent();
showTabContent();
tabsParent.addEventListener("click", (e) => {
  const target = e.target;

  if (target && target.classList.contains("tabs__item")) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

//--------------------------------------------- COUNTDOWN TIMER ---------------------------------------------//

const deadline = "2023-12-23";
function getTimeRemainig(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()), //разница между дедлайном и текущим временем в милисекундах
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000) % 60);
  // Возвращение переменных наружу в виде объекта для дальнейшего их использования.
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
/* 
Функция, которая добавляет 0 когда в таймере появляется однозначное число
*/
function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}
/* 
Функция, которая устанавливает таймер на страницу. Для этого нужен блок таймер из верстки и дедлайн. 
*/
function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds"),
    timeInterval = setInterval(updateClock, 1000);

  updateClock(); // устраняет мигание таймера в верстке при обновлении страницы
  /* 
Функция которая будет обновлять таймер каждую секунду
*/
  function updateClock() {
    const t = getTimeRemainig(endtime); // расчет оставшегося времени на даннай момент
    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}
setClock(".block-time", deadline);
