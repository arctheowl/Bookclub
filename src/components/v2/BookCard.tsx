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
          <div className="md:grid md:gap-8 md:grid-cols-6">
            <div className="md:col-span-2">
              <div className="flex opacity-10 absolute -z-10 h-full w-full -translate-x-4 -translate-y-8 md:translate-x-0 md:translate-y-0 md:relative md:opacity-100">
              <Image
              src={image}
              alt={title}
              width={400}
              height={600}
              layout={"intrinsic"}
              className={`rounded-2xl`}
            />
              </div> 
           
            </div>
         <div className="col-start-3 flex-col col-span-6 gap-8 p-10">
          <h1 className="text-2xl md:text-3xl">{title}</h1>
          <p className="md:pt-10 pt-5 md:text-xl text-purple-600">{author}</p>
          <p className="md:pt-10 pt-5 md:text-xl w-full">{desc}</p>
          <p className="md:pt-10 pt-5 md:text-xl text-purple-600">{month + ' ' +  year}</p>
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
