import { useState } from 'react';
import IconLineDirection from '../../icon/IconLineDirection';

export interface Props {
  connectUsData: any[];
}
const FormConnectUs = ({ connectUsData }: Props) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Email:', fullName);
    console.log('Phone Number:', phoneNumber);
  };
  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <h1 className='text-3xl font-thin pl-8'>Bạn quan tâm đến...</h1>
      <div className='mt-3 grid grid-cols-3 gap-3 pl-8'>
        {connectUsData &&
          connectUsData.map((item, idx) => {
            return (
              <div key={idx} className='text-center p-3 rounded-full border-2 border-slate-400'>
                {item}
              </div>
            );
          })}
      </div>
      <div className='w-full flex justify-start items-start'>
        <form onSubmit={handleSubmit} className='w-full p-8 rounded'>
          <div className='w-full mb-4'>
            <label htmlFor='fullName' className='block mb-1'>
              Họ và tên của bạn?
            </label>
            <input
              type='text'
              id='fullName'
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className='w-full bg-transparent px-3 py-2 border-b rounded'
              required
            />
          </div>
          <div className='w-full mb-4'>
            <label htmlFor='phoneNumber' className='block mb-1'>
              Số điện thoại:
            </label>
            <input
              type='tel'
              id='phoneNumber'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className='w-full bg-transparent px-3 py-2 border-b rounded'
              required
            />
          </div>

          <button
            type='submit'
            className={`bg-[#fff] text-black relative flex justify-between items-center gap-3 text-left py-4 px-4 cursor-pointer mt-3 rounded-md hover:bg-[#c1c0c0] hover:ease-in-out hover:transition`}
          >
            <p className='text-sm'>Đăng ký</p>
            <IconLineDirection color='#000' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormConnectUs;
