"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { engagements, faqs, person, processSteps, projects, results, services, tools } from "@/content/site";
import { Big, EASE, Marquee, Reveal } from "@/components/ui";

function Hero() {
  const tiles = ["/media/steel-class-0.jpg", "/media/art-network.jpg", null, "/media/ai-figure-dark.jpg", "/media/detect-scratches.jpg"];
  return (
    <section className="hero">
      <h1 className="big fit hero-name"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: EASE }}>{person.name}</motion.span></h1>
      <div className="hero-row">
        {tiles.map((t, i) => t ? (
          <motion.div key={t} className="frame hero-tile" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25 + i * 0.08, ease: EASE }}><img src={t} alt="" /></motion.div>
        ) : (
          <motion.div key="portrait" className="hero-oval" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.5, ease: EASE }}><img src={person.portrait} alt={`Portrait of ${person.name}`} /></motion.div>
        ))}
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro">
      <Reveal className="frame intro-img"><img src="/media/detect-crazing.jpg" alt="DAFEGate detecting a crazing defect on steel" /></Reveal>
      <Reveal className="intro-copy" delay={0.1}><p className="mute intro-from">From {person.location}</p><p className="intro-text">{person.intro}</p></Reveal>
    </section>
  );
}

function Float({ src, x, y, w, speed, p }: { src: string; x: string; y: string; w: string; speed: number; p: MotionValue<number> }) {
  const ty = useTransform(p, [0, 1], [`${speed * 40}vh`, `${-speed * 40}vh`]);
  return <motion.div className="frame float" style={{ left: x, top: y, width: w, y: ty }}><img src={src} alt="" loading="lazy" /></motion.div>;
}

function Scatter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const items = [
    { src: "/media/detect-pitted.jpg", x: "2%", y: "4%", w: "22%", speed: 0.5 },
    { src: "/media/art-kmeans.jpg", x: "80%", y: "0%", w: "17%", speed: 0.9 },
    { src: "/media/geometry.jpg", x: "38%", y: "18%", w: "22%", speed: 0.3 },
    { src: "/media/art-flow.jpg", x: "1%", y: "44%", w: "26%", speed: 0.7 },
    { src: "/media/ai-figure-city.jpg", x: "76%", y: "46%", w: "21%", speed: 0.4 },
    { src: "/media/steel-class-5.jpg", x: "40%", y: "64%", w: "21%", speed: 0.8 },
  ];
  return (
    <section ref={ref} className="scatter" aria-label="Visual index">
      <p className="serif scatter-name">{person.name}</p>
      {items.map((it) => <Float key={it.src} {...it} p={scrollYProgress} />)}
    </section>
  );
}

function Work() {
  const track = useRef<HTMLDivElement>(null);
  const go = (d: number) => track.current?.scrollBy({ left: d * (track.current.clientWidth * 0.6), behavior: "smooth" });
  return (
    <section className="section" id="projects">
      <Big>My Projects</Big>
      <div className="work-track" ref={track}>
        {projects.map((p, i) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className={`work-card ${i % 2 ? "low" : ""}`}>
            <div className="frame"><img src={p.cover} alt="" loading="lazy" /><span className="arrow-circle">→</span></div>
            <div className="work-meta"><p>{p.title}</p><span className="mute">{p.category} · {p.year}</span></div>
          </Link>
        ))}
      </div>
      <div className="work-nav"><button type="button" className="btn ghost" onClick={() => go(-1)} aria-label="Previous projects">←</button><button type="button" className="btn ghost" onClick={() => go(1)} aria-label="Next projects">→</button><Link href="/projects" className="btn">All projects</Link></div>
    </section>
  );
}

function Services() {
  return (
    <section className="section">
      <Big>What I Build</Big>
      <div className="svc">
        {services.map((s, i) => (
          <Reveal key={s.title} className="svc-row">
            <div className="svc-head">
              <div><p className="svc-num">0{i + 1}</p><h3>{s.title}</h3></div>
              <div className="card svc-quote"><p>{s.result}</p><span className="svc-by"><img src={s.images[0]} alt="" /><span><b>{s.from}</b><small className="mute">{s.sub}</small></span></span></div>
            </div>
            <div className="svc-strip">{s.images.map((im) => <div key={im} className="frame"><img src={im} alt="" loading="lazy" /></div>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section className="section tools">
      <Big>Stack &amp; Tools</Big>
      <div className="tool-list">
        {tools.map((t, i) => (
          <motion.article key={t.title.join()} className="tool-card" style={{ rotate: i % 2 ? 6 : -6 }} initial={{ opacity: 0, y: 80, rotate: 0 }} whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 6 : -6 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 1, ease: EASE }}>
            <img src={t.image} alt="" loading="lazy" />
            <h3 className="serif">{t.title[0]}<br />{t.title[1]}</h3>
            <ul>{t.items.map((x, n) => <li key={x} style={{ marginLeft: `${[40, 8, 28][n]}%` }}>{x}</li>)}</ul>
          </motion.article>
        ))}
      </div>
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

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="details" aria-hidden="true"><div className="details-track">{Array.from({ length: 8 }).map((_, i) => <span key={i}>Get in Touch <b className="serif">Y</b></span>)}</div></div>
      <div className="faq-wrap">
        <motion.img className="faq-img" src="/media/geometry.jpg" alt="" initial={{ rotate: -14, opacity: 0 }} whileInView={{ rotate: -6, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: EASE }} />
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
      <Scatter />
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
