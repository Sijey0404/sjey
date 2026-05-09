import { useState } from "react";
import { ExternalLink, Github, FolderKanban, Boxes, GraduationCap, CalendarDays, Film, Palette, Camera } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: "Web App" | "System" | "Dashboard";
  Icon: typeof FolderKanban;
  accent: string;
  live?: string;
  repo?: string;
};

type Multimedia = {
  title: string;
  description: string;
  tags: string[];
  category: "Video Edit" | "Graphic Design" | "Photography";
  Icon: typeof FolderKanban;
  accent: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "PSU SC Document Management System",
    description:
      "A web-based platform for academic document submission, approval workflows, and accreditation preparation.",
    tech: ["Laravel", "MySQL", "TailwindCSS", "JavaScript"],
    category: "System",
    Icon: FolderKanban,
    accent: "from-[oklch(0.78_0.16_195)] to-[oklch(0.70_0.18_250)]",
    live: "https://psusc-documentmanagement.vercel.app/",
    repo: "https://github.com/Sijey0404/psusc-documentmanagement",
  },
  {
    title: "Student Portal System",
    description:
      "All-in-one student dashboard with grades, schedules, announcements, and integrated messaging.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    category: "Web App",
    Icon: GraduationCap,
    accent: "from-[oklch(0.70_0.18_250)] to-[oklch(0.68_0.22_300)]",
    live: "#",
    repo: "#",
  },
  {
    title: "Inventory Tracking System",
    description:
      "Real-time inventory and stock movement tracker with role-based access and reports.",
    tech: ["PHP", "MySQL", "TailwindCSS"],
    category: "Dashboard",
    Icon: Boxes,
    accent: "from-[oklch(0.68_0.22_300)] to-[oklch(0.78_0.16_195)]",
    live: "#",
    repo: "#",
  },
  {
    title: "Appointment Management System",
    description:
      "Booking and scheduling app with email reminders, calendar sync, and admin analytics.",
    tech: ["Laravel", "JavaScript", "MySQL"],
    category: "Web App",
    Icon: CalendarDays,
    accent: "from-[oklch(0.82_0.15_190)] to-[oklch(0.68_0.22_300)]",
    live: "#",
    repo: "#",
  },
];

const filters = ["All", "Web App", "System", "Dashboard"] as const;

const multimedia: Multimedia[] = [
  {
    title: "Promotional Video Reel",
    description:
      "Short-form promotional edits for hotel campaigns and events — color grading, motion, and sound design.",
    tags: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    category: "Video Edit",
    Icon: Film,
    accent: "from-[oklch(0.78_0.16_195)] to-[oklch(0.68_0.22_300)]",
    link: "#",
  },
  {
    title: "Branding & Social Graphics",
    description:
      "Posters, social media creatives, and brand collateral with a clean, modern visual language.",
    tags: ["Photoshop", "Illustrator", "Figma"],
    category: "Graphic Design",
    Icon: Palette,
    accent: "from-[oklch(0.70_0.18_250)] to-[oklch(0.82_0.15_190)]",
    link: "#",
  },
  {
    title: "Event & Product Photography",
    description:
      "On-location event coverage and product shots with emphasis on lighting, composition, and mood.",
    tags: ["Lightroom", "Photoshop"],
    category: "Photography",
    Icon: Camera,
    accent: "from-[oklch(0.68_0.22_300)] to-[oklch(0.78_0.16_195)]",
    link: "#",
  },
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Projects"
          title={<>Selected <span className="gradient-text">work</span></>}
          subtitle="A handful of systems I've designed and built — from academic platforms to client tools."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                filter === f
                  ? "gradient-primary text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group relative glass rounded-2xl overflow-hidden hover-lift h-full flex flex-col">
                <div className={`relative h-44 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 grid place-items-center">
                    <p.Icon size={64} className="text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-black/30 backdrop-blur text-white">
                    {p.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-semibold text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm rounded-lg gradient-primary text-primary-foreground px-3 py-2 hover:opacity-90 transition"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm rounded-lg glass-strong px-3 py-2 hover:border-[var(--teal)]/40 transition"
                    >
                      <Github size={14} /> Repository
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Multimedia Projects"
            title={<>Creative <span className="gradient-text">multimedia</span></>}
            subtitle="Beyond code — a selection of video edits, graphic designs, and photography work."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {multimedia.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <article className="group relative glass rounded-2xl overflow-hidden hover-lift h-full flex flex-col">
                  <div className={`relative h-44 bg-gradient-to-br ${m.accent} overflow-hidden`}>
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute inset-0 grid place-items-center">
                      <m.Icon size={64} className="text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-black/30 backdrop-blur text-white">
                      {m.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display font-semibold text-xl">{m.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {m.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {m.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-2">
                      <a
                        href={m.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm rounded-lg gradient-primary text-primary-foreground px-3 py-2 hover:opacity-90 transition"
                      >
                        <ExternalLink size={14} /> View Work
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
