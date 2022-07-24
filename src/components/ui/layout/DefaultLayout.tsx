import type { FC, PropsWithChildren } from "react";

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <Header />
    <div className="py-8">{children}</div>
    <Footer />
  </div>
);
