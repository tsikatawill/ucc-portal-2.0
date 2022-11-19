import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { Container, Text, Button } from "../components";
import { styled } from "../stitches.config";
import { Block } from "./Block";
import { FaSignInAlt, FaSun, FaMoon } from "react-icons/fa";
import { useRouter } from "next/router";
import { ThemeContext } from "../providers/ThemeProvider";

export const Navbar = () => {
  const router = useRouter();
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Container>
        <Block dFlex align="center" justify="between">
          <StyledLogo href={"/"}>
            <Image
              src="/images/ucc-logo.gif"
              alt="ucc-logo"
              width="50"
              height="50"
            />
            <div>
              <Text size={3}>UCC</Text>
              <Text size={0}>University of Cape Coast</Text>
            </div>
          </StyledLogo>

          <Block dFlex gap="2">
            <Button
              blanc
              circle
              onClick={() =>
                setTheme((prev: "dark" | "light") => {
                  return prev === "dark" ? "light" : "dark";
                })
              }
            >
              {theme === "dark" && <FaSun />}
              {theme === "light" && <FaMoon />}
            </Button>

            <Button
              css={{ display: "flex", gap: "$1", alignItems: "center" }}
              onClick={() => router.push("/login")}
            >
              Login <FaSignInAlt />
            </Button>
          </Block>
        </Block>
      </Container>
    </Wrapper>
  );
};

const StyledLogo = styled(Link, {
  display: "flex",
  alignItems: "flex-end",
  gap: "$2",
  cursor: "pointer",
  width: "fit-content",
});

const Wrapper = styled("nav", {
  background: "$primaryNavBg",
});
