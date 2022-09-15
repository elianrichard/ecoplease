import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsappButton from "../components/WhatsappButton";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo {...SEO} />
      <div className="relative overflow-x-hidden">
        <Header />
        <main className="pt-16">
          <Component {...pageProps} />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
