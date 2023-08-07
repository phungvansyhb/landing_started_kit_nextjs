import { newsData } from "src/shared/mock/news";
import { PreImage } from "../../common/PreImage";
import TitleSection from "../../common/TitleSection";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <section className="px-32">
      <TitleSection
        title="Tin tức"
        description="Gặp gỡ chuyên gia từ NGS và khám phá cách phát triển doanh nghiệp của bạn."
        findMore={true}
      />
      <div className="w-full mt-10 flex justify-between items-start gap-10">
        <PreImage
          src={
            "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg"
          }
          height={750}
          width={600}
          layer={false}
          alt={"News"}
          className="w-full relative rounded-lg"
        />
        <div className="w-1/2 mt-10 grid grid-rows-3">
          {newsData.map((item, idx) => (
            <NewsItem key={idx} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
