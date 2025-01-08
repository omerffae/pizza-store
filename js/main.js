// ! MAİN

const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("active");
});

// ! ABOUT

const personBars1 = document.querySelector(".personBars1");
const chefDiv1 = document.querySelector(".chef1");

personBars1.addEventListener("click", function () {
  chefDiv1.classList.toggle("active");
  personBars1.style.margin= "-15px";
});

const personBars2 = document.querySelector(".personBars2");
const chefDiv2 = document.querySelector(".chef2");

personBars2.addEventListener("click", function () {
  chefDiv2.classList.toggle("active");
  personBars2.style.margin= "-15px";
});

const personBars3 = document.querySelector(".personBars3");
const chefDiv3 = document.querySelector(".chef3");

personBars3.addEventListener("click", function () {
  chefDiv3.classList.toggle("active");
  personBars3.style.margin= "-15px";
});

const personBars4 = document.querySelector(".personBars4");
const chefDiv4 = document.querySelector(".chef4");

personBars4.addEventListener("click", function () {
  chefDiv4.classList.toggle("active");
  personBars4.style.margin= "-15px";
});

const ourStory = document.querySelector(".our-story");
const readMore = document.querySelector(".readMore");

readMore.addEventListener("click", function() {
  ourStory.classList.toggle("active")
})
