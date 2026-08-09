/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050400",
        surface: "#0b0a05",
        foreground: "#eae6d8",
        muted: "#8a5c00",
        border: "#332c17",
        accent: {
          DEFAULT: "#ffb000",
          muted: "#8a5c00",
        },
        positive: "#3ddc55",
        negative: "#ff5b4d",
      },
      fontFamily: {
        // Deliberately not a loaded webfont: this matches the approved
        // prototype, which listed "JetBrains Mono" but never actually
        // loaded it, so what was approved is really each OS's own
        // monospace fallback (SF Mono/Menlo on macOS, Consolas on Windows).
        mono: [
          "JetBrains Mono",
          "IBM Plex Mono",
          "ui-monospace",
          "SF Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
