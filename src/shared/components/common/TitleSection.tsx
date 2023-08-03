interface Props {
  title: string;
  description: string;
  findMore: boolean;
}
const TitleSection = (data: Props) => {
  return (
    <div className="w-full flex flex-col gap-3 mt-5">
      <p className="text-[var(--blue-color-300)]">{data.title}</p>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl w-1/2">{data.description}</h1>
        {data.findMore ? (
          <p className="text-sm text-[var(--blue-color-300)]">Tìm hiểu thêm</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TitleSection;
