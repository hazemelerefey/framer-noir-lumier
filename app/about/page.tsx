import type { Metadata } from "next";
import { education, experience, person, skills } from "@/content/site";
import { Big, Marquee, Reveal } from "@/components/ui";

export const metadata: Metadata = { title: "About", description: person.summary };

export default function About() {
  return (
    <>
      <section className="phead">
        <Big as="h1" className="fit">Behind the Model</Big>
        <div className="phead-row"><span className="serif-tag">{person.name}</span><p>{person.roleLong}, building models people can trust.</p></div>
        <Reveal className="frame phead-img"><img src="/media/ai-figure-dark.jpg" alt="" /></Reveal>
        <div className="phead-info"><a href={`mailto:${person.email}`}>{person.email}</a><span>Based in {person.location}</span><a href={person.phoneHref}>{person.phone}</a></div>
      </section>

      <section className="story">
        <div className="portrait-card"><img src={person.portrait} alt={`Portrait of ${person.name}`} /></div>
        <div>
          <p className="mute" style={{ fontSize: 13, marginBottom: 12 }}>My story</p>
          <Reveal><p className="lead">From biotechnology to machine learning — I read a dataset for the decision hiding inside it.</p></Reveal>
          <Reveal className="body" delay={0.1}>
            <p>{person.summary}</p>
            <p>Today I&apos;m an Applied AI &amp; Data Analytics trainee in Egypt&apos;s nine-month Digilians scholarship (MCIT). Recent work includes DAFEGate, a morphology-aware module for YOLOv11n published as an arXiv preprint, and predictive models that put recall where it costs money to miss.</p>
            <p>Before data, I spent years in social media and marketing analytics, reporting performance across seven client accounts — the habit of translating numbers for non-technical people started there.</p>
          </Reveal>
          <p className="mute" style={{ fontSize: 13, marginTop: 30 }}>Directed by: {person.name}</p>
        </div>
      </section>

      <Marquee />

      <section className="section" id="experience">
        <Big>Experience</Big>
        <div className="timeline">
          {experience.map((e) => (
            <Reveal key={e.title + e.period} className="tl">
              <p className="mute">{e.period}</p>
              <div><h3>{e.title}</h3><p className="mute">{e.org}</p><ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Big>Skills</Big>
        <div className="grid2">{skills.map(([k, v]) => <Reveal key={k} className="card"><b>{k}</b><span className="mute">{v}</span></Reveal>)}</div>
      </section>

      <section className="section">
        <Big>Education</Big>
        <div className="grid2">{education.map((e) => <Reveal key={e.title} className="card"><b>{e.title}</b><span className="mute">{e.org} · {e.period}</span></Reveal>)}</div>
        <p style={{ padding: "30px var(--pad) 0" }}><a className="btn" href={person.cv} target="_blank" rel="noopener noreferrer">View full CV (PDF) ↗</a></p>
      </section>
    </>
  );
}
