import { motion } from "framer-motion";
import IconLineDirection from "../icon/IconLineDirection";

interface Props {
  cls?: string;
  colorSvg?: string
}

const BtnFindOut = ({ cls, colorSvg }: Props) => {
  const buttonVariants = {
    hover: {
      backgroundColor: "var(--blue-color-600)",
      width: "100%",
      opacity: 0.3      
    },
  };

  return (
    <motion.button
      whileHover="hover"
      className={`relative flex justify-between items-center gap-3 text-black text-left py-4 px-4 rounded cursor-pointer mt-3 ${cls}`}
    >
      <p className="text-sm">Tìm hiểu thêm</p>
      <IconLineDirection color={colorSvg} />
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
