import { CardStack } from "@/components/ui/card-stack";
import { CARDS } from "@/Const/TestmonialData";
import { useState } from "react";


const Testmonial = () => {
  const [cards, setCards] = useState(CARDS);

  const handleNextClick = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!); 
      return newArray;
    });
  };

  const handlePrevClick = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift()!); 
      return newArray;
    });
  };

  return (
    <div className="relative flex items-center justify-center w-full overflow-hidden mt-20 mx-auto min-h-[80vh] lg:min-h-[45vh] px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32 ">
      <div className="flex flex-col xl:flex-row justify-between items-center w-full gap-16">
        <div className="flex flex-col justify-start items-start gap-4 lg:gap-6 xl:w-[50%]">
          <h5 className="text-3xl md:text-4xl font-bold font-merriweather text-[#12143D] w-full">
            What People Say <br />{" "}
            <span className="text-[#F7A400]">About Us</span>
          </h5>
          <p className="max-w-4xl text-gray-600">
            Discover what our customers are saying about their experiences with
            us. From their success stories to their favorite features, see how
            we've made a difference and why they trust us to deliver the best.
          </p>
          <div className="flex gap-4">
            <button onClick={handlePrevClick} className="border border-[#F7A400] font-bold text-[#F7A400] hover:px-12 duration-300 px-8 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button onClick={handleNextClick} className="bg-[#F7A400] hover:px-12 duration-300 px-8 py-2 font-bold rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="xl:w-[50%] flex justify-center items-center mt-8 md:mt-0 rounded-xl ">
         
          <div className=""><CardStack items={cards} /></div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;