import React from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// list component에서 3초? 5초?간 무조건 이 화면 보이게 할것!!
// 동적 라우팅으로 list component로 연결될것이기 때문에 그 화면에서
// this.props.match같은것에서 이 component로 필요한 정보 props로 보내줄 것임!!

const LoadingScreen = (props) => {
  const location = useLocation();
  const { searchInfo } = location.state;

  const dateFormatter = (date) => {
    const toFormat = new Date(date);
    return `${toFormat.getFullYear()}년 ${toFormat.getMonth() + 1}월 ${toFormat.getDate()}일`;
  };

  return (
    <LoadingScreenContainer>
      <LoadingBackgroundImg src={BG_IMAGE} />
      <FlightInfo>
        <p className="infoTitle">
          {searchInfo.depPlace}부터 {searchInfo.arrPlace}까지
          <br /> 왕복 항공권을 찾고 있습니다.
        </p>
        <div className="fromToContainer">
          <FromTo>
            <span className="name">{searchInfo.depPlace}</span>
            <span className="date">{dateFormatter(searchInfo.startDate)}</span>
          </FromTo>
          <img src={CONNECT_IMAGE} alt="from to" />
          <FromTo>
            <span>{searchInfo.arrPlace}</span>
            <span>{dateFormatter(searchInfo.endDate)}</span>
          </FromTo>
        </div>
        <p>
          마이리틀트립에서 항공권 예약하고
          <br />
          <span className="importantText">3,000,000원</span> 받아가세요
        </p>
      </FlightInfo>
    </LoadingScreenContainer>
  );
};

const BG_IMAGE = "https://i.ibb.co/6bd6KWY/30.jpg";

const CONNECT_IMAGE = "https://i.ibb.co/7jSB4Zf/connect.png";

const translate = keyframes`
  from {
    transform: translate(0,0);
  }
  to {
    transform: translate(-5%,-2%);
  }
`;

const LoadingScreenContainer = styled.main`
  height: 100vh;
  overflow: hidden;
`;

const LoadingBackgroundImg = styled.img.attrs((props) => ({
  alt: "loading background",
  src: props.src || "https://source.unsplash.com/random",
}))`
  width: 110%;
  height: 110%;
  object-fit: cover;
  animation: ${translate} 2.7s ease-in-out infinite;
  animation-direction: alternate;
`;

const FlightInfo = styled.div`
  ${({ theme }) => {
    return theme.flexSet({ alignItems: "center", flexDirection: "column" });
  }};
  position: fixed;
  left: 0;
  right: 0;
  top: 100px;
  margin: 100px auto;
  width: 400px;

  p {
    color: ${({ theme }) => theme.littletransparentWhite};
    text-align: center;
    font-size: 14px;

    .importantText {
      font-size: 20px;
      line-height: 26px;
      font-weight: 500;
    }
  }

  .infoTitle {
    padding-top: 50px;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

  .fromToContainer {
    ${({ theme }) => {
      return theme.flexSet({ justifyContent: "center", alignItems: "center" });
    }}
    width: 300px;
    padding: 10px 0;
    margin: 30px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    img {
      width: 40px;
    }
  }
`;

const FromTo = styled.div`
  ${({ theme }) => {
    return theme.flexSet({ alignItems: "center", flexDirection: "column" });
  }}
  padding: 5px 0;
  span {
    color: ${({ theme }) => theme.littletransparentWhite};
    font-size: 0.8rem;
    line-height: 18px;

    &:first-child {
      font-size: 24px;
      line-height: 24px;
      font-weight: bold;
    }
  }
`;

export default LoadingScreen;
