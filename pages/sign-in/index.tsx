import React, { useEffect } from "react";
import {
  AuthForm,
  Block,
  Button,
  Container,
  FormGroup,
  Input,
  Label,
  Layout,
  Navbar,
  Text,
} from "../../components";
import { FaLock, FaRegEnvelope } from "react-icons/fa";
import { styled } from "../../stitches.config";
import { useRouter } from "next/router";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleAuth } from "../../firebase";
import { useUser } from "../../hooks";

const SignIn = () => {
  const [formErrors, setFormErrors] = React.useState({
    email: "",
    password: "",
  });
  const [formFields, setFormFields] = React.useState({
    email: "",
    password: "",
  });
  const { updateUser, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user !== null) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formFields.email, formFields.password)
      .then((response) => {
        if (response.user.email?.endsWith("@stu.ucc.edu.gh")) {
          updateUser(response.user);
          router.push("/dashboard");
          setFormFields({ email: "", password: "" });
        } else {
          setFormErrors({
            password: "",
            email: "Please sign in with your institutional email",
          });
        }
      })
      .catch((error) => {
        console.log({ error });
        error.code === "auth/user-not-found" &&
          setFormErrors({
            email: "No user exists this this email",
            password: "",
          });
        error.code === "auth/wrong-password" &&
          setFormErrors({
            email: "",
            password: "Wrong password",
          });
      });
  };

  const googleSignIn = () => {
    signInWithPopup(auth, googleAuth)
      .then((response) => {
        if (response.user.email?.endsWith("@stu.ucc.edu.gh")) {
          updateUser(response.user);
          router.push("/dashboard");
        } else {
          setFormErrors({
            password: "",
            email: "Please sign in with your institutional email",
          });
        }
      })
      .catch((error) => {
        setFormErrors({ email: error.message, password: "" });
      });
  };

  return (
    <Layout>
      <Container>
        <AuthForm
          title="Sign in"
          description="Welcome back! Enter your login details to access your portal."
          handleSubmit={handleSubmit}
        >
          <FormGroup>
            <Label
              text="Institutional Email"
              icon={<FaRegEnvelope size={20} />}
              htmlFor="email"
            />
            <Input
              type="email"
              id="email"
              value={formFields.email}
              onChange={(e) =>
                setFormFields({ ...formFields, email: e.target.value })
              }
              required
            />
            {formErrors.email && (
              <Text size="0" color="danger">
                {formErrors.email}
              </Text>
            )}
          </FormGroup>
          <FormGroup>
            <Label
              text="Password"
              icon={<FaLock size={20} />}
              htmlFor="password"
            />
            <Input
              type="password"
              id="password"
              value={formFields.password}
              onChange={(e) =>
                setFormFields({ ...formFields, password: e.target.value })
              }
              required
            />
            {formErrors.password && (
              <Text size="0" color="danger">
                {formErrors.password}
              </Text>
            )}
          </FormGroup>

          <Button full size="md">
            Sign in
          </Button>

          <SubForm dFlex direction="column" gap="1">
            <StyledText onClick={() => router.push("/reset-password")}>
              Forgot password?
            </StyledText>
            <StyledText onClick={googleSignIn}>Sign in with Google</StyledText>
          </SubForm>
        </AuthForm>
      </Container>
    </Layout>
  );
};

const SubForm = styled(Block, {
  marginTop: "$3",
  textAlign: "center",
});

const StyledText = styled(Text, {
  cursor: "pointer",
});

export default SignIn;
