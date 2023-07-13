import React from "react";
import { TbPointFilled } from "react-icons/tb";
import shop from "../asset/shop.jpg";

const Choose = () => {
  return (
    <div className="w-full h-[100vh] bg-gradient-to-r from-black relative">
      <div className="w-full h-full absolute bg-gradient-to-r from-black"></div>
      <img className="h-full w-full object-cover" src={shop} />
      <div className="w-full  absolute top-[2%] sm:top-[10%] md:top-0 lg:top-[15%]">
        <div className="w-full h-full flex-col md:mt-3 md:flex-row flex px-[15px] xxs:px-[20px] md:px-[50px] lg:px-[122px]">
          <div className="md:w-[60%] h-auto  text-white md:mr-[50px] flex justify-center items-center bg-black/20 rounded-xl">
            <div className="w-full">
              <p className="text-[20px] md:text-[45px] font-extrabold flex justify-center">
                Why Choose Us?
              </p>
              <ul className="list-disc">
                <li className="flex text-[11px] xxs:text-[15px] md:text-[25px] mb-2">
                  <TbPointFilled /> An environment that is consistently warm and
                  inviting.
                </li>
                <li className="flex text-[11px] xxs:text-[15px] md:text-[25px] mb-2">
                  <TbPointFilled /> Quality is the central focus of our masters.
                </li>
                <li className="flex text-[11px] xxs:text-[15px] md:text-[25px] mb-2">
                  <TbPointFilled /> Our clients' time and money are of utmost
                  importance to us.
                </li>
                <li className="flex text-[11px] xxs:text-[15px] md:text-[25px] mb-2">
                  <TbPointFilled /> Our focus lies solely on premium products
                  that are of the highest quality and hypoallergenic.
                </li>
                <li className="flex text-[11px] xxs:text-[15px] md:text-[25px] mb-2">
                  <TbPointFilled /> Before and after each use, all surfaces and
                  tools are thoroughly cleaned and disinfected.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-auto h-auto  mt-4 md:py-12 px-6 sm:mx-12 md:mx-0 rounded-[32px] bg-white flex flex-col justify-center items-center">
            <p className="text-[#B5AF93] text-[16px] md:text-[35px] font-bold mb-3">
              WORKING HOURS
            </p>
            <p className="text-[11px] xxs:text-[15px] md:text-[20px] pb-2">
              Mon: 9:00 AM – 9:00 PM
            </p>
            <p className="text-[11px] xxs:text-[15px] md:text-[20px] pb-2">
              Tue: 9:00 AM – 9:00 PM
            </p>
            <p className="text-[11px] xxs:text-[15px] md:text-[20px] pb-2">
              Wed: 9:00 AM – 9:00 PM
            </p>
            <p className="text-[11px] xxs:text-[15px] md:text-[20px] pb-2">
              Thu: 9:00 AM – 9:00 PM
            </p>
            <p className="text-[11px] xxs:text-[15px] md:text-[20px] pb-2">
              Fri: 9:00 AM – 9:00 PM
            </p>
            <p className="text-[11px] xxs:text-[15px] md:text-[20px] pb-2">
              Sat: 9:00 AM – 9:00 PM
            </p>
            <p className="text-[11px] xxs:text-[15px] md:text-[20px] pb-2">
              Sun: 12:00 – 5:00 PM
            </p>
            <button className="text-sm md:text-base mt-4 mb-2 py-1 px-2 xxs:px-3 xxs:py-2 border-[1.3px] border-black rounded-[10px] font-semibold hover:scale-105 duration-500 hover:bg-black hover:text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
