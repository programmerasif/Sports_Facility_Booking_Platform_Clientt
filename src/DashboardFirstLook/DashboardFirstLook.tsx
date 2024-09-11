import Calendar from "@/pages/Calander/Canalder";
import welcome from "../assets/wellcom.png";
import { useGetProductsQuery } from "@/redux/feature/product/productApi";
import CommonFacality from "@/ComoneComponent/CommonFacality";

const DashboardFirstLook = () => {
    const today = new Date();
    const { data } = useGetProductsQuery(undefined);

  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'short', 
    month: 'short',   
    day: 'numeric'  
  });
  return (
    <div>
      <div className="flex justify-between items-center gap-5">
        <div className="min-w-[70%] bg- text-white bg-gradient-to-r from-[#2d3298] to-[#4a50c9] min-h-[32vh] rounded-md">
          <div className="flex justify-between items-center w-full">
            <div className="p-10 flex flex-col justify-between items-start h-[32vh] w-[50%]">
              <div>
                <div className=" flex justify-start items-center gap-2">
                  <div className="text-sm md:text-base">Sunny day</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                    </svg>
                  </div>
                </div>
                <div>{formattedDate} </div>
              </div>
              <div className="w-full">
                <h5 className="text-sm md:text-2xl xl:text-4xl w-full font-semibold">
                  Welcome Backe, Asif{" "}
                </h5>
                <span className="text-xs xl:text-sm">We are happy to have you allways connect with us </span>
              </div>
            </div>

            <div className="flex justify-end md:pe-20 w-[60%] xl:w-[50%]">
              <img src={welcome} alt="" className="xl:w-[50%]" />
            </div>
          </div>
        </div>
        <div className="w-[30%] hidden 2xl:block">
          <Calendar />
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-5 h-[1px] w-full" />
      <CommonFacality  facality={data}/>
    </div>
  );
};

export default DashboardFirstLook;
