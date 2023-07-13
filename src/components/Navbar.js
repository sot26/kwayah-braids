import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { MdOutlineDirections } from "react-icons/md";
import { ImImages } from "react-icons/im";
import logo from "../asset/logo.png";
import Slide from "react-reveal/Slide";

function Navbar() {
  var [nav, setNav] = useState(false);
  function navClick() {
    setNav(!nav);
  }

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (window.scrollY < 80) {
      setShow(false);
    }
  }, [window.scrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={
        show
          ? "fixed h-[80px] pt-2 mb-4 md:pt-[0]  w-full flex justify-between items-center px-4  shadow-xl bg-white z-20 transition-all ease-linear duration-100"
          : "h-[80px] pt-2 mb-4 md:pt-[0]  w-full flex justify-between items-center px-4  shadow-xl bg-white z-20 ease-linear duration-100"
      }
    >
      <header className="flex justify-between w-full skill">
        {/* logo */}
        <div className=" font-semibold text-xl sm:text-2xl logo">
          <a href="/" className="flex justify-center items-center">
            <img src={logo} className="w-[50px] sm:w-[70px] h-auto" />
            Kwayah Hair Salon
          </a>
        </div>

        {/* menu */}
        <div className="hidden md:flex">
          <ul className="flex ">
            <li className="px-3 cursor-pointer text-[23px] hover:scale-105 duration-500 hover:text-[#B5AF93] ">
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                className="flex items-center justify-center"
              >
                <FaPhoneAlt size={20} /> <p className="pl-2">Contact Us</p>
              </Link>
            </li>
            <li className="px-3 cursor-pointer text-[23px] hover:scale-110 duration-500 hover:text-[#B5AF93] ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/dir//Kwayah+African+braiding+Hair+Salon/data=!4m8!4m7!1m0!1m5!1m1!1s0x8640e9a09660e01d:0xe697640ae08129f1!2m2!1d-95.5288142!2d29.6708163"
                className="flex items-center justify-center"
              >
                <MdOutlineDirections size={20} />{" "}
                <p className="pl-2">Get Direction</p>
              </a>
            </li>
            <li className="px-3 cursor-pointer text-[23px] hover:scale-110 duration-500 hover:text-[#B5AF93] ">
              <Link
                to="Gallary"
                smooth={true}
                duration={500}
                className="flex items-center justify-center"
              >
                <ImImages size={20} /> <p className="pl-2">Gallery</p>
              </Link>
            </li>
          </ul>
        </div>
        {/* icons */}
        <div
          onClick={navClick}
          className="md:hidden z-20 flex justify-center items-center"
        >
          {!nav ? (
            <FaBars size={20} className=" cursor-pointer" />
          ) : (
            <FaTimes size={20} className=" cursor-pointer" />
          )}
        </div>

        {/* mobile menu */}
        <Slide right>
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 right-0 z-10 w-[45%] h-[100vh] bg-white flex flex-col pl-8 py-10 shadow-xl shadow-[#354259]"
            }
          >
            <li className="py-6 text-1xl">
              <Link onClick={navClick} to="Home" smooth={true} duration={500}>
                <span className="cursor-pointer">Home</span>
              </Link>
            </li>
            <li className="py-6 text-1xl">
              <Link onClick={navClick} to="Home" smooth={true} duration={500}>
                <span className="cursor-pointer">Contact Us</span>
              </Link>
            </li>
            <li className="py-6 text-1xl">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/dir//Kwayah+African+braiding+Hair+Salon/data=!4m8!4m7!1m0!1m5!1m1!1s0x8640e9a09660e01d:0xe697640ae08129f1!2m2!1d-95.5288142!2d29.6708163"
              >
                <span className="cursor-pointer"> Get Direction </span>
              </a>
            </li>
            <li className="py-6 text-1xl">
              <Link onClick={navClick} to="Skills" smooth={true} duration={500}>
                <span className="cursor-pointer">Gallery</span>
              </Link>
            </li>
          </ul>
        </Slide>
      </header>
    </div>
  );
}

export default Navbar;
