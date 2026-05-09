import { GraduationCap, Briefcase, Building2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";

const items = [
  {
    Icon: GraduationCap,
    title: "Education",
    role: "BS Information Technology",
    org: "Pangasinan State University",
    period: "2021 — 2026",
    desc: "Focused on software engineering, databases, and web systems.",
  },
  {
    Icon: Briefcase,
    title: "Work Experience",
    role: "Freelance Web Developer",
    org: "Self-employed",
    period: "2022 — Present",
    desc: "Custom web systems built with PHP, Laravel, MySQL, and modern JS.",
  },
  {
    Icon: Building2,
    title: "Internship",
    role: "MIS & Marketing Communications Intern",
    org: "Newtown Plaza Hotel",
    period: "Feb — Apr 2026",
    desc: "Designed promotional materials, edited videos, and supported IT operations.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="About Me"
          title={<>Designing systems with <span className="gradient-text">purpose</span></>}
          subtitle="A BS Information Technology student at Pangasinan State University and freelance developer since 2022 — blending engineering, design, and creative multimedia to build experiences people love to use."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {items.map(({ Icon, title, role, org, period, desc }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="group relative h-full glass rounded-2xl p-6 hover-lift">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
                    <p className="font-display font-semibold">{role}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-foreground/90">{org}</span>
                  <span className="text-muted-foreground">{period}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { n: "5+", l: "Projects shipped" },
            { n: "3+", l: "Years freelancing" },
            { n: "5+", l: "Happy clients" },
            { n: "10+", l: "Tech stack" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <div className="glass rounded-2xl p-5 text-center hover-lift">
                <p className="text-3xl font-bold gradient-text">{s.n}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
