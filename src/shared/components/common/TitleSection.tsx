interface Props {
  title: string;
  description: string;
  findMore: boolean;
  className?: string
}
const TitleSection = (data: Props) => {
  return (
    <div className='w-full flex flex-col gap-3 mt-5'>
      <p className='text-[var(--blue-color-300)]'>{data.title}</p>
      <div className={`w-full ${data.className}`}>
        <h1 className='text-3xl w-1/2'>{data.description}</h1>
        {data.findMore ? (
          <p className='text-sm w-1/4 opacity-80'>
            NGS (Next-Generation Solutions) là NGS nỗ lực trở thành doanh nghiệp hàng đầu Việt Nam, cung cấp các giải
            pháp; dịch vụ thông minh; đem lại giá trị lớn và phù hợp nhất{' '}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TitleSection;
