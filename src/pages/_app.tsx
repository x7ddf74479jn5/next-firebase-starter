import "@/styles/global.css";

import type { CustomAppProps } from "next/app";
// import { usePageView } from "@/lib/gtag";

const App = ({ Component, pageProps }: CustomAppProps) => {
  // if (process.env.NODE_ENV === 'development') {
  //   const MockServer = () => import('mocks//msw/worker');
  //   MockServer();
  // }

  // usePageView();

  const getLayout =
    Component.getLayout ??
    ((page) => {
      return page;
    });

  return getLayout(<Component {...pageProps} />);
};

export default App;
