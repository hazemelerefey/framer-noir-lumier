import type { Metadata } from "next";
import Link from "next/link";
import { notes, person } from "@/content/site";
import { Big, Reveal } from "@/components/ui";

export const metadata: Metadata = { title: "Notes", description: "Short project notes from Youssef Sherif on modelling choices, data engineering and computer vision." };

export default function Notes() {
  return (
    <section className="phead">
      <Big as="h1" className="fit">Project Notes</Big>
      <div className="notes">
        {notes.map((n) => (
          <Reveal key={n.slug}>
            <Link href={`/notes/${n.slug}`} className="note">
              <div className="note-meta"><span className="mute">Author <b className="chip">{person.name}</b></span><span className="mute">Topic <b className="chip">{n.topic}</b></span><span className="mute">Read time <b className="chip">{n.read}</b></span></div>
              <div className="frame"><img src={n.cover} alt="" loading="lazy" /></div>
              <div className="note-side"><div><h2>{n.title}</h2><p>{n.excerpt}</p></div><div className="collage">{n.collage.map((c) => <img key={c} src={c} alt="" loading="lazy" />)}</div></div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
