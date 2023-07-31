import { IWhyUsData, WhyUsData } from "@/shared/mock/whyUs";
import { useState } from "react";
import ContentWhyUs from "./ContentWhyUs";
import IconNGS from "./IconNGS";

const WhyUs = () => {
  const [selectedIcon, setSelectedIcon] = useState<IWhyUsData>(WhyUsData[0]);

  return (
    <>
      <section className="w-full flex flex-col justify-around items-center mx-auto px-16 py-10">
        <div className="w-full flex justify-between items-end">
          <h1 className="w-1/3 text-4xl font-bold">
            Tại sao nên chọn đồng hành cùng chúng tôi!
          </h1>
          <ul className="flex justify-between items-center gap-5">
            {WhyUsData.map((item, idx) => (
              <li
                key={idx}
                className={`${
                  item === selectedIcon ? "text-orange-500" : ""
                } cursor-pointer font-medium`}
                onClick={() => setSelectedIcon(item)}
              >
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-full">
            <ContentWhyUs selectedIcon={selectedIcon && selectedIcon} />
          </div>
          <div className="w-full z-40">
            <IconNGS selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
