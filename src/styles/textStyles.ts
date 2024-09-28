import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "outfit",
      fontWeight: "300",
      fontSize: "1.1rem",
      md: { fontSize: "1.3rem" },
      lineHeight: "normal",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  bodyM: {
    description: "the bodyM text style - used in details informations",
    value: {
      fontFamily: "outfit",
      fontWeight: "300",
      fontSize: "1.2rem",
      md: { fontSize: "1.5rem" },
      lineHeight: "normal",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  titleTrending: {
    description: "the title trending text style - used in trending card's title",
    value: {
      fontFamily: "outfit",
      fontWeight: "500",
      fontSize: "1.5rem",
      md: { fontSize: "2.4rem" },
      lineHeight: "normal",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  categoryTitle: {
    description:
      "The categoryTitle text style - used for main title in categories like trending and recommended and search result",
    value: {
      fontFamily: "outfit",
      fontWeight: "300",
      fontSize: "2.4rem",
      md: {
        fontSize: "3.2rem",
      },
      lineHeight: "normal",
      letterSpacing: "-0.05rem",
      textDecoration: "none",
      textTransform: "none",
    },
  },
  inputText: {
    description: "The input text style - used for text in input search bar",
    value: {
      fontFamily: "outfit",
      fontWeight: "300",
      fontSize: "1.6rem",
      md: {
        fontSize: "2.4rem",
      },
      lineHeight: "normal",
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
      lineHeight: "normal",
      letterSpacing: "0",
      textDecoration: "none",
      textTransform: "none",
    },
  },
  titleInContent: {
    description: "The titleInContent text style - used for movie title in recommended for you",
    value: {
      fontFamily: "outfit",
      fontWeight: "300",
      fontSize: "1.4rem",
      md: { fontSize: "1.8rem", fontWeight: "500" },
      lineHeight: "normal",
      letterSpacing: "0",
      textDecoration: "none",
      textTransform: "none",
    },
  },
});
