import "@/styles/global.css";

import type { CustomAppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

const App = ({ Component, pageProps }: CustomAppProps) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
      }}
    >
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SWRConfig>
  );
};

export default App;
