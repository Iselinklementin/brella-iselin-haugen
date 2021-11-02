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

const navbarActive = document.querySelector(".navbar-toggler");
const nav = document.querySelector(".navbar");
console.log(nav);
navbarActive.addEventListener("click", toggler);

function toggler(e) {
  const classes = navbarActive.classList;
  const collapsed = classes.contains("collapsed") ? false : true;
  nav.style.paddingBottom = "0rem";
  nav.style.boxShadow = "none";

  if (collapsed) {
    nav.style.paddingBottom = "4rem";
    nav.style.boxShadow = "0px 0px 14px 3px #00000040";
  }
}
