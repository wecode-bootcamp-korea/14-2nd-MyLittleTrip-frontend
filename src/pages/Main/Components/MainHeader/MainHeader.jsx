import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Navtrans from "../../../../Components/Navtrans/Navtrans";
import TicketSelector from "../../../../Components/TicketSelector/TicketSelector";
import { theme, flexSet } from "../../../../styles/theme";

const MainHeader = (props) => {
  const [isCheckedLeft, setIsCheckedLeft] = useState(false);
  const [isCheckedRight, setIsCheckedRight] = useState(false);
  return (
    <MainHeaderContainer>
      <Navtrans themeColor="" />
      <div className="imageContainer">
        <img className="bannerImage" src="https://i.ibb.co/DbLkYd1/darkened.jpg" alt="banner" />
      </div>
      <TicketOptionTop>
        <Option direction="left">
          <span>왕복</span>
          <span>편도</span>
          <span>다구간</span>
        </Option>
        <Option direction="right">
          <div className="reservation">
            <span>항공권 예약내역</span>
            <IoIosArrowDroprightCircle className="arrowIcon" color="white" />
          </div>
          <div className="reservation">
            <span>비회원 예약내역</span>
            <IoIosArrowDroprightCircle className="arrowIcon" color="white" />
          </div>
        </Option>
      </TicketOptionTop>
      <TicketSelector top="50px" />
      <TicketOptionBottom>
        <div className="checkBoxContainer">
          {isCheckedLeft ? (
            <ImCheckboxChecked color={theme.transparentWhite} onClick={() => setIsCheckedLeft(!isCheckedLeft)} />
          ) : (
            <ImCheckboxUnchecked color={theme.transparentWhite} onClick={() => setIsCheckedLeft(!isCheckedLeft)} />
          )}
          <span>직항만</span>
          {isCheckedRight ? (
            <ImCheckboxChecked color={theme.transparentWhite} onClick={() => setIsCheckedRight(!isCheckedRight)} />
          ) : (
            <ImCheckboxUnchecked color={theme.transparentWhite} onClick={() => setIsCheckedRight(!isCheckedRight)} />
          )}
          <span>무료 수하물 가능</span>
          <span className="otherText">출발/도착 다른 구간</span>
          <AiOutlineQuestionCircle color="white" size="1.1em" />
        </div>
      </TicketOptionBottom>
    </MainHeaderContainer>
  );
};

const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 348px;

  .imageContainer {
    position: absolute;
    top: 0;
    height: 348px;
    z-index: -1;
    overflow: hidden;
    .bannerImage {
      width: 100%;
    }
  }
`;

const TicketOptionTop = styled.section`
  ${({ theme }) => {
    return theme.flexSet({ justifyContent: "space-between", alignItems: "center" });
  }}
  position: relative;
  width: 1060px;
  padding: 25px 0;
  margin: 20px 0 17px 0;
`;

const Option = styled.div`
  ${flexSet("", "center")};
  ${({ theme }) => {
    return theme.flexSet({ alignItems: "center" });
  }}
  position: absolute;
  top: 20px;
  ${({ direction }) => (direction === "left" ? "left : 0" : "right: 0")};
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  cursor: pointer;

  span {
    padding: 0 10px 10px 10px;
  }

  ${({ direction }) =>
    direction === "left"
      ? `
        span:first-child{
          margin-top: 3px;
          font-weight: bold;
          color : rgba(255, 255, 255, 0.8);
          border-bottom : 3px solid ${theme.transparentWhite};
        }
        
        span:hover{
          color: ${theme.transparentWhite};
        }
      `
      : `.arrowIcon{
        padding-top : 3px;
        margin-bottom: -1px;
      }`}
`;

const TicketOptionBottom = styled.div`
  display: flex;
  align-items: center;
  width: 1060px;
  padding: 10px 0;
  color: ${({ theme }) => theme.transparentWhite};

  svg {
    padding-top: 4px;
    margin: 0 2px -2px 0;
    font-size: 1rem;
    cursor: pointer;
  }

  span {
    font-size: 0.8rem;
    margin-right: 5px;

    &.otherText::before {
      content: "ㅣ";
      padding-top: 1px;
      margin: 0 15px 0 10px;
      font-weight: 300;
    }
  }
`;

export default MainHeader;
