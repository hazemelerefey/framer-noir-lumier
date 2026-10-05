"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "motion/react";
import { engagements, faqs, person, processSteps, projects, results, services, tools } from "@/content/site";
import { Big, EASE, Marquee, Reveal } from "@/components/ui";

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const tilesY = useTransform(p, [0, 1], ["0%", "-18%"]);
  const ovalScale = useTransform(p, [0, 0.7], [1, 0.55]);
  const ovalOpacity = useTransform(p, [0.35, 0.75], [1, 0]);
  const tiles = ["/media/ph/hands-light.jpg", "/media/ph/chip-mono.jpg", null, "/media/ph/silk-waves.jpg", "/media/ph/telescope.jpg"];
  return (
    <section className="hero" ref={ref}>
      <h1 className="big fit hero-name"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: EASE }}>{person.name}</motion.span></h1>
      <motion.div className="hero-row" style={{ y: tilesY }}>
        {tiles.map((t, i) => t ? (
          <motion.div key={t} className="frame hero-tile" initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.25 + i * 0.08, ease: EASE }}><img src={t} alt="" /></motion.div>
        ) : (
          <motion.div key="portrait" className="hero-oval" style={{ scale: ovalScale, opacity: ovalOpacity }} initial={{ y: 40 }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.5, ease: EASE }}><img src={person.portrait} alt={`Portrait of ${person.name}`} /></motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/** Pinned intro: a product card cycles through objects while images fly up across the statement. */
const cardShots = ["/media/ph/cpu-white.jpg", "/media/ph/microscope-white.jpg", "/media/ph/dashboard-desk.jpg", "/media/ph/robot.jpg"];
const flyers = [
  { src: "/media/ph/hex-glow.jpg", x: "4%", w: "18vw", at: 0.05 },
  { src: "/media/ph/molten-steel.jpg", x: "74%", w: "15vw", at: 0.12 },
  { src: "/media/ph/city-grid.jpg", x: "30%", w: "13vw", at: 0.3 },
  { src: "/media/ph/runner-road.jpg", x: "62%", w: "17vw", at: 0.42 },
  { src: "/media/ph/port-cranes.jpg", x: "8%", w: "16vw", at: 0.55 },
  { src: "/media/ph/dark-tech.jpg", x: "46%", w: "15vw", at: 0.66 },
];

function Flyer({ f, p }: { f: (typeof flyers)[number]; p: MotionValue<number> }) {
  const y = useTransform(p, [f.at, f.at + 0.42], ["110vh", "-70vh"]);
  return <motion.div className="frame flyer" style={{ left: f.x, width: f.w, y }}><img src={f.src} alt="" loading="lazy" /></motion.div>;
}

function Intro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [shot, setShot] = useState(0);
  useMotionValueEvent(p, "change", (v) => setShot(Math.min(cardShots.length - 1, Math.max(0, Math.floor(v * cardShots.length * 1.05)))));
  return (
    <section className="intro-pin" ref={ref}>
      <div className="intro-stick">
        <div className="intro-card">
          <AnimatePresence mode="popLayout"><motion.img key={shot} src={cardShots[shot]} alt="" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: EASE }} /></AnimatePresence>
        </div>
        <div className="intro-copy"><p className="mute intro-from">From {person.location}</p><p className="intro-text">{person.intro}</p></div>
        {flyers.map((f) => <Flyer key={f.src} f={f} p={p} />)}
      </div>
    </section>
  );
}

function Signature() {
  return <Reveal className="signature"><p className="serif">{person.name}</p></Reveal>;
}

function WorkCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  return (
    <Link href={`/projects/${p.slug}`} className={`wcard ${i % 3 === 1 ? "tall" : ""}`}>
      <div className="frame"><img src={p.cover} alt="" loading="lazy" style={p.coverPosition ? { objectPosition: p.coverPosition } : undefined} /><span className="arrow-circle">→</span></div>
      <div className="work-meta"><p>{p.title}</p><span className="mute">{p.category} · {p.year}</span></div>
    </Link>
  );
}

function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const slow = useTransform(p, [0, 1], ["6%", "-6%"]);
  const fast = useTransform(p, [0, 1], ["18%", "-18%"]);
  const list = projects.slice(0, 6);
  return (
    <section className="section" id="projects">
      <Big>My Projects</Big>
      <div className="wgrid" ref={ref}>
        <motion.div className="wcol" style={{ y: slow }}>{list.filter((_, i) => i % 2 === 0).map((p, i) => <WorkCard key={p.slug} p={p} i={i * 2} />)}</motion.div>
        <motion.div className="wcol right" style={{ y: fast }}>{list.filter((_, i) => i % 2 === 1).map((p, i) => <WorkCard key={p.slug} p={p} i={i * 2 + 1} />)}</motion.div>
      </div>
      <div className="work-nav"><Link href="/projects" className="btn">All {projects.length} projects →</Link></div>
    </section>
  );
}

function Strip({ images, dir }: { images: string[]; dir: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(p, [0, 1], dir > 0 ? ["0%", "-14%"] : ["-14%", "0%"]);
  return <div className="svc-window" ref={ref}><motion.div className="svc-strip" style={{ x }}>{images.map((im) => <div key={im} className="frame"><img src={im} alt="" loading="lazy" /></div>)}</motion.div></div>;
}

function Services() {
  return (
    <section className="section">
      <Big>What I Build</Big>
      <div className="svc">
        {services.map((s, i) => (
          <div key={s.title} className="svc-row">
            <Reveal className="svc-head">
              <div><p className="svc-num">0{i + 1}</p><h3>{s.title}</h3></div>
              <div className="card svc-quote"><p>{s.result}</p><span className="svc-by"><img src={s.images[0]} alt="" /><span><b>{s.from}</b><small className="mute">{s.sub}</small></span></span></div>
            </Reveal>
            <Strip images={s.images} dir={i % 2 ? -1 : 1} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolCard({ t, i }: { t: (typeof tools)[number]; i: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const sign = i % 2 ? 1 : -1;
  const rotate = useTransform(p, [0, 1], [sign * 16, sign * -6]);
  const x = useTransform(p, [0, 1], [`${sign * -8}%`, `${sign * 8}%`]);
  return (
    <motion.article ref={ref} className="tool-card" style={{ rotate, x }}>
      <img src={t.image} alt="" loading="lazy" />
      <h3 className="serif">{t.title[0]}<br />{t.title[1]}</h3>
      <ul>{t.items.map((it, n) => <li key={it} style={{ marginLeft: `${[40, 8, 28][n]}%` }}>{it}</li>)}</ul>
    </motion.article>
  );
}

function Tools() {
  return (
    <section className="section tools">
      <Big>Stack &amp; Tools</Big>
      <div className="tool-list">{tools.map((t, i) => <ToolCard key={t.title.join()} t={t} i={i} />)}</div>
    </section>
  );
}

function Process() {
  return (
    <section className="section">
      <Big>My Process</Big>
      <div className="proc">
        {processSteps.map((s, i) => (
          <Reveal key={s.title} className="card proc-card" delay={i * 0.08}>
            <p className="proc-bar"><span style={{ width: `${(i + 1) * 25}%` }} /> <small className="mute">Step 0{i + 1}</small></p>
            <div><h3>{s.title}</h3><p className="mute">{s.text}</p></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="section results-sec">
      <div className="results-glow" aria-hidden="true" />
      <Big>Results</Big>
      <div className="results">
        {results.map((r, i) => (
          <Reveal key={r.label} className={`result r${i}`}>
            <img src={r.image} alt="" />
            <p className="result-v">{r.value}</p>
            <p className="result-l">{r.label}</p>
            <p className="mute result-p">{r.project}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Engage() {
  return (
    <section className="section">
      <Big>Work Together</Big>
      <div className="plans">
        {engagements.map((e, i) => (
          <Reveal key={e.name} className="card plan" delay={i * 0.08}>
            <div className="plan-head"><h3>{e.name}</h3><span className="chip dark">{e.tag} →</span></div>
            <p className="plan-box">{i === 0 ? "Available now" : i === 1 ? "Scoped per project" : "Remote or on-site"}</p>
            <div><p className="mute small">Perfect for</p><p>{e.for}</p></div>
            <div><p className="mute small">Includes</p><ul>{e.features.map((f) => <li key={f}>↳ {f}</li>)}</ul></div>
            <Link href="/contact" className="btn">✦ Start a conversation</Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const fan = ["/media/ph/cpu-white.jpg", "/media/ph/hex-glow.jpg", "/media/dafesteel-banner.jpg", "/media/ph/microscope-blue.jpg", "/media/ph/bokeh-amber.jpg"];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="details" aria-hidden="true"><div className="details-track">{Array.from({ length: 8 }).map((_, i) => <span key={i}>Get in Touch <b className="serif">Y</b></span>)}</div></div>
      <div className="faq-wrap">
        <motion.div className="fan" initial="closed" whileInView="open" whileHover="spread" viewport={{ once: true, margin: "-15% 0px" }} aria-hidden="true">
          {fan.map((src, i) => <motion.img key={src} src={src} alt="" variants={{ closed: { rotate: 0, x: 0, y: 0 }, open: { rotate: (i - 2) * 9, x: (i - 2) * 26, y: Math.abs(i - 2) * 10 }, spread: { rotate: (i - 2) * 15, x: (i - 2) * 46, y: Math.abs(i - 2) * 16 } }} transition={{ duration: 0.9, ease: EASE }} style={{ zIndex: 5 - Math.abs(i - 2) }} />)}
        </motion.div>
        <div className="faq">
          {faqs.map(([q, a], i) => (
            <div key={q} className="faq-item">
              <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span className="mute">0{i + 1}</span><span>{q}</span><span aria-hidden="true">{open === i ? "−" : "+"}</span></button>
              <AnimatePresence initial={false}>{open === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: EASE }}>{a}</motion.p>}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <Signature />
      <Work />
      <Services />
      <Tools />
      <Marquee />
      <Process />
      <Results />
      <Engage />
      <Faq />
    </>
  );
}
