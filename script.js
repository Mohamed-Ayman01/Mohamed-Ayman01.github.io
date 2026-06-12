/* ═══════════════════════════════════════════════
   PORTFOLIO JAVASCRIPT — Mohamed E. Ayman
   ════════════════════════════════════════════ */

// ─── CONFIGURATION ─────────────────────────────
const CONFIG = {
  name:         "Mohamed E. Ayman",
  github:       "Mohamed-Ayman01",
  maxProjects:  9,           // max cards to show (skip forks with no description)
  roles: [
    "Front-End Developer",
    "JavaScript Developer",
    "UI/UX Enthusiast",
    "Creative Coder",
  ],
  typingSpeed:   80,
  deletingSpeed: 40,
  pauseBetween:  2000,

  // Language → color map for the dot badge
  langColors: {
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    HTML:       "#E34F26",
    CSS:        "#1572B6",
    SCSS:       "#CC6699",
    Python:     "#3572A5",
    Vue:        "#41B883",
    null:       "#8B5CF6",
  },
};

// ─── THEME TOGGLE ──────────────────────────────
const html        = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon   = document.getElementById("theme-icon");

const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next    = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeIcon.className = theme === "dark" ? "fas fa-moon" : "fas fa-sun";
}

// ─── MOBILE MENU ───────────────────────────────
const hamburger  = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
  });
});

// ─── NAVBAR SCROLL ─────────────────────────────
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  updateActiveNav();
  handleScrollTop();
});

// ─── ACTIVE NAV LINK ───────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  const scrollPos = window.scrollY + 150;
  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((l) => l.classList.remove("active"));
      const active = document.querySelector(`.nav-link[href="#${section.id}"]`);
      if (active) active.classList.add("active");
    }
  });
}

// ─── TYPING EFFECT ─────────────────────────────
const typedEl = document.getElementById("typed-text");
let roleIndex   = 0;
let charIndex   = 0;
let isDeleting  = false;

function typeLoop() {
  const currentRole = CONFIG.roles[roleIndex % CONFIG.roles.length];

  if (!isDeleting) {
    typedEl.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeLoop, CONFIG.pauseBetween);
      return;
    }
  } else {
    typedEl.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex++;
    }
  }

  setTimeout(typeLoop, isDeleting ? CONFIG.deletingSpeed : CONFIG.typingSpeed);
}

typeLoop();

// ─── SCROLL REVEAL ─────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ─── STAT COUNTER ──────────────────────────────
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stat-number").forEach((el) => {
          const target = +el.dataset.target;
          const step   = target / (1500 / 16);
          let current  = 0;
          const timer  = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = Math.round(current);
          }, 16);
        });
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".about-stats").forEach((el) => statObserver.observe(el));

// ─── SCROLL TO TOP ─────────────────────────────
const scrollTopBtn = document.getElementById("scroll-top");

function handleScrollTop() {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
}

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ─── CURSOR GLOW ───────────────────────────────
const cursorGlow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top  = e.clientY + "px";
});

// ─── CONTACT FORM ──────────────────────────────
const contactForm = document.getElementById("contact-form");
const submitBtn   = document.getElementById("submit-btn");
const submitText  = document.getElementById("submit-text");
const formSuccess = document.getElementById("form-success");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitText.textContent = "Sending…";

  emailjs.sendForm('service_mcwlife', 'template_02d7etd', contactForm, 'eXSm_zV_G6Ksv9uQ6')
    .then(() => {
      submitBtn.disabled = false;
      submitText.textContent = "Send Message";
      formSuccess.classList.add("show");
      contactForm.reset();
      setTimeout(() => formSuccess.classList.remove("show"), 5000);
    }, (error) => {
      submitBtn.disabled = false;
      submitText.textContent = "Send Message";
      alert("Failed to send the message. Please try again later.");
      console.error("EmailJS Error:", error);
    });
});

// ─── FOOTER YEAR ───────────────────────────────
document.getElementById("footer-year").textContent = new Date().getFullYear();

// ═══════════════════════════════════════════════
// GITHUB PROJECTS FETCH
// ═══════════════════════════════════════════════
const projectsGrid    = document.getElementById("projects-grid");
const projectsLoading = document.getElementById("projects-loading");
const projectsError   = document.getElementById("projects-error");
const projectsMore    = document.getElementById("projects-more");

async function fetchGithubProjects() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${CONFIG.github}/repos?sort=updated&per_page=100`
    );

    if (!res.ok) throw new Error("GitHub API error: " + res.status);

    const repos = await res.json();

    // Filter: skip the portfolio repo itself and forks without a description
    const filtered = repos.filter(
      (r) =>
        !r.fork &&
        r.name !== CONFIG.github.toLowerCase() + ".github.io" &&
        r.name !== "Mohamed-Ayman01.github.io"
    );

    if (filtered.length === 0) throw new Error("No projects found");

    const shown = filtered.slice(0, CONFIG.maxProjects);

    projectsLoading.style.display = "none";
    renderProjects(shown);

    if (filtered.length > CONFIG.maxProjects) {
      projectsMore.style.display = "block";
      // Observe for reveal
      revealObserver.observe(projectsMore);
    }
  } catch (err) {
    console.error(err);
    projectsLoading.style.display = "none";
    projectsError.style.display   = "flex";
  }
}

function getLangColor(lang) {
  return CONFIG.langColors[lang] || CONFIG.langColors.null;
}

function renderProjects(repos) {
  // Gradient palette cycling for header bands
  const gradients = [
    "linear-gradient(90deg,#667eea,#764ba2)",
    "linear-gradient(90deg,#f093fb,#f5576c)",
    "linear-gradient(90deg,#4facfe,#00f2fe)",
    "linear-gradient(90deg,#43e97b,#38f9d7)",
    "linear-gradient(90deg,#fa709a,#fee140)",
    "linear-gradient(90deg,#a18cd1,#fbc2eb)",
    "linear-gradient(90deg,#6D28D9,#A78BFA)",
    "linear-gradient(90deg,#f7971e,#ffd200)",
    "linear-gradient(90deg,#56ab2f,#a8e063)",
  ];

  repos.forEach((repo, index) => {
    const card = document.createElement("div");
    card.className = "project-card reveal";

    const gradient = gradients[index % gradients.length];
    const langColor = getLangColor(repo.language);
    const desc = repo.description || "No description provided.";
    const homepage = repo.homepage && repo.homepage.trim() !== ""
      ? repo.homepage
      : null;

    card.innerHTML = `
      <div class="project-header" style="background:${gradient}"></div>
      <div class="project-body">
        <h3 class="project-title">
          <i class="fas fa-code-branch"></i>
          ${escapeHtml(repo.name)}
        </h3>
        <p class="project-desc">${escapeHtml(desc)}</p>

        <div class="project-meta">
          ${repo.language
            ? `<span class="project-lang">
                <span class="lang-dot" style="background:${langColor}"></span>
                ${repo.language}
              </span>`
            : `<span class="project-lang" style="opacity:0.5">—</span>`
          }
          <div class="project-stats">
            <span>
              <i class="fas fa-star"></i> ${repo.stargazers_count}
            </span>
            <span>
              <i class="fas fa-code-branch"></i> ${repo.forks_count}
            </span>
          </div>
        </div>

        <div class="project-links">
          <a href="${repo.html_url}" target="_blank" class="project-link">
            <i class="fab fa-github"></i> Source Code
          </a>
          ${homepage
            ? `<a href="${homepage}" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>`
            : ""
          }
        </div>
      </div>
    `;

    projectsGrid.appendChild(card);

    // Stagger reveal
    setTimeout(() => revealObserver.observe(card), index * 60);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// Kick off the fetch
fetchGithubProjects();
