import React, { useEffect } from 'react';
import { Container, Section } from '../../globalStyles';
import {
  NewsRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  NewsColumn,
} from './NewsSectionStyles.js';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import "./NewsSection.scss"
export const NewsSection = ({
  primary,
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
}) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });
  const { imgDec1, imgDec2 } = data;

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
                style={{marginBottom:"10px"}}
              >
                {description}
              </Subtitle>
              <h5 style={{ marginBottom:"30px", color: "white" }}>{dateNote}</h5>
              <a href={linkTo}
                className="linkTST"
                target="_blank"
                rel='noopener noreferrer'
              >
                {buttonLabel}
              </a>
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
        <div style={{ marginTop: "20px", marginRight: "auto", marginLeft: "auto", display:"flex", justifyContent: "center" }}>
          <Img src={imgDec1} alt="" />
          <Img src={imgDec2} alt="" />
        </div>
      </Container>

    </Section>
  );
};
