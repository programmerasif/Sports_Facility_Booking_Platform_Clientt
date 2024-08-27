import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  name: string;
  designation: string;
  image:string,
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset = 50, // Increased offset for larger gaps
  scaleFactor = 0.05, // Adjusted scale factor for better visibility
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    // Update cards when items prop changes
    setCards(items);
  }, [items]);

  useEffect(() => {
    const startFlipping = () => {
      const interval = setInterval(() => {
        setCards((prevCards) => {
          const newArray = [...prevCards];
          newArray.unshift(newArray.pop()!); // Move the last element to the front
          return newArray;
        });
      }, 5000); // Interval time

      return () => clearInterval(interval); // Clean up interval on component unmount
    };

    const cleanupInterval = startFlipping();

    return cleanupInterval; // Clean up interval when the component unmounts
  }, [items]);

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96 lg:w-[35rem] ">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute dark:bg-black bg-white h-60 w-56 md:h-60 p-8 md:w-72 lg:w-[30rem] rounded-3xl  shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{
            transformOrigin: "top left", // Transform origin is at top left
          }}
          animate={{
            top: index * offset,   // Move background cards down and right
            left: index * offset,  // Move background cards down and right
            scale: 1 - index * scaleFactor, // Scale background cards
            zIndex: cards.length - index, // Ensure the active card is on top
          }}
        >
          <div className="font-normal text-neutral-700 dark:text-neutral-200">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-500 font-medium dark:text-white hidden md:block">
              {card.name}
            </p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200 ">
              {card.designation}
            </p>
            <img src={card?.image} alt="avaer"  className="absolute w-16 ring-2 rounded-full -top-10 -left-10"/>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
