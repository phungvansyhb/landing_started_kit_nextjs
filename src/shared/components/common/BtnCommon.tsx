import { motion } from "framer-motion";
import IconLineDirection from "../icon/IconLineDirection";

interface Props {
  cls?: string;
  colorSvg?: string
}

const BtnCommon = ({ cls, colorSvg }: Props) => {
  const buttonVariants = {
    hover: {
      backgroundColor: "var(--violet-color-600)",
      width: "100%",
      opacity: 0.3      
    },
  };

  return (
    <motion.button
      whileHover="hover"
      className={`bg-[#723AD4] text-white relative flex justify-between items-center gap-3 text-left py-4 px-4 cursor-pointer mt-3 rounded-full ${cls}`}
    >
      <p className="text-sm">Tìm hiểu thêm</p>
      <IconLineDirection color={colorSvg} />
      <motion.div
        className="absolute left-0 top-0 h-full w-[30%] rounded-full"
        variants={buttonVariants}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      ></motion.div>
    </motion.button>
  );
};

export default BtnCommon;
