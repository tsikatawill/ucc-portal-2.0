import Head from "next/head";
import { useContext } from "react";
import { Navbar, Text, Block, NewsReel, Footer } from "../components";

import { ThemeContext } from "../providers/ThemeProvider";
import { darkTheme, styled } from "../stitches.config";
import { NewsReelItems } from "../utils/data";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper className={theme === "dark" ? darkTheme : ""}>
      <Head>
        <title>UCC Portal</title>
        <meta name="description" content="UCC portal" />
        <link rel="icon" href="/images/ucc-logo.gif" />
      </Head>
      <Block dFlex direction="column" css={{ minHeight: "100vh" }}>
        <Navbar />

        <main>
          <NewsReel newsItems={NewsReelItems} />
        </main>

        <Footer />
      </Block>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  background: "$primaryBg",
  color: "$primaryText",
});
