import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsappButton from "../components/WhatsappButton";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className="overflow-x-hidden relative">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </>
  );
}

export default MyApp;
