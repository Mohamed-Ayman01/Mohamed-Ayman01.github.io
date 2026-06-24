import { useState } from "react";
import { motion } from "framer-motion";

const fadeUpBlur = {
  initial: { filter: "blur(10px)", opacity: 0, y: 30 },
  whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 w-full bg-black overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <motion.div
          {...fadeUpBlur}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-xs uppercase tracking-widest">// Get In Touch</span>
          <h2 className="font-heading italic text-white text-5xl md:text-6xl mt-2">
            Contact <span className="text-accent">Me</span>
          </h2>
          <div className="h-0.5 w-16 bg-accent mx-auto mt-4 rounded-full" />
          <p className="text-white/60 font-body text-sm md:text-base mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              {...fadeUpBlur}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="liquid-glass full-border rounded-xl p-6 border border-white/5 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg liquid-glass full-border flex items-center justify-center text-accent">
                <i className="fa-solid fa-location-dot text-xl" />
              </div>
              <div>
                <h4 className="text-white font-semibold font-body text-base">Location</h4>
                <p className="text-white/60 font-body font-light text-sm mt-1">UAE</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUpBlur}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="liquid-glass full-border rounded-xl p-6 border border-white/5 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg liquid-glass full-border flex items-center justify-center text-accent">
                <i className="fa-regular fa-envelope text-xl" />
              </div>
              <div>
                <h4 className="text-white font-semibold font-body text-base">Email</h4>
                <a href="mailto:dev.mohamedayman0@gmail.com" className="text-white/60 hover:text-white font-body font-light text-sm mt-1 block transition-colors">
                  dev.mohamedayman0@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              {...fadeUpBlur}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="liquid-glass full-border rounded-xl p-6 border border-white/5 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg liquid-glass full-border flex items-center justify-center text-accent">
                <i className="fa-brands fa-github text-xl" />
              </div>
              <div>
                <h4 className="text-white font-semibold font-body text-base">GitHub</h4>
                <a href="https://github.com/Mohamed-Ayman01" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white font-body font-light text-sm mt-1 block transition-colors">
                  Mohamed-Ayman01
                </a>
              </div>
            </motion.div>

            {/* Social Buttons */}
            <motion.div
              {...fadeUpBlur}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 mt-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/Mohamed-Ayman01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl liquid-glass full-border border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:scale-105 hover:bg-white/5 transition-all text-xl"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-elmustafa-ayman/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl liquid-glass full-border border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:scale-105 hover:bg-white/5 transition-all text-xl"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              {...fadeUpBlur}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="liquid-glass full-border rounded-2xl p-8 border border-white/5 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-white/80 text-xs uppercase tracking-wider font-semibold font-body">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-body focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white/80 text-xs uppercase tracking-wider font-semibold font-body">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-body focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-white/80 text-xs uppercase tracking-wider font-semibold font-body">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-body focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-white/80 text-xs uppercase tracking-wider font-semibold font-body">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-sm font-body focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-white text-black hover:bg-white/95 rounded-full py-4 text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-regular fa-paper-plane" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Form Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="liquid-glass border border-green-500/30 rounded-xl p-4 flex items-center gap-3 text-green-400 font-body text-sm"
                  >
                    <i className="fa-solid fa-circle-check text-lg" />
                    <span>Message sent successfully! I will get back to you soon.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
