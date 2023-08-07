import { eventData } from "src/shared/mock/event";
import TitleSection from "../../common/TitleSection";
import EventItem from "./EventItem";

const Event = () => {
  return (
    <section className="px-32">
      <TitleSection
        title="Sự kiện"
        description="Gặp gỡ chuyên gia từ NGS và khám phá cách phát triển doanh nghiệp của bạn."
        findMore={true}
      />
      <div className="w-full mt-10 grid grid-cols-3">
        {eventData.map((item, idx) => (
          <EventItem key={idx} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Event;
