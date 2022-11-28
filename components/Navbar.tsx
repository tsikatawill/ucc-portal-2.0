import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { Container, Text, Button, UserButton } from "../components";
import { styled } from "../stitches.config";
import { Block } from "./Block";
import { FaSignInAlt, FaSun, FaMoon } from "react-icons/fa";
import { useRouter } from "next/router";
import { ThemeContext } from "../providers/ThemeProvider";
import { useUser } from "../hooks";

export const Navbar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const router = useRouter();
  const { user } = useUser();

  return (
    <Wrapper>
      <Container>
        <Block
          dFlex
          align="center"
          css={{ height: "fit-content" }}
          justify="between"
          gap="2"
        >
          <StyledLogo href={"/"}>
            <StyledImg
              src="/images/ucc-logo.gif"
              alt="ucc-logo"
              width="40"
              height="40"
            />
            <div>
              <Text size={2}>UCC</Text>
              <Text
                size={0}
                css={{ display: "none", "@sm": { display: "block" } }}
              >
                University of Cape Coast
              </Text>
            </div>
          </StyledLogo>

          <Block dFlex gap="2" align="center">
            {user ? (
              <UserButton user={user} />
            ) : (
              <Button
                css={{ display: "flex", gap: "$1", alignItems: "center" }}
                onClick={() => router.push("/sign-in")}
              >
                Login <FaSignInAlt />
              </Button>
            )}

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
          </Block>
        </Block>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("nav", {
  background: "$primaryNavBg",
  boxShadow: "5px 5px 10px rgba(0,0,0,0.15)",
});

const StyledLogo = styled(Link, {
  display: "flex",
  alignItems: "flex-end",
  gap: "$2",
  cursor: "pointer",
  width: "fit-content",
});

const StyledImg = styled(Image, {
  width: 30,
  height: 30,
  "@sm": {
    width: 40,
    height: 40,
  },
});
