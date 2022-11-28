import { styled } from "../../stitches.config";
import { Block } from "../Block";

interface Props {
  children: React.ReactNode;
}

export const FormGroup = ({ children }: Props) => {
  return (
    <Block
      dFlex
      direction="column"
      css={{
        "&:not(:last-child)": {
          marginBottom: "$2",
        },
      }}
    >
      {children}
    </Block>
  );
};
