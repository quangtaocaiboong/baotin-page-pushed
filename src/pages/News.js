import React, { useEffect } from "react";
import { NewsSection } from "../components/NewsSection/NewsSection";
import {
  newsFour,
  newsOne,
  newsPDFOne,
  newsPDFTwo,
  newsTwo,
  pdfArray,
} from "../data/NewsData";
import { NewsSectionPDF } from "../components/NewsSection/NewsSectionPDF";

const News = () => {
  const { linkTo, imgDec1, imgDec2 } = newsTwo;
  const { linkToOne, imgDecOne1, imgDecOne2 } = newsOne;
  useEffect(() => {
    document.title = "THÔNG TIN ĐẤU GIÁ | BPAC";
  }, []);
  return (
    <>
      {pdfArray.map((index, key) =>
        key % 2 === 0 ? (
          <NewsSectionPDF
            key={key}
            {...newsPDFOne}
            data={newsPDFOne}
            pdf={index}
          />
        ) : (
          <NewsSectionPDF
            key={key}
            {...newsPDFTwo}
            data={newsPDFTwo}
            pdf={index}
          />
        )
      )}
      <NewsSection
        {...newsOne}
        data={newsTwo}
        linkTo={linkToOne}
        alterImg1={imgDecOne1}
        alterImg2={imgDecOne2}
      />
      <NewsSection
        {...newsTwo}
        data={newsTwo}
        linkTo={linkTo}
        alterImg1={imgDec1}
        alterImg2={imgDec2}
      />
    </>
  );
};

export default News;
