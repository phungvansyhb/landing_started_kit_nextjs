import Head from "next/head";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Banner from "@/shared/components/home/banner";
import { bannerData } from "@/shared/mock/banner";

import { Inter } from "next/font/google";
import Image from "next/image";
import NextGenerationSolution from "@/shared/components/home/nextGenerationSolution";
import WhyUs from "@/shared/components/home/whyUs";
import SeminarEvent from "@/shared/components/home/seminarEvent";
const inter = Inter({ subsets: ["latin"] });

export function Home() {
  return (
    <>
      <Head>
        <title>Webiste Page</title>
      </Head>
      <Banner data={bannerData} />
      <NextGenerationSolution />
      <WhyUs />
      <SeminarEvent />
    </>
  );
}
Home.getLayout = (children: React.ReactNode) => (
  <LayoutWebsite>{children}</LayoutWebsite>
);
export default Home;
