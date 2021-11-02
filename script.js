const navLinks = document.querySelectorAll(".nav-link-header");
const navList = document.querySelectorAll(".nav-header");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.forEach((listItem) => {
      const children = listItem.firstElementChild;

      if (children.classList.contains("active")) {
        children.classList.remove("active");
      }
    });
    link.classList.toggle("active");
  });
});

const windowInnerWidth = window.innerWidth;
const mobileBtn = document.querySelector("#mobile-btn");

function buttonText() {
  if (windowInnerWidth >= 990) {
    mobileBtn.innerHTML = `See collection <i class="fas fa-arrow-right"></i>`;
  }
}

window.onresize = buttonText();
