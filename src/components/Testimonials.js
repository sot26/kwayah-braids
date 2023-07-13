import React from "react";
import Card from "./Card";

const Testimonials = () => {
  return (
    <div className="w-full h-auto py-8">
      <div className="w-full flex justify-center items-center flex-col">
        <p className="text-[15px] xxs:text-[20px] sm:text-[32px] font-bold my-2 md:my-4">
          Testimonials
        </p>
        <p className="text-[23px] xxs:text-[30px] sm:text-[50px] font-extrabold my-0 md:my-4">
          What Clients Says
        </p>
      </div>
      <div className="sm:flex sm:items-center sm:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-[15px] xxs:px-[20px] md:px-[50px] lg:px-[122px] ">
          <Card
            name="Jane A"
            desc="Went here to get knotless gypsy braids and I was impressed by the excellent finish. Love my hair so much. Wasn’t able to get his name but he did a great job. The other ladies did well two. I had 2 ppl working on my hair. If you’re in a hurry tell them in advance so you can get multiple ppl working on your head. They play music and it’s just peaceful vibes. Deff recommended"
          />
          <Card
            name="Sesarena Work"
            desc="Kwayah is a professional at what he does, he has been doing it for a
            long time and learned in his home country. It was my first time
            coming and the best braids I’ve ever had done. Very tight and on
            point. I did two simple braids with hair added. I will be back
            for sure and tell all my friends. Great work Kwayah!"
          />
          <Card
            name="Shamikka Ideele"
            desc="I came in as a walk in and was immediately seated, the atmosphere/vibe is nice, music playing and air running (major + in Houston 😄). I had 2 braiders on my head (small box braids. 5 1/2 hours), neither were heavy hand. Next day and I can move my head freely without the stiff neck (iykyk lol)
Highly recommend! Very Professional, Great Price and Work!"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 md:mt-12">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://search.google.com/local/writereview?placeid=ChIJHeBglqDpQIYR8SmB4Apkl-Y"
        >
          <button className="text-sm md:text-base mr-6 px-3 py-2 border-[1.3px] border-black rounded-[10px] font-semibold hover:scale-105 duration-500 hover:bg-black hover:text-white">
            Write a review
          </button>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://search.google.com/local/reviews?placeid=ChIJHeBglqDpQIYR8SmB4Apkl-Y"
        >
          <button className="text-sm md:text-base px-3 py-2 border-[1.3px] border-black rounded-[10px] font-semibold hover:scale-105 duration-500 hover:bg-white hover:text-black bg-black text-white">
            Read more
          </button>
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
