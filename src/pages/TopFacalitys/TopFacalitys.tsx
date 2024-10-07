import { useGetProductsQuery } from "@/redux/feature/product/productApi";
import CommonFacality from "@/ComoneComponent/CommonFacality";

// ];

const TopFacalitys = () => {
  const { data,isLoading} = useGetProductsQuery([
    { name: "page", value: "1" },
    { name: "limit", value: "8" },
    { name: "sort", value: 'name' },
  ]);
 

  return (
    <div className=" mt-20">
    <div className="mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32 ">
    <div className="flex justify-center items-center text-2xl gap-2">
          {/* <img src={signe} alt="check-mark" className="w-12 md:w-14" /> */}
          <h2 className="text-xl md:text-2xl font-semibold text-[#12143D]">
            Featured
            <span className="text-[#F7A400]"> Facilities</span>
          </h2>
        </div>
        <p className="mt-3 pb-10 text-sm md:text-base text-gray-600 max-w-3xl mx-auto flex justify-center text-center items-center">
          Discover our top sports facilities, carefully chosen
          for their quality and variety. Whether you're into football,
          basketball, cricket, or other activities, find the ideal space to
          play, train, or compete.
        </p>
      <CommonFacality  facality={data} isLoading={isLoading}/>
    </div>
  </div>
  );
};

export default TopFacalitys;
