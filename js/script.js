"use strict";
//----------------------------------------- Menu Burger -----------------------------------------//
const icon = document.querySelector(".icon-menu");
const menuLinks = document.querySelectorAll(".menu__link");
icon.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu-open");
});
menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    document.documentElement.classList.remove("menu-open");
  })
);
