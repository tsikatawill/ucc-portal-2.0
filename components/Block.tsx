import { styled } from "../stitches.config";

export const Block = styled("div", {
  variants: {
    dFlex: {
      true: {
        display: "flex",
      },
    },
    gap: {
      1: {
        gap: "$1",
      },
      2: {
        gap: "$2",
      },
      3: {
        gap: "$3",
      },
      4: {
        gap: "$4",
      },
      5: {
        gap: "$5",
      },
      6: {
        gap: "$6",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      even: {
        justifyContent: "space-evenly",
      },
      around: {
        justifyContent: "space-around",
      },
    },
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    break: {
      sm: {
        "@sm": { flexDirection: "column" },
      },
      md: {
        "@md": { flexDirection: "column" },
      },
      lg: {
        "@lg": { flexDirection: "column" },
      },
    },
  },
});
