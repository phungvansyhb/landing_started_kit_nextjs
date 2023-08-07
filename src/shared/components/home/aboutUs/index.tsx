import { aboutUsData } from "src/shared/mock/aboutUs";
import TitleSection from "../../common/TitleSection";

const AboutUs = () => {
  return (
    <section className='px-32 mt-10'>
      <TitleSection
        title='Về chúng tôi'
        description='Những con số ấn tượng'
        findMore={false}
        className='flex justify-between items-center'
      />
      <div className='w-full flex justify-between items-center mt-10 bg-transparent overflow-hidden'>
        {aboutUsData.map((item, idx) => {
          return (
            <div key={idx} className="pt-5 flex flex-col justify-center items-start gap-5" style={{ borderTop: "1px solid #555" }}>
              <div className="text-5xl">{item.number}+</div>
              <p>{item.content}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default AboutUs;
