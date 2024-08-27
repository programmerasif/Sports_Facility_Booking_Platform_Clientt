import { HoverEffect } from "@/components/ui/card-hover-effect";

const CommonFacality = ({ facality }) => {
  const projects =
    facality?.data?.product?.map((item) => ({
      title: item?.name,
      description: item?.description,
      types: [],
      image: item?.image,
    })) || [];
  return (
    <div>
      

      <HoverEffect items={projects} />
    </div>
  );
};

export default CommonFacality;
