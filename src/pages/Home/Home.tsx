import ScrollToTop from "react-scroll-to-top";
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
      <Chart />
      <Testmonial />
      <Address />
      {/* ScrollToTop button */}
      <ScrollToTop
        smooth
        color="#ffffff"
        height="50"
        style={{ backgroundColor: "#12143D", color: "white",display:'flex',justifyContent:'center',justifyItems:"center", paddingTop:"10px" ,paddingBottom:"10px ",height:"60px" }} 
      />
    </div>
  );
};

export default Home;