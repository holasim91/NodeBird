import React from "react";
import { useState } from "react";
import Slick from "react-slick";
import {
  GlobalStyles,
  Header,
  ImageWrapper,
  Ovelay,
  SlickWrapper,
  CloseButton,
  Indicator,
} from "./styles";

const ImageZoom = ({ image, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Ovelay>
      <GlobalStyles />
      <Header>
        <h1>상세 이미지</h1>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {image.map((v) => (
              <ImageWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImageWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1}
              {"  "}/ {image.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Ovelay>
  );
};

export default ImageZoom;
