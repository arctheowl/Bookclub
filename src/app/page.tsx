import Head from "next/head";   
import data from "../data/BooksData.json";
import BookSection from "../components/v2/BookSection";
import Hero from "../components/v2/Hero";
import { Description } from "../data/description";
// import { setTimeout } from "timers";

export default async function Index(){
    let books = await getBooks()


  return (
    <div className="h-screen ">
      <Head>
        <title>Fleet Bookclub</title>
        <meta name="description" content={Description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <BookSection books={books} />
    </div>
  );
};

async function getBooks() {
    const books = data
    // await new Promise(r => setTimeout(r, 1000));
    return books
  }


