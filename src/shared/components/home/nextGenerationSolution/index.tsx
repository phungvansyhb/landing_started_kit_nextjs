import { NGSDataGSL } from "@/shared/mock/nextGenerationSolution";
import TitleSection from "../../common/TitleSection";
import InfoCard from "./InfoCard";

const NextGenerationSolution = () => {
  return (
    <section className="px-32">
      <TitleSection
        title="Giải pháp"
        description="Cung cấp các giải pháp số cho doanh nghiệp của bạn"
        findMore={true}
      />
      <div className="w-full min-h-[250px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 bg-[var(--blue-color-500)] overflow-hidden">
        {NGSDataGSL.map((item, idx) => (
          <InfoCard key={idx} title={item.title} description={item.des} />
        ))}
      </div>
    </section>
  );
};

export default NextGenerationSolution;
