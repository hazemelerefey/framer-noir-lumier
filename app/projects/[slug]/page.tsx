import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import { Reveal } from "@/components/ui";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary, openGraph: { images: [p.cover] } } : {};
}

/** Charts exported from notebooks have white backgrounds; generated art and photos are dark. */
const dark = (src: string) => /\/(ph\/|neuroscope|ai-figure|geometry|dafesteel-banner)/.test(src);

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const p = projects[i], next = projects[(i + 1) % projects.length];
  return (
    <>
      <div className="pd-head">
        <h1 className="big">{p.title}</h1>
        <div className="pd-meta">
          <span>Category <b className="chip">{p.category}</b></span>
          <span>Stack <b className="chip">{p.stack.slice(0, 3).join(" · ")}</b></span>
          <span>Year <b className="chip">{p.year}</b></span>
        </div>
      </div>
      <Reveal className="frame pd-cover"><img src={p.cover} alt={p.title} /></Reveal>

      <section className="pd-cols">
        <div><p className="mute" style={{ fontSize: 13 }}>{p.kicker}</p>{p.role && <p style={{ marginTop: 14, fontSize: 14 }}><span className="mute">Role — </span>{p.role}</p>}<p style={{ marginTop: 24 }}><a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">View repository ↗</a></p></div>
        <div>
          <Reveal><p className="lead">{p.summary}</p></Reveal>
          <h3>The problem</h3><p style={{ color: "#dcdcdc" }}>{p.problem}</p>
          <h3>Approach</h3><ul>{p.approach.map((a) => <li key={a}>{a}</li>)}</ul>
          <h3>Results</h3><ul>{p.results.map((a) => <li key={a}>{a}</li>)}</ul>
          {p.note && <><h3>Note</h3><p className="mute">{p.note}</p></>}
          <h3>Full stack</h3><p style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{p.stack.map((s) => <span key={s} className="chip dark">{s}</span>)}</p>
        </div>
      </section>

      <div className="pd-nums">{p.metrics.map(([v, l]) => <Reveal key={l} className="card"><b>{v}</b><span className="mute">{l}</span></Reveal>)}</div>

      <div className="pd-gal">{p.gallery.map((g) => <figure key={g} className={dark(g) ? "dark" : ""}><img src={g} alt={`${p.title} figure`} loading="lazy" /></figure>)}</div>

      <nav className="pd-next" aria-label="Next project">
        <Link href="/projects"><span className="mute">Back to</span><b>All projects</b></Link>
        <Link href={`/projects/${next.slug}`} style={{ textAlign: "right" }}><span className="mute">Next project</span><b>{next.title} →</b></Link>
      </nav>
    </>
  );
}
