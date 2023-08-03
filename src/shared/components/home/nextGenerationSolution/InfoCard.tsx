import { PreImage } from "../../common/PreImage";
import { motion } from "framer-motion";
import { useState } from "react";
import BtnFindOut from "../../common/BtnFindOut";

interface Props {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col justify-center items-center p-5 cursor-pointer overflow-hidden border-collapse"
      style={{ border: "1px solid #555" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? "var(--blue-color-400)" : "#fff",
        color: isHovered ? "#fff" : "#000",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-start">
        <PreImage
          src="https://media.istockphoto.com/id/807772812/photo/free-price-tag-label.jpg?b=1&s=612x612&w=0&k=20&c=fzSheLfuW29DGtg5nVudNgp0Wzvh4oaxTrI0qoZtsPU="
          width={50}
          height={50}
          alt="solution"
          className="mb-10"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-10">
        <h1 className="text-2xl uppercase">{title}</h1>
        <p>{description}</p>
        <BtnFindOut />
      </div>
    </motion.div>
  );
};

export default InfoCard;
