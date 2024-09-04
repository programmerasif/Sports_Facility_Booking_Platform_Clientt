import insta from '../../assets/skill-icons_instagram.png'
import linkedin from '../../assets/skill-icons_linkedin.png'
import fb from '../../assets/logos_facebook.png'
import logo from '../../assets/logo/logo.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=" bg-[#12143D] min-h-[20vh] shadow-xl mt-20">
          <div className=" px-4 sm:px-6 lg:px-20 grid grid-cols-4">
            <div className=" text-white flex justify-center items-center flex-col">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full  py-5 md:py-20">
                <div className="flex flex-col justify-between items-start">
                  <NavLink to="/" className="flex justify-end flex-1 md:flex-none">
                    <img src={logo} alt="" className='w-20' />
                  </NavLink>
                  <div className="font-semibold text-white">
                    Providing reliable Service since 2010
                  </div>
                </div>
    
                <div className="flex flex-col">
                  <h5 className="text-xl font-semibold">Contact</h5>
                  <div className="text-white">
                    <p className="text-sm text-white">
                      {` 102,Cox's Bazar, Dhaka, Banglaesh.`}
                    </p>
                    <h5 className="text-2xl font-semibold mt-5 flex justify-start gap-2 items-center">
                      <span>+880-1721520848</span>{" "}
                    </h5>
                    <p className="flex justify-st items-center gap-2 border-b-2 border-[#F7A400] w-full md:w-[55%]">
                      <span>game.space.booking@gmail.com </span>
                    </p>
                  </div>
                </div>
               
                <div className="flex flex-col gap-3 text-white">
                  <span className=" text-xl font-semibold">Legal</span>
                  <a className="cursor-pointer hover:underline">Terms of use</a>
                  <a className="cursor-pointer hover:underline">Privacy policy</a>
                  <a className="cursor-pointer hover:underline">Cookie policy</a>
                </div>
                <div className="flex flex-col gap-3 text-white">
                  <span className=" text-xl font-semibold">Company</span>
                  <a className="cursor-pointer hover:underline">About us</a>
                  <a className="cursor-pointer hover:underline">Contact</a>
                  <a className="cursor-pointer hover:underline">Jobs</a>
                </div>
              </div>
              <div className="text-white flex justify-between items-center border-t-2 border-gray-100 w-full text-sm py-5 text-center sm:text-start">
                <div> 2024 - All right reserved by Asif Khan</div>
                <div className="flex gap-4">
                  <img src={fb} alt="" className="w-7"/>
                  <img src={insta} alt="" className="w-7"/>
                  <img src={linkedin} alt="" className="w-7"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Footer;