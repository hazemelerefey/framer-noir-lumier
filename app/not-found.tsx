import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="nf">
      <div><h1 className="big" style={{ padding: 0 }}>404</h1><p className="serif" style={{ fontSize: 36 }}>This page didn&apos;t make it past validation.</p><p style={{ marginTop: 24 }}><Link className="btn" href="/">Back to home</Link></p></div>
    </section>
  );
}
