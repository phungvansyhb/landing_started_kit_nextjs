import { IWhyUsData } from "@/shared/mock/whyUs";
import { motion } from "framer-motion";
interface Props {
  selectedIcon: IWhyUsData;
}
const ContentWhyUs = ({ selectedIcon }: Props) => {
  return (
    <div className="w-2/3 flex flex-col justify-start items-start">
      <p className="w-full text-[#555]" style={{borderBottom: "1px solid #555"}}>{selectedIcon ? selectedIcon.category : ""}</p>
      <motion.div className="text-sm lg:text-lg mt-5">
        {selectedIcon ? selectedIcon.title : ""}
      </motion.div>
      <motion.div className="text-sm lg:text-lg mt-5">
        {selectedIcon ? selectedIcon.description : ""}
      </motion.div>
    </div>
  );
};

export default ContentWhyUs;
