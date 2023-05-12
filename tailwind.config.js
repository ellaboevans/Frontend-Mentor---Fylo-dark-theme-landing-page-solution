/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      tablet: "1075px"
    },
    extend: {
      colors: {
        "main-background": "hsl(218, 28%, 13%)",
        "footer-bg": "hsl(216, 53%, 9%)",
        "testimonial-bg": "hsl(219, 30%, 18%)",
        "email-bg": "hsl(217, 28%, 15%)",
        "inside-cta-cyan": "hsl(176, 68%, 64%)",
        "inside-cta-blue": "hsl(198, 60%, 50%)",
        "error-alert": "hsl(0, 100%, 63%)",
        "neutral-white": "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        mobileCurvy: "url(../src/assets/bg-curvy-mobile.svg)",
        desktopCurvy: "url(../src/assets/bg-curvy-desktop.svg)",
      },
    },
  },
  plugins: [],
};
