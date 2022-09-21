import React from "react";
import { useRouter } from "next/router";
import { NextSeo, NextSeoProps } from "next-seo";

import { domain } from "../../config";

interface Props {
  title?: string;
  description?: string;
  openGraph?: any;
  others?: any;
}

const MetaHead = ({ title, description, openGraph, ...others }: Props) => {
  const { asPath } = useRouter();
  const SEO: NextSeoProps = {
    title,
    description,
    canonical: `${domain + asPath}`,
    openGraph: {
      title,
      description,
      url: `${domain + asPath}`,
      ...openGraph,
    },
    ...others,
  };

  return <NextSeo {...SEO} />;
};

export default MetaHead;
