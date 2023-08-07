import { LatestNews } from 'src/shared/components/business/news/LatestNews';
import { PreImage } from 'src/shared/components/common/PreImage';
import { useAppDispatch } from 'src/shared/hooks/useRedux';
import { useGetListLatestArticle } from 'src/shared/schema/models/IArticle';
import { toggleMenu } from 'src/shared/stores/appSlice';
import { TIME_FORMAT } from 'src/shared/utils/constants/appContants';
import { Affix, Breadcrumb, Col, Row } from 'antd';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next'
import DashBoardLayout from 'src/shared/components/layouts/dashboard/DashboardLayout';
import useTrans from 'src/shared/hooks/useTrans';
import Link from 'next/link';
import { URLS } from 'src/shared/utils/constants/appMenu';

interface Props {
  data: any
}
const DetailNews = ({ data }: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [html, setHtml] = useState<any>()
  const categoryName = 'Internal News';
  const { trans } = useTrans()
  const { data: dataLatestArticle } = useGetListLatestArticle({ search: categoryName });
  useEffect(() => {
    dispatch(toggleMenu(true))
    const convertHtml = data && parse(data.content as string);
    setHtml(convertHtml)
  }, [router])
  const getSlugTitle = router.asPath.split("/")[2]
  return (
    <>
      {data && (
        <Row gutter={12}>
          <Col xs={24} sm={24} lg={16}>
            <div className='relative w-full overflow-auto overflow-y-hidden'>
              <div className='absolute z-10 w-full'>
                <PreImage src={data.image} height={400} />
              </div>
              <div className='rounded-sm relative left-1/2 z-50 min-h-screen w-[95%] -translate-x-1/2 transform bg-white px-5 mobile:w-[98%] mobile:px-2 mt-40'>
                <div className='h-full w-full'>
                  <h1 className='m-0 pt-5 text-3xl'>{data.title}</h1>
                  <div className='flex items-center justify-start gap-2'>
                    <p className='bold'>{data.author}</p>
                    <li className='bg-gray'>{dayjs(data.createdDate).format(TIME_FORMAT)}</li>
                  </div>
                  <>{html}</>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <Affix offsetTop={0}>
              <div>
                <h1 className='pb-3'>{trans.page.article.latestNews}</h1>
                <Row gutter={24} justify={'start'} className='w-full'>
                  {dataLatestArticle?.data.content.slice(1, 6).filter(article => article.preview !== getSlugTitle).map((item, index) => {
                    return (
                      <Col xs={12} sm={12} lg={24} key={index}>
                        <LatestNews data={item} />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Affix>
          </Col>
        </Row>
      )}
    </>
  );
};
const BreadcrumbCpn = () => {
  const { trans } = useTrans();
  return (
    <>
      <div className='mx-6 mt-5 text-2xl font-bold mobile:mx-4'>Bài viết</div>
      <div className='mx-6 mt-5 mobile:m-4'>
        <Breadcrumb
          items={[
            {
              title: 'Agent Portal',
            },
            {
              title: <Link href={URLS.NEWS._}>{trans.menu.news}</Link>,
            },
            {
              title: "Bài viết",
            },
          ]}
        />
      </div>
    </>
  );
};

DetailNews.getLayout = (children: React.ReactNode) => (
  <DashBoardLayout breadcrumb={<BreadcrumbCpn />}>{children}</DashBoardLayout>
);
export default DetailNews;


export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug
  if (slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DEV_NEW_API_URL}/articles/get-by-slug/${slug}`);
    const result = await res.json();
    const data = result.data
    return {
      props: { data },
    };
  } else {
    return {
      props: {},
      notFound: true
    };
  }

}


export const getStaticPaths: GetStaticPaths = async (_ctx) => {
  return {
    paths: [],
    fallback: true
  }
}




