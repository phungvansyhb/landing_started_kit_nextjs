import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutWebsite from "@/shared/components/layout/LayoutWebsite";
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});
const ConfigLayout = ({
  children,
  getLayout,
}: {
  children: React.ReactElement;
  getLayout: (page: ReactElement) => React.ReactNode;
}) => {
  return <>{getLayout(children)}</>;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <LayoutWebsite>{page}</LayoutWebsite>);
  return (
    <>
      <Head>
        <title>Website NGS</title>
        <link
          rel="icon"
          href="https://careerfinder.vn/wp-content/uploads/2020/05/vietnam-airline-logo.jpg"
        />
        <link
          rel="apple-touch-icon"
          href="https://careerfinder.vn/wp-content/uploads/2020/05/vietnam-airline-logo.jpg"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ConfigLayout getLayout={getLayout}>
          <Component {...pageProps} />
        </ConfigLayout>
      </QueryClientProvider>
    </>
  );
}
