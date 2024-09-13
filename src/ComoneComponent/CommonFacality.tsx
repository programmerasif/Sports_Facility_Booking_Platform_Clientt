/* eslint-disable @typescript-eslint/no-explicit-any */

import { HoverEffect } from "@/components/ui/card-hover-effect";

const CommonFacality = ({ facality }:any) => {
  
  
  const projects =
    facality?.data?.facility?.map((item: { name: string; description: string; image: string; _id: string; }) => ({
      title: item?.name,
      description: item?.description,
      types: [],
      image: item?.image,
      id:item?._id
    })) || [];
  return (
    <div>
      

      <HoverEffect items={projects} />
    </div>
  );
};

export default CommonFacality;
