import "@/styles/global.css";

import type { CustomAppProps } from "next/app";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: CustomAppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;
