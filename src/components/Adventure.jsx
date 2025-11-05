import React from "react";
import img from "../assets/img/popular_tour.png";
import img2 from "../assets/img/popular_tour2.png";
import img3 from "../assets/img/popular_tour3.png";

export const Adventure = () => {
  return (
    <div className="container1 py-8 sm:py-10 lg:py-12">
      <div className="flex flex-col items-center justify-between gap-2 sm:gap-4">
        <p className="font-normal text-xl sm:text-2xl text-[#f2be22] text-center">
          по версии отдыхающих
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#18121e] text-center">
          Популярные направления
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between my-5 sm:my-8 lg:my-10 gap-4 sm:gap-6">
        <img src={img} alt="" className="w-full sm:w-1/3 h-auto" />
        <img src={img2} alt="" className="w-full sm:w-1/3 h-auto" />
        <img src={img3} alt="" className="w-full sm:w-1/3 h-auto" />
      </div>
      <div className="flex items-center justify-center mt-6 sm:mt-8">
        <button className="bg-[#1a3e3e] py-3 sm:py-4 px-6 sm:px-9 rounded-sm font-semibold text-sm sm:text-base text-[#fdfdfd] hover:bg-[#2a5e5e] transition-colors duration-300">
          Рейтинг направлений
        </button>
      </div>
    </div>
  );
};

export default Adventure ;