import { IWhyUsData, WhyUsData } from "@/shared/mock/whyUs";
import { useState } from "react";
import TextHighLight from "../../common/TextHighLight";
import ContentWhyUs from "./ContentWhyUs";
import IconNGS from "./IconNGS";

const WhyUs = () => {
  const [selectedIcon, setSelectedIcon] = useState<IWhyUsData>(WhyUsData[0]);
  return (
    <>
      <section className="mx-auto px-32 py-10">
        <div className="w-full flex flex-col justify-around items-center">
          <TextHighLight text=" Điều gì tạo nên NGS" />
          <h1 className="text-3xl w-1/3 text-center">
            Tại sao nên chọn đồng hành cùng chúng tôi!
          </h1>
          <div className="w-full flex justify-between items-center gap-10">
            <div className="w-full z-40">
              <IconNGS
                selectedIcon={selectedIcon && selectedIcon}
                setSelectedIcon={setSelectedIcon}
              />
            </div>
            <div className="w-full">
              <ContentWhyUs selectedIcon={selectedIcon && selectedIcon} />
            </div>
          </div>
          <TextHighLight text="Xem thêm" />
        </div>
      </section>
    </>
  );
};

export default WhyUs;
