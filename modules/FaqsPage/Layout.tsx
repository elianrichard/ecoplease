import React, { useState } from "react";

import FaqCard from "./FaqCard";

import FaqBgImg from "../../asset/pictures/faq/faq-bg.png";
import PaperTextureImg from "../../asset/pictures/paper-texture-3.png";

const placeHolderFaqs = [
  {
    question: "Bahannya terbuat dari apa aja?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ad accusamus non illum nulla rerum maiores illo doloresconsequatur praesentium.",
  },
  {
    question: "Bahannya terbuat dari apa aja?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ad accusamus non illum nulla rerum maiores illo doloresconsequatur praesentium.",
  },
  {
    question: "Bahannya terbuat dari apa aja?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ad accusamus non illum nulla rerum maiores illo doloresconsequatur praesentium.",
  },
  {
    question: "Bahannya terbuat dari apa aja?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ad accusamus non illum nulla rerum maiores illo doloresconsequatur praesentium.",
  },
  {
    question: "Bahannya terbuat dari apa aja?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ad accusamus non illum nulla rerum maiores illo doloresconsequatur praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ad accusamus non illum nulla rerum maiores illo doloresconsequatur praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ad accusamus non illum nulla rerum maiores illo doloresconsequatur praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ad accusamus non illum nulla rerum maiores illo doloresconsequatur praesentium.",
  },
];

interface FormInputType {
  name: string;
  question: string;
}

const Layout = () => {
  const [selectedCard, setSelectedCard] = useState<number>(NaN);
  const [formInput, setFormInput] = useState<FormInputType>({
    name: "",
    question: "",
  });

  return (
    <div className="mb-1 flex min-h-screen w-screen">
      <div
        className="relative min-h-screen w-full flex-[4] bg-skinCream"
        style={{
          backgroundImage: `url(${FaqBgImg.src})`,
          backgroundSize: "100%",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="h-full w-full bg-darkRed/30">
          <div className="flex h-full w-full flex-col items-center justify-start gap-5 p-20">
            {placeHolderFaqs.map((el, i) => (
              <FaqCard
                question={el.question}
                answer={el.answer}
                index={i}
                setSelected={setSelectedCard}
                selected={selectedCard}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="min-h-screen w-full flex-[2] bg-skinCream/50"
        style={{
          backgroundImage: `url(${PaperTextureImg.src})`,
          backgroundSize: "100% 100vh",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="relative p-20">
          <p className="mb-10 text-5xl font-bold uppercase leading-tight text-darkRed">
            Frequently Asked Questions
          </p>
          <div className="relative flex w-full flex-col items-center gap-5 rounded-xl bg-white p-10 pb-14">
            <p className="text-center text-3xl font-bold text-black">
              Ask a Question!
            </p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              className="w-full border-b-2 border-black bg-transparent p-2 outline-none"
              value={formInput.name}
              onChange={(e) =>
                setFormInput((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <textarea
              name="question"
              autoComplete="off"
              placeholder="Your Question"
              className="faq-textarea-scrollbar w-full border-b-2 border-black bg-transparent p-2 outline-none"
              rows={2}
              value={formInput.question}
              onChange={(e) =>
                setFormInput((prev) => ({ ...prev, question: e.target.value }))
              }
            />
            <button className="absolute bottom-0 translate-y-1/2 rounded-xl  bg-black px-5 py-2 text-3xl font-bold text-skinCream">
              SUMBIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
