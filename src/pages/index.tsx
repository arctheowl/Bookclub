import type { NextPage } from "next";
import Head from "next/head";
import Books from "../data/BooksData.json";

type BookCardProps = {
  Name: string;
  Description: string;
  Month: string
  Author: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fleet Bookclub</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Fleet <span className="text-purple-300">BookClub</span> Blog
        </h1>
        {/* <p className="text-2xl text-gray-700">This stack uses:</p> */}
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-1 lg:w-2/3">
          {Books.map((book: BookCardProps) => {
            return (
              <BookCard
                Name={book.Name}
                key={book.Name}
                Description={book.Description}
                Author={book.Author}
                Month={book.Month}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

const BookCard = ({ Name, Description, Author, Month }: BookCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h1 className="text-lg text-gray-700">{Name}</h1>
      <h2 className="text-sm text-gray-600 pb-3">{Author}</h2>
      <p className="text-sm text-gray-600">{Description}</p>
      <a
        className="mt-3 underline text-violet-500 decoration-dotted underline-offset-2"
        // href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        {Month}
      </a>
    </section>
  );
};

export default Home;
