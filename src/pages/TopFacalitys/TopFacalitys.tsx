import { useGetProductsQuery } from "@/redux/feature/product/productApi";
import { HoverEffect } from "../../components/ui/card-hover-effect";

// const projects = [
//   {
//     title: "Acts & Policy",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     types: [
//       "Laws and Rules/Guidelines",
//       "Publications and Annual Reports",
//       "Various reports",
//     ],
//     image: "https://i.ibb.co/9T0mBfp/job.png",
//   },
//   {
//     title: "Notice/Order/Circular",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     types: [
//       "Notification/Circular",
//       "News bulletin",
//       "Tender/Recruitment Notice",
//     ],
//     image: "https://i.ibb.co/1qCPJDx/notice.png",
//   },
//   {
//     title: "Citizen e-services",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     types: [
//       "Commitment to provide service",
//       "Monitoring Committee",
//       "Policy/Circular/Circular",
//     ],
//     image: "https://i.ibb.co/KWHqBV5/population.png",
//   },
//   {
//     title: "Annual Performance Agreement",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     types: [
//       "APAMS software link",
//       "Monitoring and evaluation report",
//       "Annual performance and results",
//     ],
//     image: "https://i.ibb.co/6DhKY8g/commitment.png",
//   },
//   {
//     title: "Grievance Management",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     types: [
//       "Commitment to provide service",
//       "Various reports",
//       "Innovation Team",
//     ],
//     image: "https://i.ibb.co/nRRr2Ym/management.png",
//   },
//   {
//     title: "Right to Information",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     types: [
//       "Responsible Officer Authority",
//       "Application and appeal form",
//       "Implementation progress report",
//     ],
//     image: "https://i.ibb.co/HDBJXkL/human-rights.png",
//   },
//   {
//     title: "Budget and projects",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     types: [
//       "Annual purchase plan",
//       "Budget and MTBF budget",
//       "Important completed projects",
//     ],
//     image: "https://i.ibb.co/bRDDG01/budget.png",
//   },
//   {
//     title: "Commitment to provide service",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     types: [
//       "Information on digital implemented",
//       "Simplified list of services",
//       "Example of service facilitation",
//     ],
//     image: "https://i.ibb.co/6DhKY8g/commitment.png",
//   },
// ];


const TopFacalitys = () => {
    const {data} = useGetProductsQuery([
        { name: "page", value: "1" },
        { name: "limit", value: "2" },
      ]);
      console.log(data?.data?.product);
      const projects = data?.data?.product?.map((item) => ({
        title: item?.name,
        description:item?.description,
          
        types: [
          
        ],
        image: "",
      })) || []
      
      
  return (
    <div className="px-2 md:px-8 xl:px-16  mx-auto md:mt-20  mt-10">
      <div className="mb-10 text-center">
        <div className="flex justify-center items-center gap-2">
          {/* <img src={signe} alt="check-mark" className="w-12 md:w-14" /> */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            Informaion
            <span className="text-[#4CAF50]"> Catagory</span>
          </h2>
        </div>
        <p className="mt-3 text-sm md:text-base text-gray-600">
          Organize and classify essential data into relevant categories for easy
          access and better understanding. Ensure information is grouped
          logically to enhance user experience and streamline navigation.
          Quickly find the information you need with clear, structured
          categories designed for simplicity and efficiency.
        </p>
      </div>

      <HoverEffect items={projects} />
      <button className="  w-full flex justify-center items-center">
        <span className=" bg-[#4CAF50] w-32 text-gray-50 px-5 py-2 rounded-md">
          Seemore
        </span>
      </button>
    </div>
  );
};

export default TopFacalitys;
