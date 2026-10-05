"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { person, socials, highlights } from "@/content/site";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Live clock in Youssef's timezone, like the reference's "London / 07:41:51". */
function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: person.timezone, hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return <p className="top-clock"><b>{person.city}</b> / {t || "--:--:--"}</p>;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
];

export function TopBar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  return (
    <>
      <header className="top">
        <p className="top-soc">{socials.map((s, i) => <span key={s.short} style={{ display: "contents" }}>{i > 0 && <span>/</span>}<a href={s.href} aria-label={s.label} target={s.href.startsWith("http") || s.href.endsWith(".pdf") ? "_blank" : undefined} rel="noopener noreferrer">{s.short}</a></span>)}</p>
        <Clock />
        <button className="top-menu" type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><i /></button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="menu" role="dialog" aria-modal="true" aria-label="Site menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.6, ease: EASE }}>
            <div className="menu-head"><span>{person.name} — {person.role}</span><button className="menu-close" type="button" onClick={() => setOpen(false)}>Close ✕</button></div>
            <nav aria-label="Main">
              {links.map((l, i) => (
                <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined}>
                  <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: EASE }}>{l.label}</motion.span>
                  <small>0{i + 1}</small>
                </Link>
              ))}
            </nav>
            <div className="menu-foot"><a href={`mailto:${person.email}`}>{person.email}</a><span>{person.location}</span><a href={person.cv} target="_blank" rel="noopener noreferrer">Download CV ↗</a></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Marquee({ items = highlights }: { items?: string[] }) {
  const all = [...items, ...items];
  return <div className="marquee" aria-label="Highlights"><div className="marquee-track">{all.map((t, i) => <span key={i} aria-hidden={i >= items.length}>{t}</span>)}</div></div>;
}

/** Huge display title whose words rise into view. */
export function Big({ children, className = "", as = "h2" }: { children: string; className?: string; as?: "h1" | "h2" }) {
  const Tag = motion[as];
  return (
    <Tag className={`big ${className}`} initial="h" whileInView="s" viewport={{ once: true, margin: "-10% 0px" }}>
      {children.split(" ").map((w, i) => <motion.span key={i} variants={{ h: { y: "100%" }, s: { y: 0 } }} transition={{ duration: 1, delay: i * 0.08, ease: EASE }}>{w}{"\u00a0"}</motion.span>)}
    </Tag>
  );
}

export function Reveal({ children, delay = 0, className, y = 30 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -8% 0px" }} transition={{ duration: 0.9, delay, ease: EASE }}>{children}</motion.div>;
}

export function Footer() {
  const strip = ["/media/detect-crazing.jpg", "/media/art-kmeans.jpg", "/media/steel-class-4.jpg", "/media/art-roc.jpg", "/media/ai-figure-dark.jpg", "/media/art-network.jpg", "/media/detect-pitted.jpg"];
  return (
    <footer>
      <section className="cta" aria-labelledby="cta-title">
        <h2 id="cta-title">Let&apos;s Build Your<br />Next Model</h2>
        <ul><li><Link href="/projects">Projects</Link></li><li><Link href="/about">About &amp; experience</Link></li><li><Link href="/notes">Project notes</Link></li><li><Link href="/contact">Get in touch</Link></li></ul>
        <ul><li><a href={`mailto:${person.email}`}>{person.email}</a></li><li><a href={person.phoneHref}>{person.phone}</a></li><li><a href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li><li><a href={person.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></li></ul>
      </section>
      <div className="cta-strip" aria-hidden="true">{strip.map((s) => <div key={s} className="frame"><img src={s} alt="" loading="lazy" /></div>)}</div>
      <p className="foot-word" aria-hidden="true">{person.name}</p>
      <div className="foot-bar"><span>© {new Date().getFullYear()} {person.name}</span><span>Designed by <b>Hazem Elerefy</b></span><a href={person.cv} target="_blank" rel="noopener noreferrer">Résumé (PDF) ↗</a></div>
    </footer>
  );
}
