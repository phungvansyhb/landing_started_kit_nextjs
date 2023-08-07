import Head from 'next/head';
import LayoutWebsite from '@/shared/components/layout/LayoutWebsite';
import Banner from '@/shared/components/home/banner';
import { bannerData } from '@/shared/mock/banner';
import NextGenerationSolution from '@/shared/components/home/nextGenerationSolution';
import WhyUs from '@/shared/components/home/whyUs';
import Testimonial from '@/shared/components/home/testimonial';
import Service from '@/shared/components/home/service';
import Event from '@/shared/components/home/event';
import News from '@/shared/components/home/news';
import Partner from '@/shared/components/home/partner';
import Security from '@/shared/components/home/security';
import Slogan from '@/shared/components/home/slogan';
import AboutUs from '@/shared/components/home/aboutUs';
import dynamic from 'next/dynamic';
import ConnectUs from '@/shared/components/home/connectUs';

const ScrollRevealWrapper = dynamic(() => import('@/shared/components/common/ScrollRevealWrapper'), { ssr: false });
export function Home() {
  return (
    <>
      <Head>
        <title>Trang chủ NGS</title>
        <meta name='description' content='Trang chủ NGS' />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <ScrollRevealWrapper>
        <Banner data={bannerData} />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'left', distance: '30px', duration: 1000 }}>
        <NextGenerationSolution />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'top', distance: '30px', duration: 1000 }}>
        <Service />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper revealConfig={{ origin: 'bottom', distance: '30px', duration: 1000 }}>
        <Security />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <Slogan />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <AboutUs />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <WhyUs />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <Event />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <News />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <Partner />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <Testimonial />
      </ScrollRevealWrapper>
      <ScrollRevealWrapper>
        <ConnectUs />
      </ScrollRevealWrapper>
    </>
  );
}
// export async function getServerSideProps() {
//   try {
//     // Thực hiện yêu cầu API bằng Axios
//     const response = await axios.get("API_URL");
//     const data = response.data;

//     return {
//       props: {
//         bannerData: data.bannerData,
//         // Các dữ liệu phần tĩnh khác
//       },
//     };
//   } catch (error) {
//     // Xử lý lỗi nếu có
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         bannerData: [],
//       },
//     };
//   }
// }
Home.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default Home;
