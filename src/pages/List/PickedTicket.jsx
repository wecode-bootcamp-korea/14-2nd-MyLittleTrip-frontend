import React, { Component } from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

class PickedTicket extends Component {
  render() {
    return (
      <PickTicket>
        <div className="fromTo">가는편</div>
        <div className="whereToWhere">
          부산 <FaLongArrowAltRight className="arrow" /> 서울
        </div>
        <div className="date">date</div>
      </PickTicket>
    );
  }
}

const PickTicket = styled.div`
  display: flex;
  align-items: center;
  width: 785px;
  height: 56px;
  padding: 16px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  .fromTo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 24px;
    padding: 0 2px;
    border: 1px solid #2d97ed;
    border-radius: 2px;
    color: #53abf2;
    font-size: 13px;
    font-weight: 600;
  }
  .whereToWhere {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 91px;
    height: 24px;
    margin: 0 16px 0 10px;
    .arrow {
      margin: 0 5px 4px 5px;
    }
  }
`;

export default PickedTicket;
