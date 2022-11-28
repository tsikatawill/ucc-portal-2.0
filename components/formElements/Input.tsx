import { styled } from "../../stitches.config";

export const Input = styled("input", {
  outline: "none",
  border: "none",
  color: "$primaryText",
  borderRadius: 5,
  transition: "all 0.25s ease-in",
  fontSize: 16,
  padding: "$1",
  background: "none",

  "&:hover": {
    background: "rgba(0,0,0,0.05)",
  },

  "&:active, &:focus": {
    padding: "$2",
    outline: "none",
    borderBottom: "2px solid $offprimaryBg",
    background: "rgba(0,0,0,0.05)",
  },
});
