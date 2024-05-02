import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "resolution-blue": {
        "50": "#e5f4ff",
        "100": "#d0ebff",
        "200": "#abd8ff",
        "300": "#79bbff",
        "400": "#448dff",
        "500": "#1b5eff",
        "600": "#003eff",
        "700": "#0041ff",
        "800": "#0039de",
        "900": "#03238c",
        "950": "#031763",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
