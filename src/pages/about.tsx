import type { CustomNextPage } from "next";

import { About } from "@/components/page/about";
import { Layout } from "@/components/ui/layout";

const AboutPage: CustomNextPage = () => {
  return <About />;
};

AboutPage.getLayout = Layout;

export default AboutPage;
