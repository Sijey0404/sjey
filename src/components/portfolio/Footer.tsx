import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-muted-foreground flex items-center gap-1.5">
          Designed & developed with <Heart size={14} className="text-[var(--violet)]" /> by{" "}
          <span className="text-foreground font-medium">Chris Justine Ventenilla</span>
        </p>
        <div className="flex items-center gap-2">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid h-9 w-9 place-items-center rounded-lg glass hover:gradient-primary hover:text-primary-foreground transition"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
