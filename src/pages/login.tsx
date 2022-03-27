import type { CustomNextPage } from "next";

import { LogIn } from "@/components/page/Login";
import { AuthLayout } from "@/components/ui/layout/AuthLayout";

const LogInPage: CustomNextPage = () => {
  return <LogIn />;
};

LogInPage.getLayout = AuthLayout;

export default LogInPage;
