import Image from "next/image";
import { useState } from "react";
import Modal from '../modal'
import Card from '../Card'

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
        <Modal title={title} close={setOpen}>
          <div className="grid gap-8 grid-cols-6">
            <div className="col-span-1">
            <Image
              src={image}
              alt={title}
              width={400}
              height={600}
              layout={"fixed"}
              className={`rounded-2xl`}
            />
            </div>
         <div className="col-start-3 flex-col col-span-6 gap-8 p-10">
          <h1 className=" text-3xl">{title}</h1>
          <p className="pt-10 text-xl text-purple-600">{author}</p>
          <p className="pt-10 text-xl">{desc}</p>
          <p className="pt-10 text-xl text-purple-600">{month + ' ' +  year}</p>
         </div>
        
       
          </div>
       
        </Modal>
      ) : (
        <Card>
         <button onClick={() => setOpen(!open)}>
         <div
            className={` ${
              open
                ? "invisible absolute h-0"
                : "absolute z-10 bg-purple-300 rounded-br-xl pr-2 pl-1 md:text-xl rounded-tl-md text-[.75rem] hover:animate-pulse col-span-4"
            }`}
          >
            {month} {year}
          </div>
 
            <Image
              src={image}
              alt={title}
              width={400}
              height={600}
              layout={"intrinsic"}
              className={`rounded-md`}
            />

          </button>
         
        </Card>
      )}
    </>
  );
};

export default BookCard;
