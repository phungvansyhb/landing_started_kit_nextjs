import { ITestimonial, testimonialData } from "@/shared/mock/testimonial";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PreImage } from "../../common/PreImage";
import TitleSection from "../../common/TitleSection";
import ContentTestimonial from "./ContentTestimonial";

const Testimonial = () => {
  const [isHovered, setIsHovered] = useState<ITestimonial>(
    testimonialData[0] as ITestimonial
  );

  return (
    <section className="mx-auto px-32 py-10">
      <div className="w-full flex flex-col justify-around items-center">
        <TitleSection
          title="Testimonial"
          description="Khách hàng nói gì về chúng tôi"
          findMore={true}
        />
        <div className="mt-10 w-full grid grid-cols-3 justify-between items-end gap-10">
          <AnimatePresence>
            {testimonialData.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setIsHovered(item)}
                  onMouseLeave={() => setIsHovered(item)}
                  className="w-full flex-shrink-0 snap-start cursor-pointer"
                >
                  <motion.div
                    layout
                    className={`w-full relative`}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  >
                    <PreImage
                      width={1080}
                      src={item.image}
                      height={650}
                      alt={"event"}
                      layer={item !== isHovered}
                      cls="object-cover"
                    />
                    <ContentTestimonial data={item} />
                  </motion.div>
                </div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
