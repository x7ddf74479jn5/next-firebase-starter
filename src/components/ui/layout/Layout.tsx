import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const Layout: CustomLayout = (page) => {
  return (
    <>
      <Header />
      <main>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </>
  );
};
