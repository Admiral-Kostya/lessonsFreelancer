"use strict";
//----------------------------------------- Menu Burger -----------------------------------------//
const icon = document.querySelector(".icon-menu");
const menuLinks = document.querySelectorAll(".menu__link");
const boxSocial = document.querySelector(".box-social");
const menuList = document.querySelector(".menu__list");

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
      } /* else {
        animItem.classList.remove("_active");
      } */
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
//------------------------------------ Simple Slider ----------------------------------------//

const slides = document.querySelectorAll(".block-slider__image"),
  prev = document.querySelector(".block-button__prev"),
  next = document.querySelector(".block-button__next");
/* current = document.querySelector("#current"); */
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => (item.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("fade");
  /* if (slides.length < 10) {
    current.textContent = `0${slideIndex}`;
  } else {
    current.textContent = slideIndex;
  } */
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

prev.addEventListener("click", () => {
  plusSlides(-1);
});
next.addEventListener("click", () => {
  plusSlides(1);
});
//------------------------------------ Scroll by click ----------------------------------------//
//const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
const heroLinks = document.querySelectorAll(".scroll-link[data-goto]");
if ((menuLinks.length && heroLinks.length) > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  heroLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}
/* if (heroLinks.length > 0) {
  heroLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
} */
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      pageYOffset -
      document.querySelector("header").offsetHeight;
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}
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
