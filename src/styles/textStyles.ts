import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "outfit",
      fontWeight: "300",
      fontSize: "1.3rem",
      lineHeight: "auto",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  inputText: {
    description: "the input text style - used in input text field",
    value: {
      fontFamily: "outfit",
      fontWeight: "300",
      fontSize: "1.5rem",
      lineHeight: "auto",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  h1: {
    description: "The h1 text style - used for categories like trending and recommended",
    value: {
      fontFamily: "outfit",
      fontWeight: "300",
      fontSize: "3.2rem",
      lineHeight: "auto",
      letterSpacing: "-0.05rem",
      textDecoration: "none",
      textTransform: "none",
    },
  },
  h2: {
    description: "The h2 text style - used for text in search",
    value: {
      fontFamily: "outfit",
      fontWeight: "300",
      fontSize: "2.4rem",
      lineHeight: "auto",
      letterSpacing: "0",
      textDecoration: "none",
      textTransform: "none",
    },
  },
  h3: {
    description: "The h3 text style - used for movie title in trending",
    value: {
      fontFamily: "outfit",
      fontWeight: "500",
      fontSize: "2.4rem",
      lineHeight: "auto",
      letterSpacing: "0",
      textDecoration: "none",
      textTransform: "none",
    },
  },
  h4: {
    description: "The h4 text style - used for movie title in recommended for you",
    value: {
      fontFamily: "outfit",
      fontWeight: "500",
      fontSize: "1.8rem",
      lineHeight: "auto",
      letterSpacing: "0",
      textDecoration: "none",
      textTransform: "none",
    },
  },
});
