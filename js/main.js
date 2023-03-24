const cursor = document.querySelector(".cursor");

window.onmousemove = (e) => {
  cursor.style.top = `${e.clientY - cursor.clientWidth / 2}px`;
  cursor.style.left = `${e.clientX - cursor.clientHeight / 2}px`;
};

const githubLink = document.querySelector(".socials a");

function seperateLetterOf(el) {
  let elText = el.textContent.split("");

  el.textContent = ""

  let iterator = 1;

  for (l of elText) {
    let span = document.createElement("span");

    span.classList.add("letter", `letter-${iterator}`);

    span.textContent = l;

    el.append(span);

    iterator++;
  }
}

seperateLetterOf(githubLink);
