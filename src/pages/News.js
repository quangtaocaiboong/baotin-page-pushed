import React from 'react'
import { NewsSection } from '../components/NewsSection/NewsSection'
import {  newsTwo, } from '../data/NewsData';

const News = () => {
  const {linkTo} = newsTwo
  return (
    <>
      <NewsSection {...newsTwo} data={newsTwo} linkTo={linkTo}/>
    </>
  )
}

export default News