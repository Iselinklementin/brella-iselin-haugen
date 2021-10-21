const navLinks = document.querySelectorAll(".nav-link-header");
const navList = document.querySelectorAll(".nav-header");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navList.forEach(listItem => {
      const children = listItem.firstElementChild;

      if (children.classList.contains("active")) {
        children.classList.remove("active");
      }
    });
    link.classList.toggle("active");
  });
});
