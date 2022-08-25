import Head from "next/head";
import BookSection from "../components/v2/BookSection";
import Hero from "../components/v2/Hero";
import { Description } from "../data/description";

const v2 = () => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Fleet Bookclub</title>
        <meta name="description" content={Description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <BookSection />
    </div>
  );
};

export default v2;
