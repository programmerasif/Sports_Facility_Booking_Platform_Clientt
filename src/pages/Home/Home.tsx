import Banner from "../Banner/Banner";
import Testmonial from "../Testmonial/Testmonial";

import HowItworks from "../HowItworks/HowItworks";


import TopFacalitys from "../TopFacalitys/TopFacalitys";
import Chart from "../Chart/Chart";
import { Address } from "../Address/Address";


const Home = () => {
    return (
        <div>
            <Banner />
            <TopFacalitys />
            <HowItworks />
            {/* <Chart /> */}
            <Testmonial />
            <Address />
        </div>
    );
};

export default Home;