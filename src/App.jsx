import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black min-h-screen">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-black text-center border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-xs md:text-sm text-white/40 font-body font-light">
          <p>
            Designed & Built by <span className="text-white/60 font-semibold">Mohamed E. Ayman</span> · {currentYear}
          </p>
        </div>
      </footer>
    </div>
  );
}
