import { styled } from "../stitches.config";

export const Text = styled("p", {
  fontSize: "$base",
  color: "$primaryText",

  variants: {
    size: {
      0: {
        fontSize: "$sm",
      },
      1: {
        fontSize: "$xl",
        fontWeight: "600",
      },
      2: {
        fontSize: "$2xl",
        fontWeight: "600",
      },
      3: {
        fontSize: "$3xl",
        fontWeight: "700",
      },
      4: {
        fontSize: "$4xl",
        fontWeight: "700",
      },
      5: {
        fontSize: "$5xl",
        fontWeight: "900",
      },
    },
  },
});
