import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { notes, person } from "@/content/site";
import { Reveal } from "@/components/ui";

export function generateStaticParams() { return notes.map((n) => ({ slug: n.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const n = notes.find((x) => x.slug === slug);
  return n ? { title: n.title, description: n.excerpt } : {};
}

export default async function Note({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = notes.find((x) => x.slug === slug);
  if (!n) notFound();
  return (
    <>
      <div className="pd-head">
        <h1 className="big" style={{ fontSize: "min(8vw, 120px)" }}>{n.title}</h1>
        <div className="pd-meta"><span>Author <b className="chip">{person.name}</b></span><span>Topic <b className="chip">{n.topic}</b></span><span>Read <b className="chip">{n.read}</b></span></div>
      </div>
      <Reveal className="frame pd-cover"><img src={n.cover} alt="" /></Reveal>
      <article className="article" style={{ paddingTop: 60 }}>
        <p style={{ fontFamily: "Cabinet", fontSize: 28, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.02em" }}>{n.excerpt}</p>
        {n.body.map((b) => <Reveal key={b}><p>{b}</p></Reveal>)}
        <p><Link className="btn ghost" href="/notes">← All notes</Link></p>
      </article>
    </>
  );
}
