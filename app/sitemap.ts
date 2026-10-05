import type { MetadataRoute } from "next";
import { notes, projects } from "@/content/site";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://youssef-sherif.vercel.app").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/projects", "/notes", "/contact", ...projects.map((p) => `/projects/${p.slug}`), ...notes.map((n) => `/notes/${n.slug}`)].map((p) => ({ url: SITE + p }));
}
