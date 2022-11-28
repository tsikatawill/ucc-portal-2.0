import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container, Layout } from "../../components";
import { useUser } from "../../hooks";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user === null) {
      // router.push("/sign-in");
      console.log({ user });
    }
  }, [user, router]);

  return (
    <Layout>
      <div>
        <Container>Dashboard</Container>
      </div>
    </Layout>
  );
};

export default Dashboard;
