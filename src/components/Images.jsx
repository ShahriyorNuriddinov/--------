import React from "react";
import img1 from "../assets/img/images1.png";
import img2 from "../assets/img/images2.png";
import img3 from "../assets/img/images3.png";
import img4 from "../assets/img/images4.png";
import img5 from "../assets/img/images5.png";
import img6 from "../assets/img/images6.png";

const Images = () => {
  return (
    <div className="container1 py-6 sm:py-8 lg:py-12">
      <div className="flex flex-col items-center justify-between gap-2 sm:gap-4">
        <p className="font-normal text-xl sm:text-2xl text-[#f2be22] text-center">
          фото-отчет
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#18121e] text-center">
          Делимся впечатлениями
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-4 sm:my-6 lg:my-8">
        <img
          className="sm:col-span-2 lg:col-start-1 lg:col-end-3 w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
          src={img1}
          alt=""
        />
        <img
          className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
          src={img2}
          alt=""
        />
        <img
          className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
          src={img3}
          alt=""
        />
        <img
          className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
          src={img4}
          alt=""
        />
        <img
          className="sm:col-span-2 lg:col-start-2 lg:col-end-4 w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
          src={img5}
          alt=""
        />
        <img
          className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
          src={img6}
          alt=""
        />
      </div>
      <div className="flex items-center justify-center mt-4 sm:mt-6">
        <button className="bg-[#1a3e3e] py-3 sm:py-4 px-6 sm:px-9 rounded-sm font-semibold text-sm sm:text-base text-[#fdfdfd] hover:bg-[#2a5e5e] transition-colors duration-300">
          Наш pinterest
        </button>
      </div>
    </div>
  );
};

export default Images;
