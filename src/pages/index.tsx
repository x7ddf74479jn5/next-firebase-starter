import type { CustomNextPage } from "next";

import { Home } from "@/components/page/index/index";
import { Layout } from "@/components/ui/layout";

const IndexPage: CustomNextPage = () => {
  return <Home />;
};

IndexPage.getLayout = Layout;

export default IndexPage;
