import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  item: any;
  idx: number;
}

const ServiceSection = ({ item, idx }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full py-3 flex flex-col gap-5 min-h-[100px] overflow-hidden cursor-pointer"
      style={{ borderBottom: "1px solid #555" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-start items-start gap-8">
        <div className="text-3xl">0{idx + 1}</div>
        <h1 className="text-3xl">{item.title}</h1>
      </div>

      <motion.div
        className="flex-col justify-center items-start pl-20"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <p>{item.des}</p>
        <p className="my-3 text-sm text-[var(--blue-color-300)] cursor-pointer">
          Tìm hiểu thêm
        </p>
      </motion.div>
    </div>
  );
};

export default ServiceSection;
