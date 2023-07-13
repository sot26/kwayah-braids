import React from "react";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";

const Home = () => {
  return (
    <div className="w-fulll h-full mb-10 xxs:mb-0 xxs:h-[100vh]">
      <div className="px-[15px] xxs:px-[20px] h-full md:px-[50px] lg:px-[122px] ">
        <div className="pt-12">
          <p className="text-[18px] xxs:text-[22px] md:text-[42px] font-medium">
            WELCOME TO
          </p>
          <p className="text-[22px] xxs:text-[30px] md:text-[55px] font-bold max-w-[550px]">
            Kwayah African braiding Hair Salon.
          </p>
          <p className="text-[28px] xxs:text-[37px] md:text-[64px] font-extrabold">
            Houston, Texas
          </p>
          <p className="flex items-center mb-4 text-xs xxs:text-base">
            <GrLocation size={19} className="mr-2 uppercase " />
            9910 South Gessner Road Houston, TX 77071 USA
          </p>
          <p className="flex items-center mb-2 xxs:mb-[20px] text-xs xxs:text-base">
            <FiPhoneCall size={19} className="mr-2" />
            (832) 933-4910
          </p>
          <button className="text-sm md:text-base py-1 px-2 xxs:px-3 xxs:py-2 border-[1.3px] border-black rounded-[10px] font-semibold hover:scale-105 duration-500 hover:bg-black hover:text-white">
            Book Now
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
