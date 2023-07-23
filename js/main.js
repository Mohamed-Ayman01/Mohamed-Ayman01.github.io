let body = document.body;
let switchBtns = document.querySelectorAll("nav .switch-btn");
let switchBtnIcons = document.querySelectorAll("nav .switch-btn i");

switchBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      
      switchBtnIcons.forEach((icon) => {
        icon.style.left = "75%";
        icon.className = "fas fa-sun";
      });
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      
      switchBtnIcons.forEach((icon) => {
        icon.style.left = "5%";
        icon.className = "fas fa-moon";
      });
    }
  });
});

let navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((el) => {
  el.addEventListener("click", () => {
    navLinks.forEach((el) => {
      el.classList.remove("active");
    });

    el.classList.add("active");
  });
});

let sideMenu = document.querySelector("nav ul.menu");
let menuLinks = document.querySelectorAll("nav ul.menu a");
let menuBtn = document.querySelector("nav .burger-menu");
let menuExitBtn = document.querySelector("nav .menu button.exit");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("show");
});

menuExitBtn.addEventListener("click", () => {
  sideMenu.classList.remove("show");
});

menuLinks.forEach((a) => {
  a.addEventListener("click", () => {
    sideMenu.classList.remove("show");
  });
});
