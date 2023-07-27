import { AnimatePresence, motion } from "framer-motion";
import { Data } from ".";
import BtnFindOut from "../../common/BtnFindOut";
export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const wordAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};
interface Props {
  selectedTab: Data;
}
const ContentBanner = ({ selectedTab }: Props) => {
  return (
    <div className="absolute top-40 z-10 mx-auto flex w-4/5 min-h-screen flex-col px-16 leading-[90%] tracking-wide lg:w-[50%] lg:px-16">
      <div className="text-left text-4xl font-bold capitalize lg:text-6xl">
        <h1 className="inline-block pr-2 text-4xl lg:text-6xl">Cải Tiến</h1>
        <AnimatePresence mode="wait">
          <motion.span variants={staggerChildren} animate="animate">
            {selectedTab
              ? selectedTab.title.split(" ").map((word, idx) => (
                  <motion.div
                    key={idx}
                    className="inline-block text-[#FBA704]"
                    variants={wordAnimation}
                  >
                    <motion.span animate="animate" className="inline-block">
                      {word + "\u00A0"}
                    </motion.span>
                  </motion.div>
                ))
              : ""}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.div className="text-sm lg:text-lg mt-5">
        {selectedTab ? selectedTab.description : ""}
      </motion.div>
      <div className="w-2/3">
        <BtnFindOut />
      </div>
    </div>
  );
};

export default ContentBanner;
