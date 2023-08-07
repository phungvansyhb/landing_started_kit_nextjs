import "../styles/globals.css";
import "../styles/business-color.css";
import "../styles/customStyle.scss";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutWebsite from "src/shared/components/layout/LayoutWebsite";
import Head from "next/head";
import { Inter } from 'next/font/google'
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const interText = Inter({ subsets: ["vietnamese"], display: 'swap', weight: ['500', '600', '700', '800', '900'] })

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
  return <main className={interText.className}>
    {/* TODO change theme */}
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {getLayout(children)}
    </NextThemesProvider>
  </main>
};



export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <LayoutWebsite>{page}</LayoutWebsite>);
  return (
    <main className={interText.className}>
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

      </QueryClientProvider >
    </main>
  );
}
