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

let projectsBox = document.querySelector(".projects .projects-box")
let myGithubName = "Mohamed-Ayman01";

async function getProjectsData() {
  let data = await fetch(`https://api.github.com/users/${myGithubName}/repos`);

  if (data.ok === true) {
    let responseObj = await data.json();
    let filterdObjs = [];

    for (obj of responseObj) {
      // ! Until the border-previewer app is solved hide project
      if (obj.fork === false && obj.homepage !== null && obj.name !== "Mohamed-Ayman01.github.io" && obj.name !== "Border-Radius-Previewer") {
        filterdObjs.push(obj)
      }
    }

    for (obj of filterdObjs) {
      // console.log(`${obj.homepage}project-img.jpg`);
      // console.log(obj.homepage);

      let box = document.createElement("div");
      box.classList.add("box");

      let img = document.createElement("img");
      img.setAttribute("src", `${obj.homepage}project-img.jpg`);

      let overlay = document.createElement("div");
      overlay.classList.add("overlay");
      
      let viewLink = document.createElement("a");
      viewLink.textContent = "live view";
      viewLink.classList.add("view", "main-btn");
      viewLink.setAttribute("target", "_blank");
      viewLink.setAttribute("href", obj.homepage);
      overlay.append(viewLink)

      box.append(img, overlay);

      projectsBox.append(box)
    }
  } else {
    projectsBox.append("Not Available");
  }
}

getProjectsData()