// FOR AOS ANIMATIONS
AOS.init({
  offset: 200,
  once: false,
});


// FOR AKSHAY MANGAL TYPE-WRITER
var text = "Akshay Mangal ";
var typewriterText = document.getElementById('ani');

function type() {
  var index = 0;
  typewriterText.textContent = ''; // Clear existing text
  function typeNextLetter() {
    if (index < text.length) {
      typewriterText.textContent += text.charAt(index);
      index++;
      setTimeout(typeNextLetter, 100); // Adjust typing speed (in milliseconds)
    } else {
      setTimeout(type, 500); // Wait for 1 second and start typing again
    }
  }
  typeNextLetter();
}
// console.log(1);
try {
  type();
}
catch (e) {
  // console.log(e);
}



// FOR NAVBAR
const menuToggle = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('menu-open');
});

const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-4rem";
  }
  prevScrollpos = currentScrollPos;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// LEAF ANIMATION FOR BLOGS PAGE 
const slider = document.querySelector(".slider");
const sliderhead = document.querySelector(".slider-head");
const blog = document.querySelector(".blogs");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  slider.style.height = `${scrollPosition}px`;
  sliderhead.style.top = `${scrollPosition}px`;
});


// HOME PAGE COUNTERS
const startYear = 2017;
const currYear = (new Date()).getFullYear();
const industrialExperience = currYear - startYear;
document.getElementById("industrial-experience-number").innerText = industrialExperience;
document.getElementById("industrial-experience-number-sales").innerText = industrialExperience;


// ANIMATION ON FORM SUBMIT
// const message_submit_div = document.getElementById("message-submit-div");
// const nameField = document.getElementById("name");
// const emailField = document.getElementById("email");
// const messageField = document.getElementById("message");
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// document.getElementById("message-button").addEventListener("click", () => {

//   if (
//     nameField.value != "" &&
//     emailField.value != "" &&
//     messageField.value != "" &&
//     emailRegex.test(emailField.value)
//   ) {
//     message_submit_div.style.backgroundImage = "";
//     setTimeout(() => {
//       message_submit_div.style.backgroundImage = "./images/sprout.gif";
//       message_submit_div.style.display = "block";
//     }, 100);
//     setTimeout(() => {
//       message_submit_div.style.backgroundImage = "";
//       message_submit_div.style.display = "none";
//     }, 3500);
//   }
// });