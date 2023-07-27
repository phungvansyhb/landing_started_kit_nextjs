import { IWhyUsData, WhyUsData } from "@/shared/mock/whyUs";
import IconFirst from "../../icon/iconLogoWhyUs/iconFirst";
import IconLast from "../../icon/iconLogoWhyUs/iconLast";
import IconMid from "../../icon/iconLogoWhyUs/iconMid";

interface Props {
  setSelectedIcon: any
  selectedIcon: IWhyUsData
  handleNext: () => void;
}

const IconNGS = ({ handleNext, setSelectedIcon, selectedIcon }: Props) => {
  return (
    <div onClick={handleNext} className="relative z-50 min-h-[300px] cursor-pointer">
      <IconFirst color={selectedIcon && selectedIcon.key === 1 ? "#7F569B" : "#C2C0BF"} onClick={() => setSelectedIcon(WhyUsData[0] as IWhyUsData)} className="absolute bottom-0 left-0" />
      <IconMid gradientColor={selectedIcon && selectedIcon.key === 2 ? "#2D77B4" : "#C2C0BF"} onClick={() => setSelectedIcon(WhyUsData[1] as IWhyUsData)} className="absolute bottom-0 left-[38px]" />
      <IconLast color={selectedIcon && selectedIcon.key === 3 ? "#F36B29" : "#C2C0BF"} onClick={() => setSelectedIcon(WhyUsData[2] as IWhyUsData)} className="absolute bottom-[20px] left-[8px]" />
    </div>
  );
};

export default IconNGS;
