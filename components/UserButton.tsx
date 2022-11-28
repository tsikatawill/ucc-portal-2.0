import { useState } from "react";
import Image from "next/image";
import { styled } from "../stitches.config";
import { UserI } from "../types";
import { Block, Button, Text } from "../components";
import { useUser } from "../hooks";

interface Props {
  user: UserI;
}

export const UserButton = ({ user }: Props) => {
  const [showlogout, setShowlogout] = useState<boolean>(false);
  const [src, setSrc] = useState(user.photoURL as string);
  const { logout } = useUser();

  return (
    <Wrapper>
      <Block dFlex align="center" gap={2}>
        <Text
          size={0}
          css={{
            maxWidth: 150,
            fontWeight: "bold",
            display: "none",
            "@sm": { display: "block" },
          }}
        >
          {user.displayName}
        </Text>
        <UserIcon onClick={() => setShowlogout(!showlogout)}>
          {user.photoURL ? (
            <Image
              placeholder="blur"
              onError={() => setSrc("/images/defaultDp.png")}
              sizes="(max-width: 768px) 50px,
        (max-width: 1200px) 90px,
        90px"
              src={src}
              fill
              alt="user-dp"
              blurDataURL="/images/ucc-logo.gif"
            />
          ) : (
            <Image
              placeholder="blur"
              sizes="(max-width: 768px) 50px,
        (max-width: 1200px) 90px,
        90px"
              src="/images/defaultDp.png"
              fill
              alt="user-dp"
              blurDataURL="/images/ucc-logo.gif"
            />
          )}
        </UserIcon>
      </Block>
      <StyledButton neutral show={showlogout} onClick={logout}>
        Logout
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  position: "relative",
});

const UserIcon = styled("div", {
  position: "relative",
  width: 40,
  height: 40,
  overflow: "hidden",
  borderRadius: "50%",
  background: "$neutral",
  color: "$reversePrimaryText",
  display: "grid",
  placeContent: "center",
  cursor: "pointer",

  "@md": {
    width: 60,
    height: 60,
  },
});

const StyledButton = styled(Button, {
  position: "absolute",
  bottom: -30,
  right: 0,
  opacity: 0,
  pointerEvents: "none",

  "&:hover": {
    transform: "scale(0.98)",
  },

  variants: {
    show: {
      true: {
        opacity: 1,
        pointerEvents: "all",
      },
    },
  },
});
