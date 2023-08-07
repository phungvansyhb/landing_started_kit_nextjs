import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import InitBasicAnimation from "../../common/InitBasicAnimation";
import { PreImage } from "../../common/PreImage";
import IconArrowLeft from "../../icon/IconArrowLeft";
import IconArrowRight from "../../icon/IconArrowRight";
import ContentBanner from "./ContentBanner";
export interface Data {
  title: string;
  description: string;
  image: string;
}

interface Props {
  data: Data[];
}
const Banner = ({ data }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Data>(data[0] as Data);
  const handleNext = () => {
    setSelectedTab((prevTab): Data | any => {
      const nextIndex = data.indexOf(prevTab) + 1;
      return nextIndex < data.length ? data[nextIndex] : data[0];
    });
  };
  const handlePrev = () => {
    setSelectedTab((prevTab): Data | any => {
      const prevIndex = data.indexOf(prevTab) - 1;
      return prevIndex >= 0 ? data[prevIndex] : data[data.length - 1];
    });
  };
  
  return (
    <section className="block py-24 bg-transparent">
      <div className="snap-x-mandatory scrollbar-none relative max-h-[700px] flex overflow-hidden text-white">
        <div className="relative w-full flex justify-between items-center mx-auto">
        <ContentBanner selectedTab={selectedTab && selectedTab} />
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.title : "empty"}
            initial={{ x: -10, opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="w-full flex-shrink-0 snap-start"
          >
            <PreImage src={selectedTab && selectedTab.image} height={1080} width={1980} layer={true} alt={"Banner"} className="rounded-tl-[90%] rounded-tr-[0%] border-b-8 transform translate-y-72"/>
          </motion.div>
        </AnimatePresence>
        </div>
        <InitBasicAnimation className="absolute bottom-1 right-10">
          <div className="flex items-center justify-between gap-5">
            <ul className="hidden md:flex items-center justify-between gap-5">
              {data.map((item, idx) => (
                <li
                  key={idx}
                  className={`${
                    item === selectedTab ? "text-white" : "text-slate-300 "
                  } cursor-pointer font-medium`}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.title}`}
                  {item === selectedTab ? (
                    <motion.div layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-5 cursor-pointer z-30">
              <IconArrowLeft onClick={handlePrev} />
              <IconArrowRight onClick={handleNext} />
            </div>
          </div>
        </InitBasicAnimation>
      </div>
    </section>
  );
};

export default Banner;
