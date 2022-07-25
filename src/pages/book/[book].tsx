import BasicRating from "../../components/Rating";
import { useRouter } from "next/router";
import Books from "../../data/BooksData.json";
import { BookCard } from "../../components/BookCard";

export type BookCardProps = {};

export const Book = ({}: BookCardProps) => {
  const router = useRouter();
  console.log(router.query["book"]);

  return (
    <>
      {Books.map((book) => {
        if (
          book.Name.replace(/\s+/g, "").toLowerCase() == router.query["book"] ||
          book.Name.replace(/\s+/g, "") == router.query["book"] ||
          book.Name == router.query["book"]
        ) {
          return (
            <main className="container mx-auto flex flex-col items-center h-screen p-4">
              <h1 className="text-5xl md:text-[3rem] leading-normal font-extrabold text-gray-700 text-center">
                {book.Name}
              </h1>
              <h2>
                <span className="text-purple-300  md:text-[2rem]">
                  {book.Author}
                </span>
              </h2>

              <section className="flex flex-col items-center justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl md:motion-safe:hover:scale-105">
                <BasicRating value={book?.Rating} />
                <p>Description:</p>
                {book.Description}
              </section>
            </main>
          );
        }
      })}
    </>
  );
};

export default Book;
