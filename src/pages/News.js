import React, { useEffect } from "react";
import { NewsSection } from "../components/NewsSection/NewsSection";
import { newsItems } from "../data/NewsData";
import { NewsSectionPDF } from "../components/NewsSection/NewsSectionPDF";

const News = () => {
  useEffect(() => {
    document.title = "THÔNG TIN ĐẤU GIÁ | BPAC";
  }, []);
  return (
    <>
      {newsItems.map((index, key) => (
        <NewsSectionPDF key={key} item={index} />
      ))}
      {/* <NewsSection
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
      /> */}
    </>
  );
};

export default News;
