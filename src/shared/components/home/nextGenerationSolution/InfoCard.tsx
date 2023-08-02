import { PreImage } from "../../common/PreImage";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col justify-center items-center border-r-slate-500 border-r-2 p-5 py-100 cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        translateY: isHovered ? "-50%" : 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <PreImage
        src="https://media.istockphoto.com/id/807772812/photo/free-price-tag-label.jpg?b=1&s=612x612&w=0&k=20&c=fzSheLfuW29DGtg5nVudNgp0Wzvh4oaxTrI0qoZtsPU="
        height={200}
      />
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-medium">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default InfoCard;
