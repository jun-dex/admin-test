import PageLayout from "@/layouts/PageLayout";
import { ReactElement } from "react";

const LoginPage = () => {
  return (
    <form>
      <h1>Login Page</h1>
    </form>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default LoginPage;
