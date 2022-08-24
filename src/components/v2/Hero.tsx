import { Description } from "../../data/description";

const Hero = () => {
  return (
    <div
      className={`bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2790&q=80')]
       h-96 bg-opacity-10 text-white relative flex justify-center items-center`}
    >
      <div className="bg-black opacity-50 h-full w-full absolute"></div>
      <h1 className="opacitiy-100 text-5xl absolute w-80 text-center -mt-36 md:-mt-0">
        Welcome to <span className="text-purple-300"> Fleet BookClub</span>
      </h1>
      <p className="opacitiy-100 absolute md:mt-48 mt-40 text-center md:w-2/3 px-5">
        {Description}
      </p>
    </div>
  );
};

export default Hero;
