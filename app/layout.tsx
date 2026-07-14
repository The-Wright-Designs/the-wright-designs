import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Footer from "@/_components/navigation/footer";
import Header from "@/_components/navigation/header";
import FacebookPixel from "@/_components/facebook-pixel";

import "@/_styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thewrightdesigns.co.za"),
  description:
    "A web design & web development team, based in Plettenberg Bay, dedicated to providing modern online solutions for small to medium sized businesses",
  keywords:
    "website development, website design, web design, app design, app development, web development, website, development, design, portfolio, developer, frontend, frontend developer",
  openGraph: {
    description:
      "A web design & development team dedicated to providing modern online solutions for small to medium sized businesses",
    type: "website",
    locale: "en_ZA",
    siteName: "The Wright Designs",
    images: [
      {
        url: "/assets/open-graph-image.png",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Wright Designs",
  url: "https://www.thewrightdesigns.co.za",
  logo: "/assets/the-wright-designs-logo-square.jpg",
  description:
    "A web design & development team dedicated to providing modern online solutions for small to medium sized businesses",
  sameAs: ["https://www.facebook.com/thewrightdesignsSA"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={roboto.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <FacebookPixel />
        <Header />
        <div className="px-5 overflow-x-hidden tablet:px-10 desktop:px-0 desktop:max-w-[1280px] desktop:m-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
