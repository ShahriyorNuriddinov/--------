import React from "react";
import logo from "../assets/img/logo.svg";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10">
      <div className="container1 bg-[#7A969A] flex items-center justify-between px-4">
        <img src={logo} alt="Logo" className="w-32 sm:w-auto" />
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden lg:flex items-center gap-4 xl:gap-5 text-white font-semibold text-base xl:text-lg">
            <li className="hover:text-gray-200 cursor-pointer transition-colors">
              Главная
            </li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">
              Про гида
            </li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">
              Программа тура
            </li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">
              Стоимость
            </li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">
              Блог
            </li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">
              Контакты
            </li>
          </ul>
          <button className="font-semibold text-sm sm:text-base text-white bg-[#1a3e3e] p-2 sm:p-3 px-4 sm:px-6 rounded-sm hover:bg-[#163333] transition-colors whitespace-nowrap">
            Консультация
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;