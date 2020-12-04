import React from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { flexSet } from "../../styles/theme";

// list component에서 3초? 5초?간 무조건 이 화면 보이게 할것!!
// 동적 라우팅으로 list component로 연결될것이기 때문에 그 화면에서
// this.props.match같은것에서 이 component로 필요한 정보 props로 보내줄 것임!!

const LoadingScreen = (props) => {
  const location = useLocation();
  console.log(location); //location에서 한글을 받아올 수는 없나요..? 그냥 state도 담아서 보내야겠네요...ㅠ

  return (
    <LoadingScreenContainer>
      <LoadingBackgroundImg src={BG_IMAGE} />
      <FlightInfo>
        <p className="infoTitle">
          김포부터 제주까지
          <br /> 왕복 항공권을 찾고 있습니다.
        </p>
        <div className="fromToContainer">
          <FromTo>
            <span className="code">GMP</span>
            <span className="name">김포</span>
            <span className="date">2020년 12월 10일</span>
          </FromTo>
          <img src={CONNECT_IMAGE} alt="from to" />
          <FromTo>
            <span>CJU</span>
            <span>제주</span>
            <span>2020년 12월 10일</span>
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
  ${flexSet("", "center", "column")};
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
    ${flexSet("center", "center", "")};
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
  ${flexSet("", "center", "column")};
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
