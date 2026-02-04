import scrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./_lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./_actions/**/*.{js,ts,jsx,tsx,mdx}",
    "./_utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      beige: "#EAE3CD",
      blue: "#353C42",
      pink: "#C86B7B",
      grey: "#9F9797",
      white: "#FFFFFF",
      linkBlue: "#0000EE",
      transparent: "transparent",
    },
    fontSize: {
      paragraph: [
        "1rem",
        {
          lineHeight: "145%",
          letterSpacing: "0.0075rem",
          fontWeight: "300",
        },
      ],
      subheading: [
        "2rem",
        {
          lineHeight: "140%",
          letterSpacing: "0.06rem",
          fontWeight: "500",
        },
      ],
      heading: [
        "2.5rem",
        {
          lineHeight: "140%",
          letterSpacing: "0.075rem",
          fontWeight: "500",
        },
      ],
    },
    fontFamily: {
      roboto: "Roboto",
      robotoMono: "Roboto Mono",
    },
    screens: {
      phone: "425px",
      tablet: "800px",
      desktopSmall: "1100px",
      desktop: "1400px",
    },
    extend: {
      margin: {
        15: "60px",
      },
      padding: {
        15: "60px",
      },
    },
  },
  plugins: [scrollbarHide],
};
