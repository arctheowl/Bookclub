

export type BookCardProps = {
    Name: string;
    Description: string;
    Month: string
    Year: string;
    Author: string
    Skip?: boolean;
    SecondBook?: boolean; 
  }


export const BookCard = ({ Name, Description, Author, Month , Year, Skip, SecondBook}: BookCardProps) => {
    return (
      <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl md:motion-safe:hover:scale-105">
        <h1 className="text-lg text-gray-600">{Name}</h1>
        <h2 className="text-sm text-violet-600  pb-3">{Author}</h2>
        <p className="text-sm text-gray-600">{Description}</p>
        <a
          className="mt-3 text-gray-600"
          // href={documentation}
          target="_blank"
          rel="noreferrer"
        >
          {Month} {Year}
        </a>
      </section>
    );
  };
  