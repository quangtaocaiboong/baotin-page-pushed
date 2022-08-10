import React, { useEffect } from 'react'
import { NewsSection } from '../components/NewsSection/NewsSection'
import { newsOne, newsTwo } from '../data/NewsData';

const News = () => {
  const { linkTo, imgDec1, imgDec2 } = newsTwo;
  const { linkToOne, imgDecOne1, imgDecOne2 } = newsOne;
  useEffect(() => {
    document.title = "THÔNG TIN ĐẤU GIÁ | BPAC"
  }, []);
  return (
    <>
      <NewsSection {...newsTwo}
        data={newsTwo}
        linkTo={linkTo}
        alterImg1={imgDec1}
        alterImg2={imgDec2}
      />
      <NewsSection
        {...newsOne}
        data={newsTwo}
        linkTo={linkToOne}
        alterImg1={imgDecOne1}
        alterImg2={imgDecOne2}
      />
    </>
  )
}

export default News