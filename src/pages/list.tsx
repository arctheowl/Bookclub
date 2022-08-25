import type { NextPage } from "next";
import Head from "next/head";
import Books from "../data/BooksData.json";
import { BookCard, BookCardProps } from "../components/BookCard";
import { Description } from "../data/description";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fleet Bookclub</title>
        <meta name="description" content={Description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Fleet <span className="text-purple-300">BookClub</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center text-center pt-4 md:w-3/5">
          <p>{Description}</p>
        </div>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-1 lg:w-2/3">
          {Books.map((book: BookCardProps) => {
            return (
              <BookCard
                Name={book.Name}
                key={book.Name}
                Description={book.Description}
                Author={book.Author}
                Month={book.Month}
                Year={book.Year}
                SecondBook={book?.SecondBook}
                SecondAuthor={book?.SecondAuthor}
                SecondDescription={book?.SecondDescription}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
