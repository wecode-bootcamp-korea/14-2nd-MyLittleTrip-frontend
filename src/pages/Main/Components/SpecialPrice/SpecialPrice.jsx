import React, { useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import {
  CarouselTitle,
  ContentContainer,
  BorderBox,
  ArrowImage,
} from "../../../../Components/StyledComponents/MainCustomComponents";
import { theme } from "../../../../styles/theme";

const sliderSettings = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const SpecialPrice = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const sliderRef = useRef(null);

  const slidePrevious = () => {
    sliderRef.current.slickPrev();
    setCurrentPage(currentPage - 1);
  };

  const slideNext = () => {
    sliderRef.current.slickNext();
    setCurrentPage(currentPage + 1);
  };

  const handleCardClick = (clicked) => {
    props.history.push(
      `/list?from=${clicked.departAirport}&to=${clicked.arriveAirport}&fromDate=${clicked.departDate}&toDate=${clicked.arriveDate}&count=1&type=일반석`
    );
  };

  return (
    <ContentContainer marginVertical="40px">
      <CarouselTitle size="22px" bold="bold">
        {props.title}
      </CarouselTitle>
      <Slider {...sliderSettings} ref={sliderRef}>
        {props.cardData.map((card) => (
          <SpecialCard key={card.id} onClick={() => handleCardClick(card)}>
            <BorderBox width="250px" height="260px" borderRadius="4px">
              <div className="imageContainer">
                <img src={card.imageUrl} alt="special price card" />
              </div>
              <div className="cardInfo">
                <span className="nation">{card.arriveAirport}</span>
                <span className="trip">
                  {card.departAirport} - {card.arriveAirport}
                </span>
                <span className="trip">
                  {`${+card.departDate.split("-")[1]}월 ${+card.departDate.split("-")[2]}일 - ${+card.arriveDate.split(
                    "-"
                  )[1]}월 ${+card.arriveDate.split("-")[2]}일`}
                </span>
                <div className="cardBottom">
                  <span className="price">{Number(card.price).toLocaleString(2)}원 ~</span>
                  <span className="boardType">왕복</span>
                </div>
              </div>
            </BorderBox>
          </SpecialCard>
        ))}
      </Slider>
      <ArrowImage type="prev" currentPage={currentPage} maxPage={2} top="160px" onClick={slidePrevious} />
      <ArrowImage type="next" currentPage={currentPage} maxPage={2} top="160px" onClick={slideNext} />
    </ContentContainer>
  );
};

const SpecialCard = styled.div`
  .imageContainer {
    height: 140px;
    overflow: hidden;

    img {
      width: 250px;
      object-fit: cover;
    }
  }

  .cardInfo {
    display: flex;
    flex-direction: column;
    padding: 17px 15px;

    .nation {
      margin-bottom: 10px;
      color: ${theme.lightBlack};
      font-weight: bold;
    }

    .trip {
      margin-bottom: 5px;
      color: ${theme.darkGray};
      font-size: 0.8rem;
    }

    .cardBottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;

      .price {
        color: ${theme.lightBlack};
        font-size: 0.9rem;
        font-weight: bold;
      }

      .boardType {
        color: ${theme.navy};
        font-size: 0.8rem;
      }
    }
  }
`;

export default withRouter(SpecialPrice);
