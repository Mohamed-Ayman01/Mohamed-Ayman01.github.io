function getRandomInteger(start, range) {
  let num = Math.floor(Math.random() * range + start);

  while (num > range) num = Math.floor(Math.random * range + start);

  return num;
}

const cursor = document.querySelector(".cursor");

window.onmousemove = (e) => {
  cursor.style.top = `${e.clientY - cursor.clientWidth / 2}px`;
  cursor.style.left = `${e.clientX - cursor.clientHeight / 2}px`;
};

const githubLink = document.querySelector(".socials a");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

githubLink.addEventListener("mouseover", (e) => {
  let iter = 0;

  const handler = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((l, index) => {
        if (index < iter) {
          return e.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iter >= e.target.dataset.value.length) {
      clearInterval(handler);
    }

    iter += 1;
  }, 30);
});
