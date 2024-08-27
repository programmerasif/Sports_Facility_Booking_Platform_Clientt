import avater from "../../assets/avater.png";

const Banner = () => {
  return (
    <div className=" bg-[#12143D] text-gray-50 flex justify-center items-center mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32 ">
      <div className="w-full flex justify-between items-center mt-32 relative flex-col-reverse md:flex-row pb-10">
        <div className=" w-full md:w-[50%]">
          <div className="flex justify-start items-start flex-col gap-5">
            <div className="text-5xl font-merriweather font-semibold max-w-2xl">
              {" "}
              Reserve a sports <span className="text-[#F7A400]">arena</span> and
              shine with your skills.
            </div>
            <p className="max-w-[24rem]">
              Book Arena or Coaches, play with sports enthusiats and track your
              fitness goals.
            </p>
            <button className="px-8 py-2 border text-[#F7A400] border-[#F7A400] rounded-md font-semibold">
              Get Start
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-[50%]">
          <div className="lg:absolute hidden top-0 right-0 bg-white text-black lg:flex justify-between items-center gap-1 px-2 py-1 rounded-md">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" lxl:size-10 lg:size-8 md:size-5 text-[#F7A400]"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-normal items-start">
              <span className="text-gray-900 xl:font-bold font-semibold md:text-sm">17k</span>
              <span className="text-gray-900 text-xs">Coustomer Rivew</span>
            </div>
          </div>
          <img src={avater} alt="" className="w-[90%]" />
          <div className="lg:absolute hidden bottom-40 left-[40%]  bg-white xl:flex justify-between items-center gap-1 px-2 py-1 rounded-md">
          <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10 text-[#F7A400]"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-normal items-start">
              <span className="text-gray-900 font-bold text">17k</span>
              <span className="text-gray-900 text-xs">Coustomer Rivew</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
