import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";

import SEO from "../next-seo.config";
import { GoogleAnalytics } from "nextjs-google-analytics";

import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsappButton from "../components/WhatsappButton";

import { server } from "../config";
import axios, { AxiosResponse } from "axios";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ProductsType } from "../modules/_common/types/ProductsType";
import { PostsType } from "../modules/_common/types/PostType";

const queryClient = new QueryClient();

const prefecthQuery = async () => {
  if (!queryClient.getQueryData(["products"]))
    await queryClient.prefetchQuery(
      ["products"],
      (): Promise<AxiosResponse<ProductsType[]>> => {
        return axios.get(`${server}/wp-json/wp/v2/products`);
      },
      {
        staleTime: 10 * 1000, // only prefetch if older than 10 seconds
      }
    );
  if (!queryClient.getQueryData(["posts"]))
    await queryClient.prefetchQuery(
      ["posts"],
      (): Promise<AxiosResponse<PostsType[]>> => {
        return axios.get(`${server}/wp-json/wp/v2/posts`);
      },
      {
        staleTime: 10 * 1000,
      }
    );
};

prefecthQuery();

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const excludeFooterHeader = ["/linktree"];

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAnalytics trackPageViews/>
      <DefaultSeo {...SEO} />
      <div className="relative overflow-x-hidden">
        {!excludeFooterHeader.includes(asPath) && <Header />}
        <main className={!excludeFooterHeader.includes(asPath) ? "pt-16" : ""}>
          <Component {...pageProps} />
        </main>
        {!excludeFooterHeader.includes(asPath) && <Footer />}
        <WhatsappButton />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
