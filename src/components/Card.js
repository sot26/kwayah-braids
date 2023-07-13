import React from "react";
import quote from "../asset/quote.png";

const Card = (props) => {
  return (
    <div className="max-w-[400px] max-h-[500px] rounded-xl shadow-2xl my-3 sm:my-0">
      <div className="relative w-full h-full bg-white rounded-2xl ">
        <img
          src={quote}
          alt="quote logo"
          className="absolute top-[20px] left-[10px] xxs:top-[40px] xxs:left-[20px] z-[-5px] h-[60px] w-auto opacity-50"
        />
        <div className="w-full xxs:px-8 xxs:py-6 px-3 py-2 z-10 ">
          <p className="text-[23px] xxs:text-[30px] font-extrabold mb-3 xxs:mb-5">
            {props.name}
          </p>
          <p className="testimonial font-normal text-sm xxs:text-base">
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
