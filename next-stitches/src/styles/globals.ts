import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Poppins",
    fontSize: "100%",
    fontWeight: "inherit",
    lineHeight: "1",
    verticalAlign: "baseline",
    color: "inherit",
  },

  html: {
    lineHeight: "1.15",
    WebkitTextSizeAdjust: "100%",
  },

  main: {
    display: "block",
  },

  h1: {
    fontSize: "2em",
    margin: "0.67em 0",
  },

  hr: {
    boxSizing: "content-box",
    height: "0",
    overflow: "visible",
  },
});
