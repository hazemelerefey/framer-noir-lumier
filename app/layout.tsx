import type { Metadata, Viewport } from "next";
import { Footer, TopBar } from "@/components/ui";
import "./globals.css";
import "./pages.css";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://youssef-sherif.vercel.app").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Youssef Sherif — Machine Learning Developer", template: "%s | Youssef Sherif" },
  description: "Youssef Sherif is a machine learning developer in Giza, Egypt — computer vision, predictive modelling, customer analytics and SQL data engineering.",
  openGraph: { title: "Youssef Sherif — Machine Learning Developer", description: "Models people can trust: computer vision, predictive modelling and data engineering.", images: ["/media/og.jpg"] },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { width: "device-width", themeColor: "#0a0a0a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
