import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeUpBlur = {
  initial: { filter: "blur(10px)", opacity: 0, y: 30 },
  whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const langColors = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML: "#E34F26",
  CSS: "#1572B6",
  SCSS: "#CC6699",
  Python: "#3572A5",
  Vue: "#41B883",
  React: "#61DAFB",
  CSS3: "#1572B6",
  HTML5: "#E34F26",
  null: "#8B5CF6",
};

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

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          "https://api.github.com/users/Mohamed-Ayman01/repos?sort=updated&per_page=100"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch repository list from GitHub.");
        }
        const data = await res.json();
        
        // Filter out forks and portfolio site repository itself
        const filtered = data.filter(
          (repo) =>
            !repo.fork &&
            repo.name.toLowerCase() !== "mohamed-ayman01.github.io"
        );
        
        // Keep the top 9 projects
        setRepos(filtered.slice(0, 9));
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  function getLangColor(lang) {
    return langColors[lang] || langColors.null;
  }

  return (
    <section id="projects" className="relative py-24 w-full bg-black/95 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <motion.div
          {...fadeUpBlur}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-xs uppercase tracking-widest">// What I've Built</span>
          <h2 className="font-heading italic text-white text-5xl md:text-6xl mt-2">
            My <span className="text-accent">Projects</span>
          </h2>
          <div className="h-0.5 w-16 bg-accent mx-auto mt-4 rounded-full" />
          <p className="text-white/60 font-body text-sm md:text-base mt-4 max-w-xl mx-auto">
            Dynamic repository feed fetched live from GitHub
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 rounded-full border-t-2 border-r-2 border-accent animate-spin mb-4" />
            <p className="text-white/50 font-body text-sm">Loading projects from GitHub...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="liquid-glass rounded-xl p-8 max-w-md mx-auto text-center border border-red-500/20">
            <i className="fa-solid fa-triangle-exclamation text-red-500 text-3xl mb-3" />
            <p className="text-white font-medium mb-4">Could not load repositories</p>
            <a
              href="https://github.com/Mohamed-Ayman01"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-xs text-white inline-flex items-center gap-1.5"
            >
              View direct on GitHub <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  {...fadeUpBlur}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="liquid-glass full-border rounded-2xl border border-white/5 hover:border-white/15 overflow-hidden flex flex-col group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 shadow-xl min-h-[340px]"
                >
                  {/* Card Gradient Header Band */}
                  <div
                    className="h-2 w-full transition-all duration-500 group-hover:h-3"
                    style={{ background: gradients[index % gradients.length] }}
                  />

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading italic text-white text-2xl tracking-wide flex items-center gap-2 group-hover:text-accent transition-colors">
                        <i className="fa-solid fa-code-branch text-base text-white/50" />
                        {repo.name}
                      </h3>
                      <p className="text-white/70 font-body font-light text-xs md:text-sm mt-3 leading-relaxed line-clamp-3">
                        {repo.description || "No description provided."}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-4">
                      {/* Meta stats */}
                      <div className="flex items-center justify-between text-xs font-body font-light text-white/60">
                        {repo.language ? (
                          <span className="flex items-center gap-1.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: getLangColor(repo.language) }}
                            />
                            {repo.language}
                          </span>
                        ) : (
                          <span className="opacity-40">—</span>
                        )}
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <i className="fa-regular fa-star text-yellow-400" /> {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <i className="fa-solid fa-code-fork text-accent" /> {repo.forks_count}
                          </span>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 text-xs font-body font-semibold">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-white flex items-center gap-1.5 transition-colors group/link"
                        >
                          <i className="fa-brands fa-github text-sm" /> Code
                          <i className="fa-solid fa-arrow-up-right-from-square text-[9px] opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                        {repo.homepage && repo.homepage.trim() !== "" && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent/80 flex items-center gap-1.5 transition-colors group/link"
                          >
                            <i className="fa-solid fa-square-rss" /> Demo
                            <i className="fa-solid fa-arrow-up-right-from-square text-[9px] opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeUpBlur}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <a
                href="https://github.com/Mohamed-Ayman01?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <i className="fa-brands fa-github text-lg" />
                View All on GitHub
              </a>
            </motion.div>
          </>
        )}

      </div>
    </section>
  );
}
