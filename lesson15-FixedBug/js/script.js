const tabs = document.querySelectorAll(".body-tabs__item"),
  tabsContent = document.querySelectorAll(".content-tabs"),
  tabsParent = document.querySelector(".body-tabs__items");

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show", "fade");
  });
  tabs.forEach((item) => {
    item.classList.remove("body-tabs__item_active");
  });
}
function showTabContent(i = 1) {
  tabsContent[i].classList.add("show", "fade");
  tabsContent[i].classList.remove("hide");
  tabs[i].classList.add("body-tabs__item_active");
}

hideTabContent();
showTabContent();
tabsParent.addEventListener("click", (e) => {
  const target = e.target;

  if (target && target.classList.contains("body-tabs__item")) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
