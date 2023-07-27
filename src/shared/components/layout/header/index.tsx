import { fakeMenu } from "@/shared/mock/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconArrowDown from "../../icon/IconArrowDown";
import MenuNGS from "../../icon/logo/MenuNGS";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
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
      className={`sticky top-0 z-40 w-full flex justify-between items-center gap-5 py-5 px-10 bg-white ${
        isScrolled
          ? "border-b-[1px] border-opacity-50 border-gray-300 absolute inset-0 bg-[#e4e4e4] bg-opacity-10 backdrop-filter backdrop-blur duration-500 ease-in-out"
          : "bg-transparent bg-opacity-100 duration-500 ease-in-out"
      } transition`}
    >
      <MenuNGS />
      <ul className="justify-center items-cente gap-5 hidden lg:flex">
        {fakeMenu.map((item, inx) => (
          <Link href={"#"} key={inx}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
      <div className="relative flex justify-center items-center gap-2">
        <button
          id="dropdownDefaultButton"
          onClick={handleToggle}
          className="text-white bg-slate-300 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          <>
            {/* <VI/> */}
            <IconArrowDown />
          </>
        </button>
        {isOpen && (
          <div
            id="dropdown"
            className="z-10 absolute top-10 -right-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li></li>
              <li>Data Protection Policy</li>
            </ul>
          </div>
        )}
        <button className="bg-[#FBA704] hover:bg-orange-500 text-white font-bold py-2 px-4 rounded cursor-pointer hidden lg:block">
          Liên hệ
        </button>
      </div>
    </section>
  );
};

export default Header;
