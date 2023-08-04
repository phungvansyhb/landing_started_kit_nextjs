import { PreImage } from '../../common/PreImage';

const Slogan = () => {
  return (
    <section className='px-32 mt-10'>
      <div className='w-full p-32 mt-10 flex items-start justify-between bg-[#5E18F4] rounded-sm'>
        <PreImage
          src={'https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-nen-may-bay-vietnam-airline.jpg'}
          height={150}
          width={150}
          layer={false}
          alt={'Service'}
          className='w-full relative rounded-full'
        />
        <div className='w-1/2 flex flex-col justify-between items-start gap-10'>
          <div className='p-5 bg-[#946de7] rounded-lg'>
            <p>Nguyễn Thế Trường</p>
            <p>Giám đốc NGSD</p>
          </div>
          <p>
            Với khát vọng trở thành người đồng hành trao quyền cho mọi cá nhân và tổ chức, NGS cam kết luôn nỗ lực phát
            triển những giải pháp công nghệ thông tin tối ưu nhất để đồng hành
          </p>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
