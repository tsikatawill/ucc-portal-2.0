import React from "react";
import {
  AuthForm,
  Block,
  Button,
  Container,
  FormGroup,
  Input,
  Label,
  Navbar,
  Text,
} from "../../components";
import { useTheme } from "../../providers/ThemeProvider";
import { FaLock, FaRegEnvelope } from "react-icons/fa";
import { darkTheme, styled } from "../../stitches.config";
import Link from "next/link";

const ForgotPassword = () => {
  const { theme } = useTheme();
  const [email, setEmail] = React.useState("");
  const [formErrors, setFormErrors] = React.useState({
    email: "Wrong email",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Password reset link sent to " + email);
    setEmail("");
  };
  return (
    <Wrapper className={theme === "dark" ? darkTheme : ""}>
      <Navbar />

      <Container>
        <AuthForm
          title="Reset password"
          description="Enter your email to receive a password reset link."
          handleSubmit={handleSubmit}
        >
          <FormGroup>
            <Label
              text="Email"
              icon={<FaRegEnvelope size={20} />}
              htmlFor="email"
            />
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>

          <Button full size="md">
            Send link
          </Button>

          <SubForm dFlex direction="column" gap="1">
            <Text>Check mail</Text>
          </SubForm>
        </AuthForm>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  minHeight: "100vh",
  background: "$primaryBg",
  color: "$primaryText",
});

const SubForm = styled(Block, {
  marginTop: "$3",
  textAlign: "center",
});

export default ForgotPassword;
