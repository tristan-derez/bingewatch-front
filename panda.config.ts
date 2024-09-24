import { defineConfig } from "@pandacss/dev";
import { colors } from "./src/styles/colors";
import { textStyles } from "./src/styles/textStyles";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        colors,
        fonts: {
          outfit: { value: "'Outfit Variable', sans-serif" },
        },
      },
      breakpoints: {
        lg: "1440px",
      },
    },
  },

  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
});
