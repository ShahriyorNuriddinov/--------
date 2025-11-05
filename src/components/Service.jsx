import React from "react";
import img from "../assets/img/locat.png";
import img2 from "../assets/img/home.png";

const Service = () => {
  return (
    <div className="container1 py-8 sm:py-10 lg:py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
        <div className="relative w-full lg:w-1/2">
          <img src={img} alt="" className="" />
          <img
            className="absolute bottom-[-20px] sm:bottom-[-30px] left-4 sm:left-10 w-16 sm:w-auto"
            src={img2}
            alt=""
          />
        </div>

        <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 flex flex-col gap-4 sm:gap-6 lg:gap-8">
          <p className="font-normal text-lg sm:text-xl lg:text-2xl text-[#f2be22]">
            о нашем походе
          </p>
          <h3 className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#18121e] leading-tight">
            Исследуйте все горные массивы мира вместе с нами
          </h3>
          <p className="font-normal text-sm sm:text-base lg:text-lg text-[#18121e] leading-relaxed">
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
            латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
            самых странных слов в Lorem Ipsum, "consectetur"и занялся его
            поисками в классической латинской литературе.
          </p>
          <button className="bg-[#1a3e3e] text-white rounded-sm py-3 sm:py-4 px-6 sm:px-9 hover:bg-[#2a5e5e] transition-colors duration-300 self-start text-sm sm:text-base">
            Программа тура
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
