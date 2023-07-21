let body = document.body;
let switchBtn = document.querySelector("nav .switch-btn");
let switchBtnIco = document.querySelector("nav .switch-btn i");

switchBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");

    switchBtnIco.style.left = "75%";
    switchBtnIco.className = "fas fa-sun";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");

    switchBtnIco.style.left = "5%";
    switchBtnIco.className = "fas fa-moon";
  }
});

let navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((el) => {
  el.addEventListener("click", () => {
    navLinks.forEach((el) => {
      el.classList.remove("active")
    });

    el.classList.add("active");
  });
});
