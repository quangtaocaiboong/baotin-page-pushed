import React, { useEffect } from "react";
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

export const NewsSectionPDF = ({ item }) => {
  // Destructure properties from the item
  const {
    topLine,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    inverse,
    reverse,
    pdf,
    dateNote,
  } = item;

  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <NewsRow reverse={reverse}>
          <NewsColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
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
        <div className="" style={{ marginTop: "20px" }}>
          <object
            width="100%"
            height="842"
            data={pdf}
            type="application/pdf"
          >
            <p>
              Alternative text - include a link{" "}
              <a href={pdf}>to the PDF!</a>
            </p>
          </object>
        </div>
      </Container>
    </Section>
  );
};
