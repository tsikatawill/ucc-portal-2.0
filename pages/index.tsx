import Head from "next/head";
import { Navbar, Block, NewsReel, Footer, Layout } from "../components";
import { useFirestore } from "../hooks";

export default function Home() {
  const { newsItems, loadingNewsItems } = useFirestore();

  return (
    <Layout>
      <Head>
        <title>UCC Portal</title>
        <meta name="description" content="UCC portal" />
        <link rel="icon" href="/images/ucc-logo.gif" />
      </Head>
      <main>
        <NewsReel newsItems={newsItems} />
      </main>
    </Layout>
  );
}
