import { motion } from "framer-motion";
import IconLineDirection from "../icon/IconLineDirection";

const BtnFindOut = () => {
  return (
    <motion.button
      initial={{ backgroundColor: "#FF8B37", backgroundPosition: "0% 50%" }}
      whileHover={{  backgroundColor: "#f1c40f", backgroundPosition: "200% 50%" }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="flex justify-between items-center gap-3 text-white text-left py-4 px-4 rounded cursor-pointer mt-3"
    >
      Tìm hiểu thêm
      <IconLineDirection color="#fff" />
    </motion.button>
  );
};

export default BtnFindOut;
