import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's build something <span className="gradient-text">great</span></>}
          subtitle="Open to freelance projects, internships, and collaborations. Drop a message and I'll get back within 24 hours."
        />

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-6">
          <Reveal>
            <div className="glass rounded-2xl p-6 h-full flex flex-col gap-5">
              {[
                { Icon: Mail, label: "Email", value: "ventenillachris@gmail.com" },
                { Icon: Phone, label: "Phone", value: "+639952176139" },
                { Icon: MapPin, label: "Location", value: "Pangasinan, Philippines" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}

              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Socials</p>
                <div className="flex gap-2">
                  {[
                    { Icon: Github, href: "#" },
                    { Icon: Linkedin, href: "#" },
                    { Icon: Mail, href: "#" },
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="grid h-10 w-10 place-items-center rounded-lg glass-strong hover:gradient-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3500);
                (e.target as HTMLFormElement).reset();
              }}
              className="glass rounded-2xl p-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="Project inquiry" />
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[var(--teal)]/50 focus:ring-2 focus:ring-[var(--teal)]/20 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-primary text-primary-foreground font-medium px-5 py-3 shadow-glow hover:shadow-violet transition-all"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Message sent
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[var(--teal)]/50 focus:ring-2 focus:ring-[var(--teal)]/20 transition"
      />
    </div>
  );
}
