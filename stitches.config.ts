import { createStitches } from "@stitches/react";

export const { styled, getCssText, keyframes, css } = createStitches({
  theme: {
    fonts: {
      lato: "Lato",
      openSans: "Open Sans",
      raleway: "raleway",
    },
    colors: {
      primaryBg: "#ccc",
    },
    fontSizes: {},
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    xxl: "(min-width: 1540px)",
  },
});
