import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import avatar from "@/assets/avatar.png";

const roles = [
  "Full-Stack Web Developer",
  "Multimedia Designer",
];

function useTyper(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      const next = del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((n) => n + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const typed = useTyper(roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="blob bg-[oklch(0.78_0.16_195)] w-[420px] h-[420px] -top-20 -left-20 animate-blob" />
      <div className="blob bg-[oklch(0.68_0.22_300)] w-[460px] h-[460px] top-40 -right-24 animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="blob bg-[oklch(0.70_0.18_250)] w-[360px] h-[360px] bottom-0 left-1/3 animate-blob" style={{ animationDelay: "-12s" }} />

      <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles size={14} className="text-[var(--teal)]" />
            Available for Employment and freelance projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-balance"
          >
            Chris Justine{" "}
            <span className="gradient-text">Ventenilla</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl font-display"
          >
            <span className="text-muted-foreground">I'm a </span>
            <span className="gradient-text font-semibold">{typed}</span>
            <span className="inline-block w-[2px] h-6 align-middle ml-1 bg-[var(--teal)] animate-pulse" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 max-w-xl text-muted-foreground text-lg leading-relaxed"
          >
            I build modern web systems and digital experiences that combine functionality,
            creativity, and user-focused design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl gradient-primary text-primary-foreground font-medium px-5 py-3 shadow-glow hover:shadow-violet transition-all"
            >
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 font-medium hover:border-[var(--teal)]/40 transition"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-muted-foreground hover:text-foreground transition"
            >
              <Download size={18} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Connect</span>
            <span className="h-px w-10 bg-border" />
            {[
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Mail, href: "#contact" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="grid h-10 w-10 place-items-center rounded-lg glass hover:gradient-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 gradient-primary blur-3xl opacity-40 rounded-full" />
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-[2rem] gradient-primary opacity-50 blur-2xl" />
            <div className="relative rounded-[2rem] glass-strong p-3 shadow-elegant">
              <img
                src={avatar}
                alt="Chris Justine Ventenilla"
                width={420}
                height={420}
                className="w-[280px] sm:w-[360px] md:w-[420px] rounded-[1.5rem]"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-strong rounded-xl px-4 py-2 text-sm shadow-elegant">
              <span className="text-muted-foreground">3+ yrs</span>{" "}
              <span className="font-semibold">Freelancing</span>
            </div>
            <div className="absolute -top-4 -right-4 glass-strong rounded-xl px-4 py-2 text-sm shadow-elegant">
              <span className="gradient-text font-semibold">Web Dev</span>
              <span className="text-muted-foreground"> & Multimedia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
