import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const globalStyle = css`
  ${emotionReset},

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }

  .hidden {
    display: none;
  }
`;

export {
  globalStyle
}
