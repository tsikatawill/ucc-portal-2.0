import { styled } from "../stitches.config";

export const Container = styled("div", {
  padding: 20,
  maxWidth: 1280,

  variants: {
    size: {
      fluid: { maxWidth: "100%" },
      sm: { maxWidth: 640 },
      md: { maxWidth: 768 },
      lg: { maxWidth: 1024 },
      xl: { maxWidth: 1280 },
      xxl: { maxWidth: 1540 },
    },
  },
});
