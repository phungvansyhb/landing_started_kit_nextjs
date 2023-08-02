import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [isCountingForward, setIsCountingForward] = useState(true);
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
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (isCountingForward) {
  //       handleNext()
  //     } else {
  //       handlePrev()
  //     }
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [data, isCountingForward]);

  return (
    <section className="block">
      <div className="snap-x-mandatory scrollbar-none relative flex min-h-[650px] w-screen overflow-hidden text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.title : "empty"}
            initial={{ x: -10, opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="w-full flex-shrink-0 snap-start"
          >
            <PreImage src={selectedTab ? selectedTab.image : ""} height={650} />
          </motion.div>
        </AnimatePresence>
        <ContentBanner selectedTab={selectedTab && selectedTab} />
        <div className="absolute bottom-10 right-10">
          <div className="flex items-center justify-between gap-5">
            <ul className="hidden md:flex items-center justify-between gap-5">
              {data.map((item, idx) => (
                <li
                  key={idx}
                  className={`${
                    item === selectedTab ? "text-blue-500" : ""
                  } cursor-pointer font-medium`}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.title}`}
                  {item === selectedTab ? (
                    <motion.div className="" layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-5 cursor-pointer z-30">
              <IconArrowLeft onClick={handlePrev} />
              <IconArrowRight onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
