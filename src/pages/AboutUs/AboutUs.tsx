/* eslint-disable @typescript-eslint/no-explicit-any */
import { teamMembers } from "@/Const/AboutMember";

const AboutUs = () => {
    
        return (
          
        )
      
};

export default AboutUs;
const TeamMember = ({ name, role, img }: any) => (
    <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
      <div className="relative mb-5">
        <img src={img} alt={`${name} image`} className="w-28 h-28 rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent group-hover:border-def" />
      </div>
      <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-def">{name}</h4>
      <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">{role}</span>
    </div>
  );