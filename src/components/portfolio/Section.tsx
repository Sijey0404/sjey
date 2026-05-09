import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center mb-14"
    >
      <span className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--teal)] font-medium">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
