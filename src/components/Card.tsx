import React from "react";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

const Card = ({ children }: Props) => {
  return (
    <div className="col-span-1 border-gray-600">
      {children}
    </div>
  );
};

export default Card;
