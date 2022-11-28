import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { styled } from "../stitches.config";
import { UserI } from "../types";

interface Props {
  user: UserI;
}

export const UserButton = ({ user }: Props) => {
  return (
    <Wrapper>
      {user.photoURL ? (
        <Image
          placeholder="blur"
          sizes="(max-width: 768px) 50px,
        (max-width: 1200px) 90px,
        90px"
          src={user.photoURL}
          fill
          alt="user-dp"
          blurDataURL="/images/ucc-logo.gif"
        />
      ) : (
        <FaUserAlt size={30} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  position: "relative",
  width: 40,
  height: 40,
  overflow: "hidden",
  borderRadius: "50%",
  background: "Yellow",
  display: "grid",
  placeContent: "center",

  "@md": {
    width: 60,
    height: 60,
  },
});
