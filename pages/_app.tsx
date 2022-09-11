import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsappButton from "../components/WhatsappButton";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <DefaultSeo {...SEO} />
      <QueryClientProvider client={queryClient}>
        <div className="relative overflow-x-hidden">
          <Header />
          <main className="pt-16">
            <Component {...pageProps} />
          </main>
          <Footer />
          <WhatsappButton />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
