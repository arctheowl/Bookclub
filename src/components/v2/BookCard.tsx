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
  const [descOpen, setDescOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`  duration-300 ${
          open
            ? "border-2 border-gray-800 rounded-3xl col-span-2 md:col-span-1 md:flex md:flex-col md:justify-center md:relative grid grid-cols-4"
            : "col-span-1"
        }`}
      >
        <div
          className={`${
            open
              ? "opacitiy-50 relative h-32 self-center ml-5 md:ml-0 w-full md:h-full md:absolute"
              : "relative overflow-hidden duration-500"
          }`}
        >
          <div
            className={` ${
              open
                ? "invisible absolute  h-0"
                : "absolute z-10 bg-purple-300 rounded-br-xl pr-2 pl-1 md:text-xl rounded-tl-xl text-[.75rem] hover:animate-pulse col-span-4"
            }`}
          >
            {month} {year}
          </div>
          <Image
            src={image}
            alt={title}
            width={400}
            height={600}
            layout={open ? "fill" : "responsive"}
            className={`rounded-2xl  ${open ? "md:opacity-5" : ""}`}
          />
        </div>
        {open ? (
          <>
            <div className={`relative p-10 col-span-3 text-center md:self-center`}>
              <h1 className={`text-md md:text-lg text-violet-600 py-0`}>
                {month} {year}
              </h1>
              <h1 className="text-lg md:text-2xl text-gray-600 py-2">
                {title}
              </h1>
              <h2 className="text-md md:text-lg text-violet-600 pb-3 py-0">
                {author}
              </h2>
            </div>
            <button
              onClick={() => setDescOpen(!descOpen)}
              className={`px-5 pb-5 col-span-4 z-10`}
            >
              <p className="text-sm text-gray-700 ">
                {desc.length > 400 ? `${desc.slice(0, 400)}...` : desc}
              </p>
            </button>
          </>
        ) : (
          ""
        )}
      </button>
    </>
  );
};

export default BookCard;
