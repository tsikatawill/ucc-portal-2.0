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
        neutral: "black",
        offprimaryBg: "#ccc",
        primaryNavBg: "white",
        primaryText: "#000",
        reversePrimaryText: "#e3e3e4",
        success: "#06b800",
        transparentPrimary: "rgba(255,255,255,0.5)",
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
    primaryBg: "#001118",
    offprimaryBg: "#003c53",
    primaryNavBg: "#000f13",
    primaryText: "#e3e3e4",
    reversePrimaryText: "#000",
    neutral: "#eee",
    transparentPrimary: "rgba(0,0,0,0.15)",
  },
});
