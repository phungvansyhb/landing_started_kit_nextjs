import { PreImage } from '../../common/PreImage';
import { IEvent } from '@/shared/mock/event';
import BtnFindOut from '../../common/BtnFindOut';
interface Props {
  data: IEvent;
}
const EventItem = ({ data }: Props) => {
  return (
    <div className='flex flex-col justify-between items-start p-3 border-2 border-slate-200'>
      <PreImage width={400} src={data.image} height={200} alt={'event'} cls='object-cover' />
      <p>{data.title}</p>
      <h2>{data.description}</h2>
      <p>{data.address}</p>
      <p>{data.time}</p>
      <BtnFindOut />
    </div>
  );
};

export default EventItem;
