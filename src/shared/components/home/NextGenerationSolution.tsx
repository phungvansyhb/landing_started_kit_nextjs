import { NGSData } from "@/shared/mock/nextGenerationSolution";

const NextGenerationSolution = () => {
  return (
    <section>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <h1>{NGSData.title}</h1>
        </div>
        <p>{NGSData.des}</p>
      </div>
    </section>
  );
};

export default NextGenerationSolution;
