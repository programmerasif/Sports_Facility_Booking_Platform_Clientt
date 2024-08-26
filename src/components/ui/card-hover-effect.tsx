/* eslint-disable prefer-const */
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
// import signe from '../../assets/okey.png'
import { ReactNode, useState } from "react";


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    types: string[];
    image:string
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 pb-10",
        className
      )}
    >
      {items.map((item, idx) => (
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
            <CardTitle>{[item.title,item?.image]}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {
              item?.types.map((items) => <div  className={cn(
                "mt-5 text-zinc-700 tracking-wide leading-relaxed text-sm hover:cursor-pointer underline",
                className
              )}>
                <div className="flex justify-start items-center gap-4">
                  {/* <span> <img src={signe} alt="" /></span> */}
                  <span>{items}</span>
                </div>
              </div>)
            }
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
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#DEF8DF]  border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
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
  console.log(children[1]);
  const imageSrc = typeof children[1] === "string" ? children[1] : undefined;
  return (
    <h4 className={cn("text-gray-900 font-bold tracking-wide mt-4", className)}>
      <div className="flex justify-center items-center flex-col gap-4">
        <span><img src={imageSrc} alt=""  className="w-16"/></span>
        <span>{children[0]}</span>
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
        "mt-8 text-zinc-500 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {description }
    </p>
  );
};