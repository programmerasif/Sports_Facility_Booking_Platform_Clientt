// import CommonFacality from "@/ComoneComponent/CommonFacality";
// import { useGetProductsQuery } from "@/redux/feature/product/productApi";


// const Facality = () => {
//     const { data } = useGetProductsQuery([
//         { name: "page", value: "1" },
//         { name: "limit", value: "8" },
//         { name: "sort", value: "name" },
//       ]);
//     return (
//         <div className="">
//       <div className="mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32 ">
//         <CommonFacality  facality={data}/>
//       </div>
//     </div>
//     );
// };

// export default Facality;

import CommonFacality from '@/ComoneComponent/CommonFacality';
import { useGetProductsQuery } from '@/redux/feature/product/productApi';


const Facality = () => {


    const { data } = useGetProductsQuery(undefined);

    return (
        <div className='pt-40 mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32'>
            <CommonFacality  facality={data}/>
        </div>
    );
};

export default Facality;