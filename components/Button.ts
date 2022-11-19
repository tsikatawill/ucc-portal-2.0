import { styled } from "../stitches.config";

export const Button = styled("button", {
  paddingX: 10,
  paddingY: 5,
  cursor: "pointer",
  outline: "none",
  border: "none",
  borderRadius: 5,
  background: "$success",
  color: "white",

  variants: {
    blanc: {
      true: {
        background: "#eee",
        color: "black",
      },
    },
    circle: {
      true: {
        borderRadius: "50%",
        width: 30,
        height: 30,
        display: "grid",
        placeContent: "center",
      },
    },
  },

  "&:active": {
    transform: "scale(0.98)",
  },
});
