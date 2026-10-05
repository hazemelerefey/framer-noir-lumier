import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/site";
import { Big, Reveal } from "@/components/ui";

export const metadata: Metadata = { title: "Projects", description: "Computer vision, predictive modelling, customer analytics and SQL data engineering projects by Youssef Sherif." };

export default function Projects() {
  return (
    <section className="phead">
      <Big as="h1" className="fit">My Projects</Big>
      <div className="pgrid">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <Link href={`/projects/${p.slug}`} className="work-card" style={{ flex: "none" }}>
              <div className="frame"><img src={p.cover} alt="" loading="lazy" /><span className="arrow-circle">→</span></div>
              <div className="work-meta"><p>{p.title}</p><span className="mute">{p.category} · {p.year}</span></div>
              <p className="mute" style={{ fontSize: 14, maxWidth: 520 }}>{p.summary}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
