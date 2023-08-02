import { NGSDataGSL } from "@/shared/mock/nextGenerationSolution";
import InfoCard from "./InfoCard";

const NextGenerationSolution = () => {
  return (
    <section>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <h1>{NGSDataGSL[0].title}</h1>
        </div>
        <p>{NGSDataGSL[0].des}</p>
      </div>
      <div className="w-full max-h-[250px] grid grid-cols-5 bg-[#FBA704] overflow-hidden">
        {NGSDataGSL.map((item, idx) => (
          <InfoCard key={idx} title={item.title} description={item.des} />
        ))}
      </div>
    </section>
  );
};

export default NextGenerationSolution;
