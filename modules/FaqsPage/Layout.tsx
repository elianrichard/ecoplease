import React, { useState } from "react";

import FaqCard from "./FaqCard";

import FaqBgImg from "../../asset/pictures/faq/faq-bg.png";
import PaperTextureImg from "../../asset/pictures/paper-texture-3.png";

import FaqContent from "./FaqContent";

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

  const onSubmit = () => {
    if (formInput.name && formInput.question)
      window.open(
        `https://wa.me/62812345678?text=Nama%3A%20${encodeURI(
          formInput.name
        )}%0APertanyaan%3A${encodeURI(formInput.question)}`,
        "_blank"
      );
    else alert("Please input all field!");
  };

  return (
    <div className="mb-1 flex w-screen flex-col-reverse md:min-h-screen md:flex-row">
      <div
        className="relative w-screen bg-skinCream md:min-h-screen md:w-3/5"
        style={{
          backgroundImage: `url(${FaqBgImg.src})`,
          backgroundSize: "100%",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="h-full w-full bg-darkRed/30">
          <div className="flex h-full w-full flex-col items-center justify-start gap-20 py-10 px-10 md:py-20 xl:px-20">
            {FaqContent.map((elParent, mainIndex) => (
              <div
                className="flex h-full w-full flex-col items-center justify-start gap-5"
                key={mainIndex}
              >
                <p className="bg-ecoRed px-6 py-2 text-5xl font-bold uppercase text-skinCream">
                  {elParent.title}
                </p>
                {elParent.faqs.map((el, i) => (
                  <FaqCard
                    question={el.question}
                    answer={el.answer}
                    index={i + mainIndex * elParent.faqs.length}
                    setSelected={setSelectedCard}
                    selected={selectedCard}
                    key={i}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-screen bg-skinCream/50 md:min-h-screen md:w-2/5"
        style={{
          backgroundImage: `url(${PaperTextureImg.src})`,
          backgroundSize: "100% 100vh",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="relative px-10 py-10 md:py-20 xl:px-20">
          <p className="mb-10 text-4xl font-bold uppercase text-darkRed lg:leading-tight xl:text-5xl xl:leading-tight">
            Frequently Asked Questions
          </p>
          <div className="relative flex w-full flex-col items-center gap-5 rounded-xl bg-white p-10 pb-14">
            <p className="text-center text-2xl font-bold text-black xl:text-3xl">
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
            <button
              onClick={onSubmit}
              className="absolute bottom-0 translate-y-1/2 rounded-xl  bg-black px-5 py-2 text-2xl font-bold text-skinCream xl:text-3xl"
            >
              SUMBIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
