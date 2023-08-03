import { ITestimonial } from "@/shared/mock/testimonial";

export interface Props extends ITestimonial {
 
}
const ContentTestimonial = ({data}: any) => {
  return (
    <div className="absolute bottom-0 right-0 left-0 w-full text-white p-5">
      <h2 className="text-center text-2xl">{data.title}</h2>
      <div className="flex flex-col justify-start items-start gap-3">
        <h1>{data.description}</h1>
      </div>
    </div>
  );
};

export default ContentTestimonial;
