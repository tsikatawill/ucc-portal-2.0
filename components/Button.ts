import { styled } from "../stitches.config";

export const Button = styled("button", {
  paddingX: 10,
  paddingY: 5,
  cursor: "pointer",
  outline: "none",
  borderRadius: 5,
  background: "$success",
  border: "1px solid transparent",
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
    full: {
      true: {
        width: "100%",
      },
    },
    size: {
      md: {
        padding: "$2",
      },
      lg: {
        padding: "$3",
      },
    },
    bordered: {
      true: {
        background: "none",
        border: "1px solid $success",
        color: "$primaryText",
      },
    },
  },

  "&:active": {
    transform: "scale(0.98)",
  },
});
