import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Link from "next/link";

import Footer from "@/_components/navigation/footer";
import Header from "@/_components/navigation/header";
import FacebookPixel from "@/_components/ad-tracking/facebook-pixel";
import GoogleAds from "@/_components/ad-tracking/google-ads";

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
  title: {
    default: "The Wright Designs",
    template: "%s | The Wright Designs",
  },
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
        width: 1200,
        height: 630,
        alt: "The Wright Designs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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
        <GoogleAds />
        <Header />
        <div className="relative px-5 tablet:px-10 desktop:px-0 desktop:max-w-[1280px] desktop:m-auto">
          {children}
          <Link
            href="https://wa.me/27833905238"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get in touch on WhatsApp"
            className="sticky float-right bg-white rounded-full bottom-5 mr-5 -mt-[70px] z-50 ease-in-out duration-300 desktopSmall:hover:opacity-80"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-pulse-scale motion-reduce:animate-none"
            >
              <path
                d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12.3955 4.39941C8.4625 4.39941 5.26142 7.59998 5.25977 11.5342C5.25923 12.7917 5.58754 14.0194 6.21191 15.1016L5.2002 18.7988L8.98242 17.8066C10.0246 18.3751 11.1983 18.6754 12.3926 18.6758H12.3955C16.3297 18.6741 19.5296 15.4734 19.5312 11.54C19.532 9.6336 18.7904 7.84086 17.4434 6.49219C16.0962 5.14345 14.3043 4.40027 12.3955 4.39941Z"
                fill="#25D366"
              />
              <path
                d="M12.3983 5.60645C13.9822 5.60707 15.471 6.22479 16.5906 7.3457C17.7103 8.46664 18.3265 9.95645 18.326 11.541C18.3247 14.8112 15.6642 17.4727 12.3953 17.4727H12.3934C11.3292 17.4722 10.2854 17.1858 9.37482 16.6455L9.15802 16.5166L6.9129 17.1055L7.51251 14.917L7.37189 14.6934C6.77828 13.7492 6.46428 12.6576 6.46466 11.5371C6.46596 8.26713 9.12685 5.60645 12.3983 5.60645ZM9.86896 8.23926C9.75008 8.23932 9.55669 8.28451 9.39337 8.46289C9.22966 8.64161 8.76935 9.07324 8.76935 9.9502C8.76946 10.8272 9.40815 11.6742 9.49786 11.7939C9.587 11.913 10.7552 13.714 12.5438 14.4863C12.9691 14.67 13.3014 14.7802 13.5604 14.8623C13.9871 14.9978 14.3755 14.9785 14.6824 14.9326C15.025 14.8814 15.7379 14.5014 15.8865 14.085C16.035 13.6684 16.0346 13.3116 15.9901 13.2373C15.9455 13.1629 15.8265 13.1186 15.6483 13.0293C15.4697 12.9399 14.5946 12.5091 14.4305 12.4492C14.2671 12.3897 14.148 12.3597 14.0291 12.5381C13.9102 12.7166 13.5687 13.1183 13.4647 13.2373C13.3607 13.3562 13.2561 13.3715 13.0779 13.2822C12.8994 13.193 12.3251 13.0037 11.6443 12.3965C11.115 11.9242 10.7575 11.3411 10.6531 11.1621C10.5491 10.9836 10.642 10.8868 10.7313 10.7979C10.8114 10.718 10.9088 10.5893 10.9979 10.4854C11.0869 10.3814 11.1173 10.3072 11.1766 10.1885C11.2359 10.0696 11.2064 9.96516 11.1619 9.87598C11.1174 9.78673 10.7607 8.90876 10.6121 8.55176C10.4674 8.20414 10.3202 8.25159 10.2108 8.24609C10.1069 8.24088 9.98775 8.23926 9.86896 8.23926Z"
                fill="#25D366"
              />
            </svg>
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
}
