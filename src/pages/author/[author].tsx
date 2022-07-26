import { useRouter } from "next/router";
import Books from "../../data/BooksData.json";
import { BookCard } from "../../components/BookCard";

export type BookCardProps = {};

export const Author = ({}: BookCardProps) => {
  const router = useRouter();
  let Author = `${router.query["author"]}`;

  let books = Books.filter(
    (book) =>
      book.Author.replace(/\s+/g, "").toLowerCase() == Author.toLowerCase()
  );

  if (books.length == 0) {
    return (
      <div className="flex flex-col items-center justify-center content-center text-center">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          No books found for {Author}
        </h1>
      </div>
    );
  }

  if (books) {
    let AuthorName = books[0]!.Author;
    return (
      <div className="flex flex-col items-center justify-center content-center text-center">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Books by <span className=" text-purple-300">{AuthorName}</span>
        </h1>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-1 lg:w-2/3">
          {books.map((book) => {
            return (
              <BookCard
                Name={book.Name}
                key={book.Name}
                Description={book.Description}
                Author={book.Author}
                Month={book.Month}
                Year={book.Year}
                Rating={book?.Rating}
                Tags={book?.Tags}
                SecondBook={book?.SecondBook}
                SecondAuthor={book?.SecondAuthor}
                SecondDescription={book?.SecondDescription}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default Author;