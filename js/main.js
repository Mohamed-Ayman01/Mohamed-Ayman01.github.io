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

let projectsBox = document.querySelector(".projects .projects-box");
let myGithubName = "Mohamed-Ayman01";

async function getProjectsData() {
  let data = await fetch(`https://api.github.com/users/${myGithubName}/repos`);

  if (data.ok === true) {
    let responseObj = await data.json();
    let filterdObjs = [];

    for (obj of responseObj) {
      if (
        obj.fork === false &&
        obj.homepage !== null &&
        obj.name !== "Mohamed-Ayman01.github.io"
        ) {
          filterdObjs.push(obj);
        }
      }
      
      for (obj of filterdObjs) {
      console.log(obj)

      let box = document.createElement("div");
      box.classList.add("box");

      let imgBox = document.createElement("div");
      imgBox.classList.add("img-box");

      let img = document.createElement("img");
      img.setAttribute("src", `${obj.homepage}project-img.jpg`);

      imgBox.append(img)

      let textBox = document.createElement("div");
      textBox.classList.add("text");

      let title = document.createElement("h3");
      title.textContent = `${obj.name}`.split("-").join(" ");

      let desc = document.createElement("p");
      desc.textContent = obj.description;

      let links = document.createElement("div");
      links.className = "links";

      let viewLink = document.createElement("a");
      viewLink.innerHTML = `<i class="fas fa-arrow-up-right-from-square"></i>`;
      viewLink.classList.add("view", "main-btn");
      viewLink.setAttribute("target", "_blank");
      viewLink.setAttribute("href", obj.homepage);

      let repoLink = document.createElement("a");
      repoLink.innerHTML = `<i class="fab fa-github"></i>`;
      repoLink.setAttribute("target", "_blank");
      repoLink.setAttribute("href", obj.html_url);

      links.append(viewLink, repoLink)

      textBox.append(title, desc, links);

      box.append(imgBox, textBox);

      projectsBox.append(box);
    }
  } else {
    console.log(error("failed fetching projects data"));
  }
}

getProjectsData();
