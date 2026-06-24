import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "./Icons";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 px-6 lg:px-16 z-50 flex flex-col gap-2">
      <div className="w-full flex items-center justify-between">
        <a href="#home" className="liquid-glass px-4 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
          <span className="font-heading italic text-white text-lg tracking-wide">&lt;MEA /&gt;</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white font-body transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1 whitespace-nowrap hover:bg-white/90 transition-colors duration-300"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden liquid-glass w-12 h-12 rounded-full flex flex-col items-center justify-center gap-1 text-white/80 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-5 bg-white rounded-full transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`h-0.5 w-5 bg-white rounded-full transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-white rounded-full transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>

        <div className="w-[84px] h-12 invisible lg:block hidden" />
      </div>

      {/* Mobile Links Dropdown Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-2 border border-white/5 shadow-2xl mt-1"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white font-body rounded-xl hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-white text-black text-center rounded-full py-2.5 text-sm font-semibold flex items-center justify-center gap-1 hover:bg-white/90 transition-all mt-2"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      )}
    </nav>
  );
}
