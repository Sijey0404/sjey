import {
  Code2, Braces, FileCode, Palette, Wind, Layers, Github, Terminal,
  Server, Cloud, Database, Table2, Image as ImageIcon, Video, Camera,
  Film, Megaphone, FileText, Lightbulb, MessageCircle,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Section";

const groups = [
  {
    title: "Programming & Development",
    items: [
      { n: "PHP", I: Code2 },
      { n: "JavaScript", I: Braces },
      { n: "HTML", I: FileCode },
      { n: "CSS", I: Palette },
      { n: "Bootstrap", I: Layers },
      { n: "TailwindCSS", I: Wind },
    ],
  },
  {
    title: "Frameworks & Tools",
    items: [
      { n: "Laravel", I: Server },
      { n: "GitHub", I: Github },
      { n: "Visual Studio", I: Terminal },
      { n: "XAMPP", I: Server },
      { n: "Vercel", I: Cloud },
    ],
  },
  {
    title: "Database Management",
    items: [
      { n: "MySQL", I: Database },
      { n: "SQL Server", I: Table2 },
    ],
  },
  {
    title: "Creative & Multimedia",
    items: [
      { n: "Graphic Design", I: ImageIcon },
      { n: "Video Editing", I: Video },
      { n: "Photography", I: Camera },
      { n: "Videography", I: Film },
      { n: "Social Media Marketing", I: Megaphone },
      { n: "System Documentation", I: FileText },
      { n: "Problem Solving", I: Lightbulb },
      { n: "Client Communication", I: MessageCircle },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title={<>A versatile <span className="gradient-text">toolkit</span></>}
          subtitle="From backend engineering to creative production — the stack I use to ship beautiful, reliable products."
        />

        <div className="space-y-8">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.05}>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display font-semibold text-lg">{g.title}</h3>
                  <span className="text-xs text-muted-foreground">{g.items.length} skills</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {g.items.map(({ n, I }) => (
                    <div
                      key={n}
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 hover:border-[var(--teal)]/40 hover:bg-white/[0.05] transition-all hover:-translate-y-0.5"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-lg gradient-primary/0 bg-white/5 text-[var(--teal)] group-hover:gradient-primary group-hover:text-primary-foreground transition">
                        <I size={16} />
                      </span>
                      <span className="text-sm font-medium truncate">{n}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
