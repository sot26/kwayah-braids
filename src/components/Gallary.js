import React from "react";
import pic1 from "../asset/pic1.jpg";
import pic2 from "../asset/pic2.jpg";
import pic3 from "../asset/pic3.jpg";
import pic4 from "../asset/pic4.jpg";
import pic5 from "../asset/pic5.jpg";
import pic6 from "../asset/pic6.jpg";
import pic7 from "../asset/pic7.jpg";
import pic8 from "../asset/pic8.jpg";
import pic9 from "../asset/pic9.jpg";

const Gallary = () => {
  return (
    <div
      name="Gallary"
      className="w-full h-full flex justify-center items-center flex-col bg-gray-100 pb-12"
    >
      <p className="text-[15px] xxs:text-[20px] sm:text-[32px] font-bold my-2 xxs:my-4">
        Gallary
      </p>

      <div className="grid grid-cols-2  lg:grid-cols-4 gap-2 xxs:gap-4 px-[10px] md:px-[50px] lg:px-[122px] my-3">
        <div className="grid gap-2 xxs:gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic1} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic2} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic3} alt="" />
          </div>
        </div>
        <div class="grid gap-2 xxs:gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic4} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic5} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic6} alt="" />
          </div>
        </div>
        <div class="grid gap-2 xxs:gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic7} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic8} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic9} alt="" />
          </div>
        </div>
        <div class="grid gap-2 xxs:gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic1} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic2} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
