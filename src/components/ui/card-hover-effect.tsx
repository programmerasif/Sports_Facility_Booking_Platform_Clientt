/* eslint-disable prefer-const */
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
// import signe from '../../assets/okey.png'
import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    types: string[];
    image: string;
    pricePerHour:string
    id:string
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
const handelId = (id:string) =>{
console.log(id);

}

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 pb-10",
        className
      )}
    >
      {items.length == 0 ? <div className="flex justify-center items-center text-center w-full">
        No facility Available 
      </div> : items.map((item, idx) => (
        <a
          key={item?.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200  block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{[item.title, item?.image]}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="flex justify-between items-center pb-4">
            <NavLink to={`/facility-details/${item?.id}`}  onClick={() => handelId(item.id)}   className=" text-[#4a50c9] px-2 py-1 text-sm flex justify-start items-center gap-2 bg-[#4a50c916] rounded-md">
                <span> Details</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
               
              </NavLink>
              <div className="flex justify-center items-center gap-2 font-bold text-[#F7A400]">
                <span className="">${item?.pricePerHour} </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {item?.types.map((items) => (
              <div
                className={cn(
                  "mt-5 text-zinc-700 tracking-wide leading-relaxed text-sm hover:cursor-pointer underline",
                  className
                )}
              >
                <div className="flex justify-start items-center gap-4">
                 
                  <span>{items}</span>
                </div>
              </div>
            ))}
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full  overflow-hidden shadow-xl bg-[#EBF5FB] border-transparent group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="px-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode[];
}) => {
  const imageSrc = typeof children[1] === "string" ? children[1] : undefined;
  return (
    <h4
      className={cn("text-[#4a50c9] font-bold tracking-wide mt-4", className)}
    >
      <div className="flex justify-start items-start flex-col gap-2">
        <span>
          <img src={imageSrc} alt="" className=" rounded-md" />
        </span>
        <span className="font-bold text-[18px]">{children[0]}</span>
      </div>
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const description = typeof children === "string" ? children : undefined;
  return (
    <p
      className={cn(
        "mt-2 text-gray-600 tracking-wide leading-relaxed text-sm pb-5",
        className
      )}
    >
      {description?.slice(0, 120)}...
    </p>
  );
};
