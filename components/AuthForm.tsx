import Image from "next/image";
import { styled } from "../stitches.config";
import { Text } from "./Text";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const AuthForm = ({
  children,
  description = "Some lorem needed urgently to fill up some much needed space",
  handleSubmit,
  title = "Some title",
}: Props) => {
  return (
    <Wrapper onSubmit={handleSubmit}>
      <FormHeader>
        <Image
          src="/images/ucc-logo.gif"
          alt="ucc-logo.gif"
          height="60"
          width="60"
        />
        <Text size="2" css={{ textTransform: "capitalize" }}>
          {title}
        </Text>
        <Text size="0">{description}</Text>
      </FormHeader>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled("form", {
  border: "1px solid $offprimaryBg",
  width: 300,
  minHeight: 300,
  borderRadius: 5,
  margin: "auto",
  padding: "$4",
  background: "$transparentPrimary",

  "@sm": {
    width: 350,
  },
});

const FormHeader = styled("legend", {
  textAlign: "center",
  margin: "auto",
  marginBottom: "$4",
  maxWidth: 250,
});
