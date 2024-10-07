/* eslint-disable @typescript-eslint/no-explicit-any */

import { HoverEffect } from "@/components/ui/card-hover-effect";
import LoadingComponent from "@/pages/FacalityManagement/LoadingComponent";

const CommonFacality = ({ facality,isLoading }:any) => {
  
 


  const facilities = facality?.data?.facility?.filter((item:any) => item.isDeleted === false);
  
 
 
  

  const projects =
  facilities?.map((item: { name: string; description: string; image: string; _id: string; pricePerHour:string }) => ({
      title: item?.name,
      description: item?.description,
      types: [],
      image: item?.image,
      id:item?._id,
      pricePerHour:item?.pricePerHour
    })) || [];

    
  return (
    <div>
      {
        isLoading ? <LoadingComponent /> : <HoverEffect items={projects} />
      }

      
    </div>
  );
};

export default CommonFacality;
