import Head from "next/head";
import { useContext } from "react";
import { Container, Navbar, Text, Block, Button } from "../components";

import { ThemeContext } from "../providers/ThemeProvider";
import { darkTheme, styled } from "../stitches.config";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper className={theme === "dark" ? darkTheme : ""}>
      <Head>
        <title>UCC Portal</title>
        <meta name="description" content="UCC portal" />
        <link rel="icon" href="/images/ucc-logo.gif" />
      </Head>

      <Navbar />

      <main>
        <Container>
          <Block dFlex align="center">
            <Text css={{ flex: 1 }}>
              commodi error quae sapiente obcaecati ad, exercitationem adipisci,
              eum harum voluptate vero qui atque!
            </Text>
            <Text css={{ flex: 1 }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque fugit id magnam pariatur dicta, saepe temporibus
              commodi error quae sapiente obcaecati ad, exercitationem adipisci,
              eum harum voluptate vero qui atque!
            </Text>
          </Block>
        </Container>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  minHeight: "100vh",
  background: "$primaryBg",
  color: "$primaryText",
});
