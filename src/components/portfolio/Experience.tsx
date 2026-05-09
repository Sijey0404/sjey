import { Reveal, SectionHeading } from "./Section";
import { Briefcase, Building2 } from "lucide-react";

const timeline = [
  {
    Icon: Briefcase,
    role: "Freelance Web Developer",
    org: "Self-employed",
    period: "2022 — Present",
    bullets: [
      "Developed custom web systems for clients across academic and SMB sectors.",
      "Managed end-to-end client requirements, scoping, and timelines.",
      "Provided maintenance, performance tuning, and deployment support.",
    ],
  },
  {
    Icon: Building2,
    role: "MIS & Marketing Communications Intern",
    org: "Newtown Plaza Hotel",
    period: "Feb — Apr 2026",
    bullets: [
      "Designed promotional materials and branded collateral.",
      "Edited videos and produced marketing content for social channels.",
      "Assisted AV setup, IT support, and on-site photography & videography.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          eyebrow="Experience"
          title={<>Where I've <span className="gradient-text">contributed</span></>}
        />

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--teal)]/40 via-white/10 to-transparent" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.role} delay={i * 0.1}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-14 md:pl-0 ${i % 2 ? "md:text-left md:pl-10" : "md:text-right md:pr-10"}`}>
                    <div className={`inline-flex items-center gap-2 text-sm text-muted-foreground ${i % 2 ? "" : "md:flex-row-reverse"}`}>
                      <span className="font-mono text-[var(--teal)]">{t.period}</span>
                    </div>
                    <h3 className="mt-1 font-display font-semibold text-xl">{t.role}</h3>
                    <p className="text-muted-foreground">{t.org}</p>
                  </div>

                  <div className={`pl-14 md:pl-10 mt-4 md:mt-0 ${i % 2 ? "md:pl-10" : "md:pl-10"}`}>
                    <div className="glass rounded-2xl p-5 hover-lift">
                      <ul className="space-y-2 text-sm text-foreground/85">
                        {t.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--teal)] shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <span className="absolute left-5 md:left-1/2 -translate-x-1/2 top-2 grid h-10 w-10 place-items-center rounded-full gradient-primary text-primary-foreground shadow-glow border-4 border-background">
                    <t.Icon size={16} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
