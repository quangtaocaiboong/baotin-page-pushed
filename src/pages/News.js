import React, {useEffect} from 'react'
import { NewsSection } from '../components/NewsSection/NewsSection'
import {  newsTwo } from '../data/NewsData';

const News = () => {
  const {linkTo} = newsTwo;
  useEffect(() => {
    document.title = "THÔNG TIN ĐẤU GIÁ | BPAC"
 }, []);
  return (
    <>
      <NewsSection {...newsTwo} data={newsTwo} linkTo={linkTo}/>
    </>
  )
}

export default News