import React from "react";

type Props = {
  children: any;
  month: string;
  year: string;
};

const Card = ({ children, month, year }: Props) => {
  return (
    <div className="col-span-1 border-gray-600 relative h-[32rem]">
      <div
        className={` ${
          // open
          //   ? "invisible absolute h-0"
           "absolute z-10 bg-purple-300 rounded-br-xl pr-2 pl-1 md:text-xl rounded-tl-md text-[.75rem] col-span-4 inset-top-0 inset-left-0"
        }`}
      >
        <p className="">{month + " " + year}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
