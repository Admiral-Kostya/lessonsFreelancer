"use strict";
//------------------------------------ Menu Burger ------------------------------------//
const icon = document.querySelector(".icon-menu");
icon.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu-open");
});

//------------------------------------ Tabs ------------------------------------//
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
