import { createStitches } from "@stitches/react";

export const { styled, getCssText, keyframes, css, createTheme } =
  createStitches({
    theme: {
      fonts: {
        lato: "Lato",
        openSans: "Open Sans",
        raleway: "raleway",
      },
      space: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
      colors: {
        primaryBg: "#eee",
        offprimaryBg: "#ccc",
        primaryNavBg: "white",
        primaryText: "#000",
        success: "#06b800",
      },
      fontSizes: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
    utils: {
      marginX: (value: string | number) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value: string | number) => ({
        marginTop: value,
        marginBottom: value,
      }),
      paddingX: (value: string | number) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value: string | number) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
    media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
      xl: "(min-width: 1280px)",
      xxl: "(min-width: 1536px)",
    },
  });

export const darkTheme = createTheme({
  colors: {
    primaryBg: "#00051b",
    offprimaryBg: "#0b1b63",
    primaryNavBg: "black",
    primaryText: "#e3e3e4",
  },
});
