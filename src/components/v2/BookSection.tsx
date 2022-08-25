import data from "../../data/BooksData.json";
import BookCard from "./BookCard";

type Props = {};

const BookSection = (props: Props) => {
  return (
    <div className="w-screen grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-y-8 p-10 bg-[#e3e2de]">
      {data.map((book) => {
        return (
          <BookCard
            key={book.Name}
            title={book.Name}
            image={book.Image}
            author={book.Author}
            desc={book.Description}
            month={book.Month}
            year={book.Year}
          />
        );
      })}
    </div>
  );
};

export default BookSection;
