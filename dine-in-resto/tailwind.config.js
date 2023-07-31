/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beaver: "#9e7f66s",
        "cod-gray": "#111111",
        mirage: "#17192b",
        "ebony-clay": "#242b37",
        "shuttle-gray": "#5c6779",
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
        league: ["League Spartan", "sans-serif"],
      },
      backgroundImage: {
        "hero-mobile": "url('./src/assets/homepage/hero-bg-mobile.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
