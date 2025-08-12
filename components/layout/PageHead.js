import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>
          {headTitle
            ? headTitle
            : "Grabit - NFT Portfolio and Landing Page Nextjs Template"}
        </title>
      </Head>
    </>
  );
};

export default PageHead;
