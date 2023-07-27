import { IWhyUsData, WhyUsData } from "@/shared/mock/whyUs";
import { motion } from "framer-motion";
interface Props {
  selectedIcon: IWhyUsData;
}
const ContentWhyUs = ({ selectedIcon }: Props) => {
  return (
    <div className="w-2/3 flex flex-col justify-start items-center">
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
