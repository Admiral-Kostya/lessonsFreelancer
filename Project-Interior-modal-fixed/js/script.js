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

//----------------------------------------- Scroll Animation -----------------------------------------//
const animItems = document.querySelectorAll(".anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        animItem.classList.remove("_active");
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }
  setTimeout(() => {
    animOnScroll();
  }, 500);
}
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
const modalInterval = setTimeout(showModalWindow, 3000);

//------------------------------------ Smooth Scroll ----------------------------------------//
$(window).scroll(function () {
  if ($(this).scrollTop() > 600) {
    $(".pageup").fadeIn();
  } else {
    $(".pageup").fadeOut();
  }
});

$("a[href^='#']").click(function () {
  const _href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
  return false;
});
/* document.querySelector(".pageup").onclick = () => {
  window.scrollTo(pageYOffset, 0);
}; */
