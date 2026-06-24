import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FadingVideo from "./FadingVideo";
import BlurText from "./BlurText";
import Navbar from "./Navbar";
import { ArrowUpRight } from "./Icons";

const fadeUpBlur = {
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
};

const roles = [
  "Front-End Developer",
  "JavaScript Developer",
  "UI/UX Enthusiast",
  "Creative Coder",
];

const techStack = ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Git"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blink cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Typing effect loop
  useEffect(() => {
    if (subIndex === roles[roleIndex].length + 1 && !reverse) {
      const pauseTimeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(pauseTimeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const typingTimeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 45 : 90);

    return () => clearTimeout(typingTimeout);
  }, [subIndex, reverse, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-between">
      {/* Background space/creative loop video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
        className="fixed inset-0 w-full h-full object-cover z-0"
      />

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      <Navbar />

      <div className="relative z-10 flex-1 flex items-center justify-center pt-28 px-6 lg:px-20">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">


            <div className="mt-6 min-h-[140px] md:min-h-[160px] flex flex-col justify-center">
              <BlurText
                text="Mohamed E. Ayman"
                as="h1"
                className="text-5xl md:text-7xl lg:text-8xl font-heading italic text-white leading-none tracking-tight"
              />
              <motion.div
                {...fadeUpBlur}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="text-xl md:text-2xl text-white/80 font-body font-light mt-3 flex items-center justify-center lg:justify-start"
              >
                <span>I'm a&nbsp;</span>
                <span className="text-white font-semibold underline decoration-accent decoration-2 underline-offset-4">
                  {roles[roleIndex].slice(0, subIndex)}
                </span>
                <span className={`text-accent font-bold ml-0.5 ${blink ? "opacity-100" : "opacity-0"}`}>|</span>
              </motion.div>
            </div>

            <motion.p
              {...fadeUpBlur}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              className="mt-6 text-sm md:text-base text-white/80 max-w-xl font-body font-light leading-relaxed"
            >
              A passionate Front-End Developer who loves building beautiful, responsive web experiences. Always learning, always building.
            </motion.p>

            {/* Social Buttons and CTA */}
            <motion.div
              {...fadeUpBlur}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <a href="#projects" className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                View My Work
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white/90 flex items-center gap-2 hover:text-white hover:bg-white/5 transition-all duration-300">
                <i className="fa-regular fa-paper-plane"></i> Contact Me
              </a>
              <div className="flex gap-3 ml-2">
                <a href="https://github.com/Mohamed-Ayman01" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all" aria-label="GitHub">
                  <i className="fa-brands fa-github text-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/mohamed-elmustafa-ayman/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in text-lg"></i>
                </a>
                <a href="mailto:mohamedelmustafaayman@gmail.com" className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all" aria-label="Email">
                  <i className="fa-regular fa-envelope text-lg"></i>
                </a>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              {...fadeUpBlur}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10 w-full"
            >
              <div className="liquid-glass p-5 flex-1 min-w-[100px] max-w-[180px] rounded-[1.25rem] text-left">
                <div className="font-heading italic text-white text-4xl tracking-tight leading-none">
                  10+
                </div>
                <div className="text-xs text-white/70 font-body font-light mt-2">
                  Completed Projects
                </div>
              </div>
              <div className="liquid-glass p-5 flex-1 min-w-[100px] max-w-[180px] rounded-[1.25rem] text-left">
                <div className="font-heading italic text-white text-4xl tracking-tight leading-none">
                  4+ Yrs
                </div>
                <div className="text-xs text-white/70 font-body font-light mt-2">
                  Development Exp.
                </div>
              </div>
              <div className="liquid-glass p-5 flex-1 min-w-[100px] max-w-[180px] rounded-[1.25rem] text-left">
                <div className="font-heading italic text-white text-4xl tracking-tight leading-none">
                  5+
                </div>
                <div className="text-xs text-white/70 font-body font-light mt-2">
                  Satisfied Clients
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Avatar Image */}
          <div className="lg:col-span-5 hidden lg:flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] flex items-center justify-center"
            >
              {/* Spinning Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-accent/20 animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-[-10px] bg-gradient-to-tr from-accent/20 to-cyan-500/20 blur-2xl rounded-full opacity-60" />

              {/* Avatar Frame */}
              <div className="w-[90%] h-[90%] rounded-full overflow-hidden border border-white/10 relative z-10 liquid-glass flex items-center justify-center p-2">
              </div>


            </motion.div>
          </div>

        </div>
      </div>

      {/* Tech Stack Scrolling Band */}
      <motion.div
        {...fadeUpBlur}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
        className="relative z-10 flex flex-col items-center gap-3 pb-8 pt-6 bg-gradient-to-t from-black to-transparent"
      >
        <span className="liquid-glass rounded-full px-4 py-1 text-[11px] font-medium text-white/70 uppercase tracking-widest font-body">
          Core Technologies
        </span>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:gap-x-14 py-2 max-w-4xl px-6">
          {techStack.map((name) => (
            <span
              key={name}
              className="font-heading italic text-white/50 hover:text-white/95 text-xl md:text-2xl tracking-tight transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
