import { HoverEffect } from "@/components/ui/card-hover-effect";

const CommonFacality = ({ facality }) => {
  
  
  const projects =
    facality?.data?.facility?.map((item) => ({
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
