"use strict";

//------------------------------------------------ burgerMenu ------------------------------------------------//
const burger = document.querySelectorAll(".menu__icon");
const headerContent = document.querySelector(".menu__body");
const button = document.querySelector(".menu__item_contact");
function showHideBurger() {
  burger.forEach((item) => {
    item.classList.toggle("_active");
  });
  document.body.style.overflow = "hidden";
  headerContent.classList.toggle("_active");
  if (!headerContent.classList.contains("_active")) {
    document.body.style.overflow = "";
  }
}

burger.forEach((item) => {
  item.addEventListener("click", showHideBurger);
});

//-------------------------------------------- openCloseModal ------------------------------------------------//
const openModal = document.querySelectorAll("[data-modal]"),
  closeModal = document.querySelector("[data-close]"),
  showModal = document.querySelector(".overlay");

function showModalWindow() {
  showModal.classList.add("overlay_show", "overlay_fade");
  showModal.classList.remove("overlay_hide");
  document.body.style.overflow = "hidden";
  clearInterval(modalInterval);
}

openModal.forEach((item) => {
  item.addEventListener("click", () => {
    showModalWindow();
  });
});

function closeModalWindow() {
  showModal.classList.add("overlay_hide");
  showModal.classList.remove("overlay_show", "overlay_fade");
  document.body.style.overflow = "";
}
closeModal.addEventListener("click", closeModalWindow);

showModal.addEventListener("click", (e) => {
  const target = e.target;
  if (target == showModal) {
    closeModalWindow();
  }
});

document.body.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && showModal.classList.contains("overlay_active")) {
    closeModalWindow();
  }
});
const modalInterval = setTimeout(showModalWindow, 5000);

//-------------------------------------------- Tabs ------------------------------------------------//

const tabs = document.querySelectorAll(".tabs__item"),
  tabsParent = document.querySelector(".tabs__items"),
  tabsContent = document.querySelectorAll(".tabs__block");
function hideTabsContent() {
  tabsContent.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show", "fade");
    tabs.forEach((item) => {
      item.classList.remove("tabs__item_active");
    });
  });
}

function showTabsContent(i) {
  tabsContent[i].classList.add("show", "fade");
  tabsContent[i].classList.remove("hide");
  tabs[i].classList.add("tabs__item_active");
}
hideTabsContent();
showTabsContent(1);
tabsParent.addEventListener("click", (e) => {
  const target = e.target;
  tabs.forEach((item, i) => {
    if (target == item) {
      hideTabsContent();
      showTabsContent(i);
    }
  });
});

//--------------------------------------- Class for cards -------------------------------------------//

class FeedbackCard {
  constructor(src1, alt1, text, src2, alt2, name, city, parent, ...classes) {
    this.src1 = src1;
    this.alt1 = alt1;
    this.text = text;
    this.src2 = src2;
    this.alt2 = alt2;
    this.name = name;
    this.city = city;
    this.parent = document.querySelector(parent);
    this.classes = classes;
  }
  render() {
    const newCard = document.createElement("div");
    if (this.classes.length === 0) {
      this.newCard = "body-feedback__card";
      newCard.classList.add(this.newCard);
    } else {
      this.classes.forEach((classItem) => {
        newCard.classList.add(classItem);
      });
    }
    newCard.innerHTML = `
                  <div class="body-feedback__stars">
                    <ul class="body-feedback__list">
                      <li class="body-feedback__item">
                        <img
                          src=${this.src1}
                          alt="${this.alt1}"
                        />
                      </li>
                      <li class="body-feedback__item">
                        <img
                        src=${this.src1}
                        alt="${this.alt1}"
                        />
                      </li>
                      <li class="body-feedback__item">
                        <img
                        src=${this.src1}
                        alt="${this.alt1}"
                        />
                      </li>
                      <li class="body-feedback__item">
                        <img
                        src=${this.src1}
                        alt="${this.alt1}"
                        />
                      </li>
                      <li class="body-feedback__item">
                        <img
                        src=${this.src1}
                        alt="${this.alt1}"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="body-feedback__text">
                    ${this.text}
                  </div>
                  <div class="body-feedback__person">
                    <div class="body-feedback__image">
                      <img src=${this.src2} alt="${this.alt2}" />
                    </div>
                    <div class="body-feedback__person-block">
                      <div class="body-feedback__name">${this.name}</div>
                      <div class="body-feedback__city">${this.city}</div>
                    </div>
                  </div>            
    `;
    this.parent.prepend(newCard);
  }
}
new FeedbackCard(
  "img/Feedback/feedback_star.png",
  "feedback_star",
  "  Sociable on as carriage my position weddings railleryconsider. Peculiar trifling absolute and wandered vicinityproperty yet.",
  "img/Feedback/03.jpg",
  "03",
  "Leslie Alexander",
  "Buffalo, NJ",
  ".body-feedback__cards",
  "body-feedback__card",
  "body-feedback__card_3"
).render();

new FeedbackCard(
  "img/Feedback/feedback_star.png",
  "feedback_star",
  "The and collecting motionless difficulty son. His hearing staying ten colonel met. Sex drew six easy four dear cold",
  "img/Feedback/02.jpg",
  "02",
  "Robert Fox",
  "New York City, NY",
  ".body-feedback__cards",
  "body-feedback__card"
).render();
new FeedbackCard(
  "img/Feedback/feedback_star.png",
  "feedback_star",
  "Moderate children at of outweigh it. Unsatiable iconsidered invitation he travelling insensible. Consulted admitting oh mr up as described.",
  "img/Feedback/01.jpg",
  "01",
  "Jane Cooper",
  "Los Angeles, CA",
  ".body-feedback__cards",
  "body-feedback__card"
).render();
