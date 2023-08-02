import { seminarData } from "@/shared/mock/seminarEvent";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PreImage } from "../../common/PreImage";
import ContentEvent, { ISeminar } from "./ContentEvent";

const SeminarEvent = () => {
  const [selectedTab, setSelectedTab] = useState<ISeminar>(
    seminarData[0] as ISeminar
  );

  return (
    <section className="w-full flex flex-col justify-around items-center mx-auto px-16 py-10">
      <div className="w-full grid grid-cols-6 justify-between items-end gap-10">
        <AnimatePresence>
          {seminarData.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0.8,
                  transform: "translateX(-10px)",
                }}
                animate={{
                  opacity: item === selectedTab ? 1 : 0.8,
                  transform:
                    item === selectedTab
                      ? "translateX(0)"
                      : "translateX(-10px)",
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className={`${
                  item === selectedTab ? "col-span-3" : "col-span-1"
                } w-full flex-shrink-0 snap-start cursor-pointer`}
                onClick={() => setSelectedTab(item)}
              >
                 <motion.div
                  layout
                  className={`${
                    item === selectedTab ? "col-span-3" : "col-span-1"
                  } w-full`}
                >
                <PreImage src={item.image} height={650} />
                {item === selectedTab ? (
                  <ContentEvent seminarData={item} />
                ) : (
                  ""
                )}
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SeminarEvent;
