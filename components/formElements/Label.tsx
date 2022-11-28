import React from "react";
import { Block, Text } from "../../components";
import { styled } from "../../stitches.config";

interface Props {
  text: string;
  icon?: React.ReactNode;
  htmlFor?: string;
}

export const Label = ({ text = "Label", icon, htmlFor }: Props) => {
  return (
    <Wrapper htmlFor={htmlFor}>
      <Block dFlex gap="1" align="center">
        {icon}
        <Text size="1">{text}</Text>
      </Block>
    </Wrapper>
  );
};

const Wrapper = styled("label", {
  cursor: "pointer",
  width: "fit-content",
});
