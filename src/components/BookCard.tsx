import { useState } from "react";
import Modal from './modal'

export type BookCardProps = {
  Name: string;
  Description: string;
  Month: string;
  Year: string;
  Author: string;
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
}: BookCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <>
      {isOpen ? (
        <Modal title="Area Chart" close={setIsOpen}>
          
        </Modal>
      ) : (
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
     )}
    </>
  );
};
