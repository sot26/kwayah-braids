import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-full h-full px-[15px] xxs:px-[20px] md:px-[50px] lg:px-[122px] py-8">
      <div className="flex justify-center items-center flex-col">
        <p className="text-[15px] xxs:text-[20px] sm:text-[32px] font-bold my-2 md:my-4">
          Contact
        </p>
        <p
          name="Contact"
          className="text-[23px] xxs:text-[30px] sm:text-[50px] font-extrabold my-0 mb-1 md:my-4"
        >
          Visit Shop Today
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.6883616134537!2d-95.5288142!3d29.670816300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e9a09660e01d%3A0xe697640ae08129f1!2sKwayah%20African%20braiding%20Hair%20Salon!5e0!3m2!1sen!2sng!4v1688154858818!5m2!1sen!2sng"
        className="w-full h-[80vh]"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="pt-6 flex-col sm:flex-row sm:flex justify-between px-[20px] md:px-[50px] lg:px-[120px]">
        <div>
          <p className=" text-xl sm:text-2xl">Contact</p>
          <a href="tel:+18329334910">
            <button className="text-sm md:text-base py-1 px-2 xxs:px-3 xxs:py-2 border-[1.3px] sm:mt-3 border-black rounded-[10px] font-semibold hover:scale-105 duration-500 hover:bg-white bg-black text-white hover:text-black">
              Call Now
            </button>
          </a>
        </div>
        <div>
          <p className="text-xl sm:text-2xl mt-3 sm:mt-0">Business Hours</p>
          <div className="sm:pt-3">
            <div className="flex items-center">
              <AiOutlineClockCircle />
              <p className="pl-2 text-sm">Monday To Friday - 9am to 9pm</p>
            </div>
            <div className="flex items-center">
              <AiOutlineClockCircle />
              <p className="pl-2 text-sm">Monday To Friday - 12pm to 5pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {/* <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/kwayah_braids/"
        >
          <FaFacebookF className="border-[1px] border-black  hover:text-white hover:bg-black p-2 text-[40px]" />
        </a> */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/kwayah_braids/"
        >
          <BsInstagram className="border-[1px] mt-4  border-black  hover:text-white hover:bg-black p-2 text-[40px] ml-3" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
