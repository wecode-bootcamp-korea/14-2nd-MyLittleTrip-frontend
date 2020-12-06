import React, { useRef } from "react";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useClickOutside } from "../../Hooks/clickOutside";
import { theme } from "../../../styles/theme";
import { SEAT_OPTIONS } from "./seatoptionData";

const SeatOption = ({ seatType, headCount, handleRadioChange, handleHeadCount, closeSeatOption }) => {
  const seatOptionRef = useRef(null);

  const handleChange = (option) => {
    handleRadioChange(option);
  };

  const closeSeat = () => {
    closeSeatOption();
  };

  useClickOutside(seatOptionRef, closeSeatOption);

  return (
    <SeatOptionContainer ref={seatOptionRef}>
      <header>
        <span>인원 & 좌석등급</span>
        <button onClick={closeSeat}>
          <VscChromeClose size="20px" color={"rgba(0,0,0,0.5)"} />
        </button>
      </header>
      <PeopleSelector>
        <div className="peopleType">
          <p>성인</p>
          <span>만 12세 이상</span>
        </div>
        <div className="peopleCounter">
          <button className="minusButton" name="minus" onClick={() => handleHeadCount("minus")}>
            <AiOutlineMinus size="16px" color={theme.gray} className="minus" />
          </button>
          <span className="counter">{headCount}</span>
          <button className="plusButton" name="plus" onClick={() => handleHeadCount("plus")}>
            <AiOutlinePlus size="16px" color={theme.blue} className="plus" />
          </button>
        </div>
      </PeopleSelector>
      <RadioButtonContainer>
        {SEAT_OPTIONS.map((option) => (
          <div className="radioButton" key={option.id}>
            <label>
              <input type="radio" checked={option.name === seatType} onChange={() => handleChange(option)} />
              {option.name}
            </label>
          </div>
        ))}
      </RadioButtonContainer>
    </SeatOptionContainer>
  );
};

const SeatOptionContainer = styled.section`
  position: absolute;
  top: 50px;
  right: 0;
  width: 348px;
  padding: 15px;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
  color: ${theme.lightBlack};
  z-index: 100;

  header {
    ${({ theme }) => {
      return theme.flexSet({ justifyContent: "space-between", alignItems: "center" });
    }}

    span {
      font-size: 0.9rem;
    }

    button {
      ${({ theme }) => {
        return theme.flexSet({ justifyContent: "center", alignItems: "center" });
      }}
      width: 30px;
      height: 30px;
      background-color: white;
      padding: 0;
      border-radius: 3px;

      &:hover {
        background-color: ${theme.lightGray};
      }

      svg {
        margin-top: -2px;
      }
    }
  }
`;

const PeopleSelector = styled.div`
  ${({ theme }) => {
    return theme.flexSet({ justifyContent: "space-between", alignItems: "center" });
  }}
  padding: 20px 0;
  border-bottom: 1px solid ${theme.lightGray};

  .peopleType {
    span {
      color: ${theme.gray};
      font-size: 13px;
    }
  }

  .peopleCounter {
    button {
      width: 34px;
      height: 34px;
      padding: 8px;
      background-color: white;
      border-radius: 50%;

      &.minusButton {
        border: 1px solid ${theme.gray};
      }

      &.plusButton {
        border: 1px solid ${theme.blue};
      }
    }
  }

  .counter {
    display: inline-block;
    width: 30px;
    font-size: 18px;
    text-align: center;
  }
`;

const RadioButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  .radioButton {
    ${({ theme }) => {
      return theme.flexSet({ alignItems: "center" });
    }}
    width: 156px;
    margin: 5px 0;
    font-size: 14px;

    input {
      margin: 5px 15px 5px 0;
    }
  }
`;

export default SeatOption;
