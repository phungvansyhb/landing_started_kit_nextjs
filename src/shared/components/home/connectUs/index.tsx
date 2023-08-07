import { connectUsData } from '@/shared/mock/connectUs';
import IconConnectUs from '../../icon/connectUs/IconConnectUs';
import FormConnectUs from './FormConnectUs';

const ConnectUs = () => {
  return (
    <section className='mx-auto px-32 py-10'>
      <div className='w-full p-12 flex justify-between items-start bg-[#5E18F4] rounded-md'>
        <div className='w-[50%] flex flex-col justify-between items-start gap-5'>
            <h1 className='text-3xl'>Kết nối với NGS</h1>
            <p className='text-xl'>Hãy cho chúng tôi biết về nhu cầu của bạn, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất!</p>
            <IconConnectUs />
        </div>
        <FormConnectUs connectUsData={connectUsData} />
      </div>
    </section>
  );
};

export default ConnectUs;
