const menuToggle = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
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

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Display Twitter blogs by default
  showBlogs("twitter-blogs");

  // Add click event listeners to blog bar links
  const blogBarLinks = document.querySelectorAll(".blog-bar span");
  for (const link of blogBarLinks) {
      link.addEventListener("click", function () {
          // Get the data-type attribute value (e.g., "twitter-blogs" or "linkedin-blogs")
          const blogType = this.getAttribute("data-type");
          showBlogs(blogType);
      });
  }
});

function showBlogs(blogType) {
  // Hide all blog containers
  const blogContainers = document.querySelectorAll(".blogs > div");
  for (const container of blogContainers) {
      container.style.display = "none";
  }

  // Show the selected blog container
  const selectedContainer = document.getElementById(blogType);
  if (selectedContainer) {
      selectedContainer.style.display = "grid";
  }

  // Update the active class in the blog bar
  const blogBarLinks = document.querySelectorAll(".blog-bar > span");
  for (const link of blogBarLinks) {
      link.classList.remove("active");
  }
  const activeLink = document.querySelector(`.blog-bar > span[data-type="${blogType}"]`);
  if (activeLink) {
      activeLink.classList.add("active");
  }
}





