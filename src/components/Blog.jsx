import React from "react";
import blog1 from "../assets/img/blog1.png";
import blog2 from "../assets/img/blog2.png";
import blog3 from "../assets/img/blog3.png";
import blog4 from "../assets/img/blog4.png";

const blog = () => {
  return (
    <div className="bg-[#f3f5f4]">
      <div className="container1 py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col items-center justify-between gap-2 sm:gap-4">
          <p className="font-normal text-xl sm:text-2xl text-[#f2be22] text-center">
            делимся впечатлениями
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#18121e] text-center">
            Блог о путешествиях
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-4 sm:my-8">
          <div className="flex flex-col sm:flex-row bg-[#fdfdfd] rounded-xl p-4 sm:p-6">
            <div className="w-full sm:w-1/2">
              <img src={blog1} alt="" />
            </div>
            <div className="w-full sm:w-1/2 max-w-xs flex flex-col items-start justify-between py-4 sm:py-5 px-2 sm:px-4">
              <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-[#18121e] mb-2 sm:mb-4">
                Красивая Италия, какая она в реальности?
              </h2>
              <p className="font-normal text-xs sm:text-sm text-[#18121e] mb-4 sm:mb-6">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации.
              </p>
              <div className="flex items-center justify-between w-full">
                <p className="font-bold text-xs sm:text-sm text-[#f2be22]">
                  01/04/2023
                </p>
                <p className="font-bold text-xs sm:text-sm text-[#1a3e3e]">
                  читать статью
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bg-[#fdfdfd] rounded-xl p-4 sm:p-6">
            <div className="w-full sm:w-1/2">
              <img src={blog2} alt="" />
            </div>
            <div className="w-full sm:w-1/2 max-w-xs flex flex-col items-start justify-between py-4 sm:py-5 px-2 sm:px-4">
              <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-[#18121e] mb-2 sm:mb-4">
                Долой сомнения! Весь мир открыт для вас!
              </h2>
              <p className="font-normal text-xs sm:text-sm text-[#18121e] mb-4 sm:mb-6">
                Для современного мира базовый вектор развития предполагает
                независимые способы реализации соответствующих условий
                активизации ...
              </p>
              <div className="flex items-center justify-between w-full">
                <p className="font-bold text-xs sm:text-sm text-[#f2be22]">
                  01/04/2023
                </p>
                <p className="font-bold text-xs sm:text-sm text-[#1a3e3e]">
                  читать статью
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bg-[#fdfdfd] rounded-xl p-4 sm:p-6">
            <div className="w-full sm:w-1/2">
              <img src={blog3} alt="" />
            </div>
            <div className="w-full sm:w-1/2 max-w-xs flex flex-col items-start justify-between py-4 sm:py-5 px-2 sm:px-4">
              <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-[#18121e] mb-2 sm:mb-4">
                Как подготовиться к путешествию в одиночку?{" "}
              </h2>
              <p className="font-normal text-xs sm:text-sm text-[#18121e] mb-4 sm:mb-6">
                Для современного мира базовый вектор развития предполагает.
              </p>
              <div className="flex items-center justify-between w-full">
                <p className="font-bold text-xs sm:text-sm text-[#f2be22]">
                  01/04/2023
                </p>
                <p className="font-bold text-xs sm:text-sm text-[#1a3e3e]">
                  читать статью
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bg-[#fdfdfd] rounded-xl p-4 sm:p-6">
            <div className="w-full sm:w-1/2">
              <img src={blog4} alt="" />
            </div>
            <div className="w-full sm:w-1/2 max-w-xs flex flex-col items-start justify-between py-4 sm:py-5 px-2 sm:px-4">
              <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-[#18121e] mb-2 sm:mb-4">
                Индия ... летим?
              </h2>
              <p className="font-normal text-xs sm:text-sm text-[#18121e] mb-4 sm:mb-6">
                Для современного мира базовый.
              </p>
              <div className="flex items-center justify-between w-full">
                <p className="font-bold text-xs sm:text-sm text-[#f2be22]">
                  01/04/2023
                </p>
                <p className="font-bold text-xs sm:text-sm text-[#1a3e3e]">
                  читать статью
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6 sm:mt-8">
          <button className="bg-[#1a3e3e] py-3 sm:py-4 px-6 sm:px-9 rounded-sm font-semibold text-sm sm:text-base text-[#fdfdfd] hover:bg-[#2a5e5e] transition-colors duration-300">
            Другие материалы
          </button>
        </div>
      </div>
    </div>
  );
};

export default blog;
