import { fakeMenu } from "@/shared/mock/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuNGS from "../../icon/logo/MenuNGS";

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
      className={`sticky top-0 z-50 w-full flex justify-between items-center gap-5 py-5 px-10 bg-white ${
        isScrolled
          ? "border-b-[1px] border-opacity-50 border-gray-300 absolute inset-0 bg-[#e4e4e4] bg-opacity-10 backdrop-filter backdrop-blur duration-500 ease-in-out"
          : "bg-transparent bg-opacity-100 duration-500 ease-in-out"
      } transition`}
    >
      <div className="flex justify-around items-center">
      <MenuNGS />
      <ul className="justify-center items-cente gap-3 hidden lg:flex ml-10">
        {fakeMenu.map((item, inx) => (
          <Link href={"#"} key={inx}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
      </div>
      <div className="absolute right-5 flex justify-center items-center gap-2">
        <button className="bg-[#FBA704] hover:bg-orange-500 text-white font-bold py-2 px-4 rounded cursor-pointer hidden lg:block">
          Liên hệ
        </button>
      </div>
      <div className="block md:hidden">...</div>
    </section>
  );
};

export default Header;
