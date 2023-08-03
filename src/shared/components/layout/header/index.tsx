import { fakeMenu } from "@/shared/mock/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PreImage } from "../../common/PreImage";
import logo from "../../../../../public/logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 150 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <section
      className={`w-full sticky top-0 z-50 flex justify-between items-center gap-5 px-5 md:px-10 bg-white transition ${isScrolled
          ? "absolute text-white border-b-[1px] border-opacity-50 border-slate-300 inset-0 bg-slate-900 bg-opacity-10 backdrop-filter backdrop-blur duration-500 ease-in-out"
          : "bg-transparent bg-opacity-100 duration-500 ease-in-out "
        }`}
    >
      <div className="flex justify-around items-center">
        <PreImage height={100} width={100} src={logo} alt={"Logo"} layer={false} />
        <ul className="justify-center items-cente gap-5 hidden lg:flex ml-10">
          {fakeMenu.map((item, inx) => (
            <Link href={"#"} key={inx}>
              <li>{item}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="absolute right-5 flex justify-center items-center gap-2">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
        </svg></button>
        {/* Dropdown menu */}
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
        <button className="bg-[var(--blue-color-500)] hover:bg-[var(--blue-color-600)] text-white font-bold py-2 px-4 rounded cursor-pointer hidden lg:block">
          Liên hệ
        </button>
      </div>
      <div className="block md:hidden">...</div>
    </section>
  );
};

export default Header;
