import { motion } from "framer-motion";

const fadeUpBlur = {
  initial: { filter: "blur(10px)", opacity: 0, y: 30 },
  whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 w-full bg-black/95 overflow-hidden border-t border-white/5">
      {/* Background soft glowing blur blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <motion.div
          {...fadeUpBlur}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-xs uppercase tracking-widest">// Who I Am</span>
          <h2 className="font-heading italic text-white text-5xl md:text-6xl mt-2">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="h-0.5 w-16 bg-accent mx-auto mt-4 rounded-full" />
          <p className="text-white/60 font-body text-sm md:text-base mt-4 max-w-xl mx-auto">
            A passionate developer building the digital future
          </p>
        </motion.div>

        {/* About Content */}
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.h3
            {...fadeUpBlur}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl text-white font-heading italic tracking-wide"
          >
            Front-End Developer & UI Enthusiast
          </motion.h3>

          <motion.div
            {...fadeUpBlur}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 space-y-4 text-white/80 font-body font-light text-sm md:text-base leading-relaxed"
          >
            <p>
              Hi! I'm <strong>Mohamed Elmustafa Ayman</strong>, a Front-End Developer passionate about crafting clean, beautiful, and highly responsive web experiences. I focus on writing quality code and turning creative ideas into reality.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and sharpening my skills to stay at the cutting edge of modern web development.
            </p>
          </motion.div>

          {/* Profile Info Details List */}
          <motion.div
            {...fadeUpBlur}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mt-10 text-left text-sm font-body font-light text-white/90"
          >
            <div className="flex items-center gap-3 liquid-glass-strong full-border px-4 py-3 rounded-lg border border-white/5">
              <i className="fa-solid fa-location-dot text-accent text-lg w-5 text-center" />
              <span><strong>Location:</strong> UAE</span>
            </div>
            <div className="flex items-center gap-3 liquid-glass-strong full-border px-4 py-3 rounded-lg border border-white/5">
              <i className="fa-solid fa-graduation-cap text-accent text-lg w-5 text-center" />
              <span><strong>Focus:</strong> Front End Dev</span>
            </div>
            <div className="flex items-center gap-3 liquid-glass-strong full-border px-4 py-3 rounded-lg border border-white/5">
              <a href="https://github.com/Mohamed-Ayman01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
                <i className="fa-brands fa-github text-accent text-lg w-5 text-center" />
                <span><strong>GitHub:</strong> Mohamed-Ayman01</span>
              </a>
            </div>
            <div className="flex items-center gap-3 liquid-glass-strong full-border px-4 py-3 rounded-lg border border-white/5">
              <i className="fa-solid fa-circle-check text-green-400 text-lg w-5 text-center animate-pulse" />
              <span><strong>Status:</strong> Available for work</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
