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
export const NewsSection = ({
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
  data,
  linkTo,
  dateNote,
  alterImg1,
  alterImg2,
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
                href={linkTo}
               
                inverse={inverse}
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
        <div
          style={{
            marginTop: "20px",
            marginRight: "5px",
            marginLeft: "5px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Img src={alterImg1} alt="" />
          <Img src={alterImg2} alt="" />
        </div>
      </Container>
    </Section>
  );
};
