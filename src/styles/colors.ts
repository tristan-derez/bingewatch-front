import { defineTokens } from "@pandacss/dev";

export const colors = defineTokens.colors({
  // Base colors
  red: { value: "#FC4747" },
  darkBlue: { value: "#10141E" },
  greyishBlue: { value: "#5A698F" },
  semiDarkBlue: { value: "#161D2F" },
  white: { value: "#FFFFFF" },

  // Semantic colors
  primary: { value: "{colors.red}" },
  background: { value: "{colors.darkBlue}" },
  text: { value: "{colors.white}" },
  secondary: { value: "{colors.greyishBlue}" },
  surface: { value: "{colors.semiDarkBlue}" },
});
