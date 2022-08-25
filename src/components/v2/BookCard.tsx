import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  image: string;
  author: string;
  desc: string;
  month: string;
  year: string;
};

const BookCard = ({ title, image, author, desc, month, year }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <div
          className={`md:flex md:flex-col md:justify-center md:relative border-2 border-gray-800 rounded-3xl col-span-2 md:col-span-1 hover:-translate-y-5 duration-300 grid grid-cols-4`}
        >
          <div className="relative h-32 self-center ml-5 md:ml-0 w-full md:h-full md:absolute">
            <button onClick={() => setOpen(!open)}>
              <Image
                src={image}
                alt={title}
                width={400}
                height={600}
                layout="fill"
                className="md:opacity-10 rounded-2xl"
              />
            </button>
          </div>

          <div className="relative p-10 text-center col-span-3">
            <button onClick={() => setOpen(!open)}>
              <h1 className="text-md md:text-lg text-violet-600 py-0">
                {month} {year}
              </h1>
              <h1 className="text-lg md:text-2xl text-gray-600 py-2">{title}</h1>
              <h2 className="text-md md:text-lg text-violet-600 pb-3 py-0">{author}</h2>
            </button>
          </div>
          <div className="px-5 pb-5 col-span-4">
            <button onClick={() => setOpen(!open)}>
              <p className="text-sm text-gray-600 ">{desc}</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden hover:-translate-y-5 duration-500">
          <button onClick={() => setOpen(!open)}>
            <div className="absolute z-10 bg-purple-300 rounded-br-xl pr-2 pl-1 md:text-xl rounded-tl-xl text-[.75rem] hover:animate-pulse">
              {month} {year}
            </div>
            <Image
              src={image}
              alt={title}
              width={400}
              height={600}
              className={`rounded-2xl`}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default BookCard;
