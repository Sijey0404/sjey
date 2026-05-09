import { Award, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";

const certs = [
  {
    title: "AI at Work: Analyze Customer Reviews",
    issuer: "Cisco",
    date: "Sep 2025",
  },
  {
    title: "Introduction to Data Science and scikit-learn in Python",
    issuer: "LearnQuest",
    date: "Nov 2024",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Certifications"
          title={<>Continuous <span className="gradient-text">learning</span></>}
        />
        <div className="grid md:grid-cols-2 gap-5">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group relative glass rounded-2xl p-6 hover-lift overflow-hidden">
                <div className="absolute -top-12 -right-12 h-40 w-40 gradient-primary opacity-20 blur-2xl rounded-full" />
                <div className="flex items-start justify-between gap-4 relative">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow shrink-0">
                      <Award size={20} />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold leading-snug">{c.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {c.issuer} · <span className="text-[var(--teal)]">{c.date}</span>
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-foreground transition opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
