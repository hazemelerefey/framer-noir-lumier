"use client";

import { useState, type FormEvent } from "react";
import { person, socials } from "@/content/site";

const ring = ["/media/ph/hands-light.jpg", "/media/ph/hex-glow.jpg", "/media/ph/molten-steel.jpg", "/media/ph/city-grid.jpg", "/media/ph/cpu-white.jpg", "/media/ph/runner-road.jpg", "/media/ph/port-cranes.jpg", "/media/ph/microscope-blue.jpg", "/media/ph/supermarket.jpg", "/media/ph/bokeh-amber.jpg", "/media/ph/telescope.jpg", "/media/ph/dark-tech.jpg"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Hi Youssef,\n\n${d.get("message")}\n\n${d.get("name")} — ${d.get("email")}`;
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(`Portfolio — ${d.get("type")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <section className="contact">
      <div className="card contact-left">
        <h1>Let&apos;s work<br />together</h1>
        <ul>{socials.map((s) => <li key={s.label}><a href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">{s.label} ↗</a></li>)}</ul>
        <div><a href={`mailto:${person.email}`}>{person.email}</a><p className="mute">{person.location} · {person.phone}</p></div>
      </div>
      <div className="contact-right">
        <div className="ring" aria-hidden="true"><div className="ring-inner">{ring.map((s, i) => <img key={s} src={s} alt="" style={{ transform: `rotateY(${i * 30}deg) translateZ(300px)` }} />)}</div></div>
        <form className="form" onSubmit={submit}>
          <label>Name<input name="name" placeholder="Jane Smith" autoComplete="name" required /></label>
          <label>Email<input name="email" type="email" placeholder="jane@company.com" autoComplete="email" required /></label>
          <label>Type of work<select name="type" required defaultValue=""><option value="" disabled>Select…</option><option>Full-time role</option><option>Freelance project</option><option>Internship or research</option><option>Just saying hi</option></select></label>
          <label>Message<textarea name="message" placeholder="What are you working on?" required /></label>
          <button type="submit" className="btn">➤ Submit</button>
          <small>{sent ? "Your mail app should open with the message drafted." : "Opens your mail app with the message drafted — nothing is stored. Typically replies within a day."}</small>
        </form>
      </div>
    </section>
  );
}
