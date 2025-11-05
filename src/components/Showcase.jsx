import React from "react";
import img from "../assets/img/showcase.png";

const Showcase = () => {
  return (
    <div
      className="relative min-h-[600px] md:h-[800px] lg:h-[1000px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="relative z-10 w-full max-w-4xl flex flex-col gap-5 justify-end h-full">
        <div className="">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            Насладись прогулкой в горах с командой единомышленников
          </h1>
        </div>

        <div
          style={{
            backdropFilter: "blur(6px)",
            background: "rgba(255, 255, 255, 0.2)",
          }}
          className="flex flex-col sm:flex-row items-center justify-around rounded-lg mb-10 sm:mb-20 py-5 "
        >
          <div className="">
            <select
              className="border font-bold text-base text-[#fdfdfd] border-solid border-[#e1e3e4] px-4 py-3 outline-none"
              name=""
              id=""
            >
              <option className="text-black" value="">
                Локация для тура
              </option>
              <option className="text-black" value="">
                Москва
              </option>
              <option className="text-black" value="">
                Сочи
              </option>
            </select>
            <p className="font-normal text-sm text-[#fdfdfd] mt-2">
              выберите из списка
            </p>
          </div>
          <div className="">
            <input
              className="border font-bold text-base text-[#fdfdfd] border-solid border-[#e1e3e4] px-4 py-3 outline-none"
              type="date"
              name=""
              id=""
            />
            <p className="font-normal text-sm text-[#fdfdfd] mt-2">
              укажите диапазон
            </p>
          </div>
          <div className="">
            <select
              className="border font-bold text-base text-[#fdfdfd] border-solid border-[#e1e3e4] px-4 py-3 outline-none"
              name=""
              id=""
            >
              <option className="text-black" value="">
                Участники
              </option>
              <option className="text-black" value="">
                1
              </option>
              <option className="text-black" value="">
                2
              </option>
            </select>
            <p className="font-normal text-sm text-[#fdfdfd] mt-2">
              выберите из списка
            </p>
          </div>
          <div className="">
            <button className="bg-[#fdfdfd] py-4 px-9 rounded-sm hover:bg-gray-800 hover:text-white cursor-pointer">
              Найти программу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
