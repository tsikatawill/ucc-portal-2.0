import { Navbar, Footer } from "../../components";
import { useTheme } from "../../providers/ThemeProvider";
import { darkTheme, styled } from "../../stitches.config";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { theme } = useTheme();
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
