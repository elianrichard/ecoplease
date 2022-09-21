import React from "react";
import { NextPage } from "next";
import { FAQPageJsonLd } from "next-seo";

import MetaHead from "../modules/_common/MetaHead";
import Layout from "../modules/FaqsPage/Layout";

import FaqContent from "../modules/_common/FaqContent";

const Faqs: NextPage = () => {
  const faqSeo = {
    title: "Frequently Asked Questions",
    description:
      "Frequently Asked Questions on ECOPLEASE best eco-friendly, sustainable, degradable, recyclable and home compostable food packaging, cups, and straw in Indonesia",
  };

  const faqJsonLd = FaqContent.map((titleEl) =>
    titleEl.faqs.map((el) => ({
      questionName: `${titleEl.title} - ${el.question}`,
      acceptedAnswerText: `${titleEl.title} - ${el.answer}`,
    }))
  ).flat();

  return (
    <>
      <MetaHead {...faqSeo} />
      <FAQPageJsonLd mainEntity={faqJsonLd} />
      <Layout />
    </>
  );
};

export default Faqs;
