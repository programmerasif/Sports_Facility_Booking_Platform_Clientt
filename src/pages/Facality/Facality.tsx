

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