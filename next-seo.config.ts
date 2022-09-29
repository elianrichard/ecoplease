import { DefaultSeo, DefaultSeoProps } from "next-seo";
import { domain } from "./config";

// things to input on react component
// title, description, openGraph.title, openGraph.description, openGraph.url !!!, canonical !!!

const seo: DefaultSeoProps = {
  titleTemplate: "ECOPLEASE | %s",
  dangerouslySetAllPagesToNoFollow: true, //TO DO
  dangerouslySetAllPagesToNoIndex: true, //TO DO
  defaultTitle: "ECOPLEASE | The Best Eco-Packaging in Indonesia",
  description:
    "ECOPLEASE, the best eco-friendly, sustainable, degradable, recyclable and home compostable food packaging, cups, and straw in Indonesia",
  openGraph: {
    title: "ECOPLEASE | The Best Eco-Packaging in Indonesia",
    description:
      "ECOPLEASE, the best eco-friendly, sustainable, degradable, recyclable and home compostable food packaging, cups, and straw in Indonesia",
    type: "website",
    locale: "en_ID",
    site_name: "ECOPLEASE INDONESIA",
    images: [
      {
        url: `${domain}/asset/logo-512.png`,
        width: 512,
        height: 512,
        alt: "ECOPLEASE Logo Icon",
      },
    ],
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0",
    },
    {
      name: "author",
      content: "ECOPLEASE Indonesia",
    },
    {
      name: "mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "ECOPLEASE",
    },
    {
      name: "theme-content",
      content: "#CB3233",
    },
    {
      name: "image",
      content: `${domain}/asset/logo-512.png`,
    },
    {
      property: "og:latitude",
      content: "-6.208514583056725",
    },
    {
      property: "og:longitude",
      content: "106.62867284803622",
    },
    {
      property: "og:locality",
      content: "Kota Tangerang",
    },
    {
      property: "og:region",
      content: "Banten",
    },
    {
      property: "og:postal-code",
      content: "15143",
    },
    {
      property: "og:country-name",
      content: "Indonesia",
    },
    {
      property: "og:email",
      content: "ecoplease.co@gmail.com",
    },
    {
      property: "og:phone_number",
      content: "6287888199947",
    },
    {
      property: "og:street-address",
      content:
        "Ruko Great Western Jl. M.H. Thamrin Blk. AA2 No.29, RT.007/RW.001, Panunggangan Utara",
    },
  ],
  additionalLinkTags: [
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};

export default seo;
