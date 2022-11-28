import { useRouter } from "next/router";
import { useEffect } from "react";
import { Navbar, Footer } from "../../components";
import { useUser } from "../../hooks";
import { useTheme } from "../../providers/ThemeProvider";
import { darkTheme, styled } from "../../stitches.config";

interface Props {
  children: React.ReactNode;
  protectedRoute?: boolean;
}

export const Layout = ({ children, protectedRoute }: Props) => {
  const { theme } = useTheme();
  // const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session") as string);
    if (protectedRoute) {
      if (!session.user) {
        router.push("/sign-in");
      }
    }
  }, [protectedRoute, router]);

  return (
    <Wrapper className={theme === "dark" ? darkTheme : ""}>
      <Navbar />

      {children}

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  background: "$primaryBg",
  color: "$primaryText",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});
