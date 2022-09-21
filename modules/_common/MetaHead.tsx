import React from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { domain } from "../../config";

interface Props {
  title?: string;
  description?: string;
  others?: any;
}

const MetaHead = ({ title, description, others }: Props) => {
  const { pathname } = useRouter();
  const SEO = {
    title,
    description,
    canonical: `${domain + pathname}`,
    openGraph: {
      title,
      description,
      url: `${domain + pathname}`,
    },
    ...others,
  };

  return <NextSeo {...SEO} />;
};

export default MetaHead;
