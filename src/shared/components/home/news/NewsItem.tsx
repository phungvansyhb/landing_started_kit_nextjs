import BtnFindOut from "../../common/BtnFindOut";
import { INews } from "@/shared/mock/news";
interface Props {
  data: INews;
}
const NewsItem = ({ data }: Props) => {
  return (
    <div className="flex flex-col justify-start items-start p-3" style={{borderBottom: "1px solid #555"}}>
      <h2>{data.title}</h2>
      <p className="text-sm text-slate-500">{data.description}</p>
      <BtnFindOut />
    </div>
  );
};

export default NewsItem;