import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/page.tsx",
    "./src/components/**/*.{tsx,json}",
    "./src/containers/**/*.tsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
  darkMode : 'selector'
};
export default config;
