import React, { useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { ContentContainer, ArrowConatiner } from "../../../../Components/StyledComponents/MainCustomComponents";
import { EVENT_BANNER_ITEMS } from "../../maindata";
import { theme, flexCenter } from "../../../../styles/theme";

const EventBanner = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(new Array(Math.ceil(EVENT_BANNER_ITEMS.length / 2)).fill(0));
  const sliderRef = useRef(null);

  const sliderSettings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    beforeChange: (current, next) => setCurrentPage(Math.ceil(next / 2) + 1),
  };

  const slidePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const slideNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <ContentContainer marginVertical="50px">
      <Slider {...sliderSettings} ref={sliderRef}>
        {EVENT_BANNER_ITEMS.map((item) => (
          <EventBannerItem key={item.id}>
            <div className="imageContainer">
              <img src={item.imageUrl} alt="event banner" />
            </div>
          </EventBannerItem>
        ))}
      </Slider>
      <ArrowConatiner top="58px">
        <img className="prevButton" src="/images/prevarrow.png" alt="previous button" onClick={slidePrevious} />
        <img className="nextButton" src="/images/nextarrow.png" alt="next button" onClick={slideNext} />
      </ArrowConatiner>
      <DotsContainer>
        {maxPage.map((val, idx) => (
          <span key={idx + 1} className={idx + 1 === currentPage ? "currentDot" : ""} />
        ))}
      </DotsContainer>
    </ContentContainer>
  );
};

const EventBannerItem = styled.div`
  cursor: pointer;

  .imageContainer {
    width: 520px;
    height: 128px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 3px;

    img {
      width: 100%;
    }
  }
`;

const DotsContainer = styled.div`
  ${flexCenter};
  position: absolute;
  left: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
  padding: 10px 16px;
  margin: -15px auto 0 auto;
  background-color: white;
  border-radius: 30px;

  span {
    width: 8px;
    height: 8px;
    margin: 0 2px;
    background-color: ${theme.darkGray};
    border-radius: 50%;

    &.currentDot {
      background-color: ${theme.blue};
    }
  }
`;

export default EventBanner;
