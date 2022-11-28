import Link from "next/link";
import { styled } from "../stitches.config";
import { Container, Text } from "../components";

export const Footer = () => {
  const date = new Date();

  return (
    <Wrapper>
      <Container>
        <Text css={{ textAlign: "center" }}>
          UCC Portal Website Developed with ❤️ by{" "}
          <StyledLink
            href="https://twitter.com/dev_willman"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 William M. Tsikata
          </StyledLink>{" "}
          &copy; {date.getFullYear()}{" "}
        </Text>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("footer", {
  background: "$primaryNavBg",
  marginTop: "auto",
  boxShadow: "-5px -5px 10px rgba(0,0,0,0.15)",
});

const StyledLink = styled(Link, {
  color: "dodgerblue",
});
