import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 ${
            scrolled ? "glass-strong shadow-elegant" : "glass"
          }`}
        >
          <button onClick={() => go("home")} className="flex items-center gap-2 group">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-primary text-primary-foreground font-display font-bold shadow-glow">
              C
            </span>
            <span className="font-display font-semibold tracking-tight">
              Chris<span className="gradient-text">.dev</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`relative px-3 py-2 text-sm rounded-lg transition-colors ${
                  active === l.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/5 border border-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <button
            onClick={() => go("contact")}
            className="hidden md:inline-flex items-center rounded-lg gradient-primary text-primary-foreground text-sm font-medium px-4 py-2 shadow-glow hover:opacity-90 transition"
          >
            Hire Me
          </button>

          <button
            className="md:hidden grid place-items-center h-9 w-9 rounded-lg glass"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 glass-strong rounded-2xl p-2 md:hidden"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm ${
                  active === l.id ? "text-foreground bg-white/5" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
