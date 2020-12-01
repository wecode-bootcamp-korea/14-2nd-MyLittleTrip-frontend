import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import {
  CarouselTitle,
  ContentContainer,
  ArrowImage,
} from "../../../../Components/StyledComponents/MainCustomComponents";
import RecentItem from "./RecentItem";
import { useAxios } from "../../../../Components/Hooks/useAxios";

const sliderSettings = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const RecentSearch = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const sliderRef = useRef(null);

  const { response, setResponse } = useAxios({
    method: "get",
    url: "/data/recentData.json",
  });

  useEffect(() => {
    if (response) setMaxPage(Math.ceil(response.data.length / 3));
  }, [response]);

  const slidePrevious = () => {
    sliderRef.current.slickPrev();
    setCurrentPage(currentPage - 1);
  };

  const slideNext = () => {
    sliderRef.current.slickNext();
    setCurrentPage(currentPage + 1);
  };

  const handleDeleteClick = (e, clicked) => {
    e.stopPropagation();
    const recentsCopy = { ...response };
    const newRecents = recentsCopy.data.reduce((acc, val) => {
      return val !== clicked ? [...acc, val] : [...acc];
    }, []);
    recentsCopy.data = newRecents;
    setResponse(recentsCopy);
  };

  if (response) {
    return (
      <ContentContainer>
        <CarouselTitle>최근 검색한 항공권</CarouselTitle>
        {response.data.length > 2 ? (
          <>
            <Slider {...sliderSettings} ref={sliderRef}>
              {!!response &&
                response.data.map((recentdata) => (
                  <RecentItem key={recentdata.id} recentdata={recentdata} handleDeleteClick={handleDeleteClick} />
                ))}
            </Slider>
            <ArrowImage type="prev" currentPage={currentPage} maxPage={maxPage} onClick={slidePrevious} />
            <ArrowImage type="next" currentPage={currentPage} maxPage={maxPage} onClick={slideNext} />
          </>
        ) : (
          <RecentContainer>
            {response.data.map((recentdata) => (
              <RecentItem key={recentdata.id} recentdata={recentdata} handleDeleteClick={handleDeleteClick} />
            ))}
          </RecentContainer>
        )}
      </ContentContainer>
    );
  }

  return (
    <ContentContainer>
      <CarouselTitle>최근 검색한 항공권</CarouselTitle>
      <h2>에러가 발생하여 데이터를 불러오지 못했습니다! 😱</h2>
    </ContentContainer>
  );
};

const RecentContainer = styled.div`
  display: flex;
`;

export default RecentSearch;
