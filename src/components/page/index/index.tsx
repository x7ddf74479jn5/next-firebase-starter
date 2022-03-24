import Head from "next/head";

import { PrimaryButton } from "@/components/ui/button";

export const Home: React.VFC = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home</h2>
      <PrimaryButton tag="button" onClick={handleClick}>
        Button
      </PrimaryButton>
    </>
  );
};
