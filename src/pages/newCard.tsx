/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

type Props = {};

const newCard = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-screen h-screen p-10 grid grid-cols-6">
      <div className="w-48 h-48 bg-slate-600 relative">
        <div
          className={
            isOpen
              ? `w-full bg-red-600 h-10 absolute top-0 animate-flip-in`
              : `w-full bg-red-600 h-10 absolute bottom-0`
          }
        >
          <button className="rounded-full w-6 h-6 top-2 bg-blue-400 absolute right-2" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default newCard;
