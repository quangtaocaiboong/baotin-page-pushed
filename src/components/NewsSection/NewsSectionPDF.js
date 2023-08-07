import React, { useEffect, useState } from "react";
import { Container, Section } from "../../globalStyles";
import {
  NewsRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  NewsColumn,
  H5Style,
  ButtonAnchor,
} from "./NewsSectionStyles.js";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
export const NewsSectionPDF = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
  linkTo,
  dateNote,
  fileUrl,
  pdf
}) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });
  // const { imgDec1, imgDec2 } = data;

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);
 
  // console.log(pdf);
  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <NewsRow reverse={reverse}>
          <NewsColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                // transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                // transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>

              <Subtitle
                initial={initial}
                // transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
                style={{ marginBottom: "10px" }}
              >
                {description}
              </Subtitle>
              <H5Style inverse={inverse} style={{ marginBottom: "30px" }}>
                {dateNote}
              </H5Style>
              <ButtonAnchor
                href={pdf}
                inverse={inverse}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttonLabel}
              </ButtonAnchor>
            </TextWrapper>
          </NewsColumn>
          <NewsColumn
            initial={initial}
            // transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </NewsColumn>
        </NewsRow>
        {/* <div
          style={{
            marginTop: "20px",
            marginRight: "5px",
            marginLeft: "5px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <object
            data="http://africau.edu/images/default/sample.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Alternative text - include a link{" "}
              <a href="http://africau.edu/images/default/sample.pdf">
                to the PDF!
              </a>
            </p>
          </object>
        </div> */}
        <div className="" style={{ marginTop: "20px" }}>

        <object
          width="100%"
          height="842"
          data={pdf}
          type="application/pdf"
        >
          {" "}
        </object>
        </div>
      </Container>
    </Section>
  );
};
