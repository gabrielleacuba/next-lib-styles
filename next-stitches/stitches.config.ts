import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      background: "white",
      text: "black",
    },
    // adicione aqui as cores do modo escuro
    dark: {
      background: "black",
      text: "white",
    },
  },
});

export type CSS = typeof css;
export type Theme = ReturnType<typeof css>;
