import { motion } from "framer-motion";

const fadeUpBlur = {
  initial: { filter: "blur(10px)", opacity: 0, y: 30 },
  whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const skillList = [
  { id: "01", name: "web design" },
  { id: "02", name: "web development" },
  { id: "03", name: "creativity" },
  { id: "04", name: "code review" },
  { id: "05", name: "javascript programming" },
  { id: "06", name: "3d design and animations" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 w-full bg-black/95 overflow-hidden border-t border-white/5">
      {/* Background neon ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          {...fadeUpBlur}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-xs uppercase tracking-widest">// What I Know</span>
          <h2 className="font-heading italic text-white text-5xl md:text-6xl mt-2">
            My <span className="text-accent">Skills</span>
          </h2>
          <div className="h-0.5 w-16 bg-accent mx-auto mt-4 rounded-full" />
          <p className="text-white/60 font-body text-sm md:text-base mt-4 max-w-xl mx-auto">
            Summary of my technical and professional skills.
          </p>
        </motion.div>

        {/* Remade Skills Grid from Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
          {skillList.map((skill, index) => (
            <motion.div
              key={skill.id}
              {...fadeUpBlur}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative pb-6 group cursor-pointer flex flex-col justify-end"
            >
              <div className="flex items-baseline select-none">
                <span className="font-heading italic text-4xl md:text-5xl text-white/30 group-hover:text-accent transition-colors duration-300 mr-5">
                  {skill.id}.
                </span>
                <span className="font-body text-base md:text-lg text-white/80 group-hover:text-white tracking-wider lowercase transition-colors duration-300">
                  {skill.name}
                </span>
              </div>

              {/* Base grey line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />

              {/* Glowing active/hover neon line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-cyan-500 origin-left"
                initial={{ scaleX: index === 0 ? 1 : 0 }} // Pre-highlight the first item as shown in the mockup
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
