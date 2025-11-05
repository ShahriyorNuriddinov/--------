import React from "react";
import img1 from "../assets/img/svg.svg";
import img2 from "../assets/img/svg1.svg";
import img3 from "../assets/img/svg3.svg";
import main1 from "../assets/img/main1.png";
import main2 from "../assets/img/main2.png";
import main3 from "../assets/img/main3.png";
import main4 from "../assets/img/main4.png";

const Offer = () => {
  return (
    <div className="bg-[#f3f5f4] py-8 sm:py-10 lg:py-12">
      <div className="container1">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          <div className="flex flex-col justify-between gap-6 sm:gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-normal text-xl sm:text-2xl text-[#f2be22]">
                наше предложение
              </p>
              <h2 className="font-extrabold text-2xl sm:text-3xl text-[#18121e]">
                Лучшие программы для тебя
              </h2>
              <p className="font-normal text-base sm:text-lg text-[#18121e] max-w-xl">
                Его корни уходят в один фрагмент классической латыни 45 года
                н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                профессор латыни из колледжа.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0">
                  <img src={img1} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="max-w-xl">
                  <h2 className="font-bold text-base sm:text-lg text-[#18121e]">
                    Опытный гид
                  </h2>
                  <p className="font-normal text-xs sm:text-sm text-[#000] mt-2">
                    Для современного мира базовый вектор развития предполагает
                    независимые способы реализации соответствующих условий
                    активизации.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0">
                  <img src={img2} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="max-w-xl">
                  <h2 className="font-bold text-base sm:text-lg text-[#18121e]">
                    Опытный гид
                  </h2>
                  <p className="font-normal text-xs sm:text-sm text-[#000] mt-2">
                    Для современного мира базовый вектор развития предполагает
                    независимые способы реализации соответствующих условий
                    активизации.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0">
                  <img src={img3} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="max-w-xl">
                  <h2 className="font-bold text-base sm:text-lg text-[#18121e]">
                    Опытный гид
                  </h2>
                  <p className="font-normal text-xs sm:text-sm text-[#000] mt-2">
                    Для современного мира базовый вектор развития предполагает
                    независимые способы реализации соответствующих условий
                    активизации.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <img src={main1} alt="" className="w-full h-auto rounded-lg" />
            <img src={main2} alt="" className="w-full h-auto rounded-lg" />
            <img src={main3} alt="" className="w-full h-auto rounded-lg" />
            <img src={main4} alt="" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
