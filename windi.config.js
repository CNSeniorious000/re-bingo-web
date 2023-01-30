import { defineConfig } from "windicss/helpers";
import HeroPatterns from "@windicss/plugin-heropatterns";

export default defineConfig({
  darkMode: "media",
  plugins: [
    HeroPatterns({
      colors: { default: "#808080" },
      opacity: { default: 0.15 },
      patterns: ["lines-in-motion"],
    }),
  ],
});
