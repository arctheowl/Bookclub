import { useState } from "react";
import BasicRating from "./Rating";
import BasicChips from "./Tag";

export type BookCardProps = {
  Name: string;
  Description: string;
  Month: string;
  Year: string;
  Author: string;
  Rating?: number;
  Tags?: string[];
  SecondBook?: string | undefined;
  SecondAuthor?: string | undefined;
  SecondDescription?: string | undefined;
};

export const BookCard = ({
  Name,
  Description,
  Author,
  Month,
  Year,
  Rating,
  Tags,
  SecondBook,
  SecondAuthor,
  SecondDescription,
}: BookCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <>
      <section className="flex flex-col justify-center p-6 duration-500 animate-fade-up border-2 border-gray-500 rounded shadow-xl md:motion-safe:hover:scale-105">
        <button onClick={() => setIsOpen(!isOpen)}>
          <h1 className="text-lg text-gray-600">{Name}</h1>

          <h2 className="text-sm text-violet-600  pb-3">{Author}</h2>
          {isOpen || Description.length < 240 ? (
            <p className="text-sm text-gray-600">{Description}</p>
          ) : (
            <p className="text-sm text-gray-600">
              {Description.slice(0, 240)}...
            </p>
          )}
          
          {Description.length < 240 || isOpen ? <></> : <p>See more</p>}
        </button>

        {SecondBook ? (
          <button onClick={() => setIsOpen2(!isOpen2)}>
            <h1 className="text-lg text-gray-600 pt-5">{SecondBook}</h1>
            <h2 className="text-sm text-violet-600  pb-3">{SecondAuthor}</h2>
            {isOpen2 ? (
              <p className="text-sm text-gray-600">{SecondDescription}</p>
            ) : (
              <p className="text-sm text-gray-600">
                {SecondDescription?.slice(0, 240)}...
              </p>
            )}
            {Description.length < 240 || isOpen2 ? <></> : <p>See more</p>}
          </button>
        ) : (
          <></>
        )}
        <div className="">
          <div className="col-span-1 col-start-1 mt-3">
            {Tags?.map((Tag) => {
              return (
                <>
                  <BasicChips key={Name + Tag} Tag={Tag} />
                </>
              );
            })}
          </div>
          <p className="mt-3 text-violet-600 text-center">
            {Month} {Year}
          </p>
        </div>
      </section>
    </>
  );
};
