import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AmbientBackground, BackToTop } from "@/components/visuals";
import { ScrollProgress } from "@/components/motion";
import { brand } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} | AI Marketing Consultant in Kathmandu`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "AI marketing consultant",
    "digital marketing Nepal",
    "SEO consultant Kathmandu",
    "content marketing",
    "social media marketing",
    "Explore Digi Tona",
    "Tona Shahi Thakuri",
  ],
  authors: [{ name: brand.founder }],
  creator: brand.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: brand.url,
    siteName: brand.name,
    title: `${brand.name} | AI Marketing Consultant`,
    description: brand.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | AI Marketing Consultant`,
    description: brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    founder: brand.founder,
    description: brand.description,
    email: brand.email,
    telephone: brand.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Banasthali, Virkuti Tole",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    areaServed: ["Nepal", "Global"],
    serviceType: "AI Marketing Consulting and Digital Growth Strategy",
    url: brand.url,
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <AmbientBackground />
        <ScrollProgress />
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
