export interface ISeminar {
  title: string;
  description: string
  address: string
  time: string
}
const ContentEvent = ({seminarData}: ISeminar) => {
  return (
    <div className="absolute bottom-0 right-0 w-2/3 bg-white text-black p-5">
      <h3>{seminarData.title}</h3>
      <div className="flex flex-col justify-start items-start gap-3">
        <h1>{seminarData.description}</h1>
        <p>{seminarData.address}</p>
        <p>{seminarData.time}</p>
      </div>
    </div>
  );
};

export default ContentEvent;
