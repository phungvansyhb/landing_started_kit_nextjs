import { motion } from "framer-motion";
import IconLineDirection from "../icon/IconLineDirection";

interface Props {
  cls?: any;
}

const BtnFindOut = ({ cls }: Props) => {
  const buttonVariants = {
    hover: {
      backgroundColor: "#f1c40f",
      width: "100%",
      opacity: 0.3      
    },
  };

  return (
    <motion.button
      initial={{ backgroundColor: "#FF8B37" }}
      whileHover="hover"
      className={`relative flex justify-between items-center gap-3 text-white text-left py-4 px-4 rounded cursor-pointer mt-3 ${cls}`}
    >
      <p className="text-sm">Tìm hiểu thêm</p>
      <IconLineDirection className="text-sm" color="#fff" />
      <motion.div
        className="absolute left-0 top-0 h-full w-0"
        variants={buttonVariants}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      ></motion.div>
    </motion.button>
  );
};

export default BtnFindOut;
