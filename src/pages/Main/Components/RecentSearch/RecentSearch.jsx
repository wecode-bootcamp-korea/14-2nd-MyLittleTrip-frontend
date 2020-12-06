import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import {
  CarouselTitle,
  ContentContainer,
  ArrowImage,
} from "../../../../Components/StyledComponents/MainCustomComponents";
import RecentItem from "./RecentItem";

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
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("recent")) {
      setRecents(JSON.parse(localStorage.getItem("recent")));
    }
  }, []);

  useEffect(() => {
    if (recents) setMaxPage(Math.ceil(recents.length / 3));
  }, [recents]);

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
    const recentsCopy = [...recents];
    const newRecents = recentsCopy.reduce((acc, val) => {
      return val !== clicked ? [...acc, val] : [...acc];
    }, []);
    if (newRecents.length === 3) setCurrentPage(1);
    setRecents(newRecents);
    localStorage.setItem("recent", JSON.stringify(newRecents));
  };

  if (!!recents.length) {
    return (
      <ContentContainer>
        <CarouselTitle>최근 검색한 항공권</CarouselTitle>
        {recents.length > 2 ? (
          <>
            <Slider {...sliderSettings} ref={sliderRef}>
              {recents.map((recentdata) => (
                <RecentItem key={recentdata.id} recentdata={recentdata} handleDeleteClick={handleDeleteClick} />
              ))}
            </Slider>
            <ArrowImage type="prev" currentPage={currentPage} maxPage={maxPage} onClick={slidePrevious} />
            <ArrowImage type="next" currentPage={currentPage} maxPage={maxPage} onClick={slideNext} />
          </>
        ) : (
          <RecentContainer>
            {recents.map((recentdata) => (
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
    </ContentContainer>
  );
};

const RecentContainer = styled.div`
  display: flex;
`;

export default RecentSearch;
