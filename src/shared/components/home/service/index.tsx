import { NGSDataService } from "@/shared/mock/service";
import { PreImage } from "../../common/PreImage";
import TitleSection from "../../common/TitleSection";
import ServiceSection from "./ServiceSection";
import { AnimatePresence } from "framer-motion";

const Service = () => {
  return (
    <section className="px-32">
      <TitleSection
        title="Dịch vụ"
        description="Thay đổi bộ mặt Doanh nghiệp của bạn bằng giải pháp quản lý mới"
        findMore={true}
      />
      <div className="w-full mt-10 flex items-start justify-between">
        <PreImage
          src={
            "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg"
          }
          height={400}
          width={400}
          layer={false}
          alt={"Banner"}
          className="relative rounded-lg"
        />
        <AnimatePresence>
        <div className="w-1/2 flex flex-col justify-center items-center">
          {NGSDataService.map((item, idx) => {
            return <ServiceSection key={idx} item={item} idx={idx} />;
          })}
        </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Service;
