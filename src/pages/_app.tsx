import "@/styles/globals.css";
import "@/styles/business-color.css";
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
        <meta name="description" content="Website NGS" />
        <meta name="keywords" content="Công nghệ thông tin, Giải pháp số" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="/logo.svg"
        />
        <link
          rel="apple-touch-icon"
          href="/logo.svg"
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
