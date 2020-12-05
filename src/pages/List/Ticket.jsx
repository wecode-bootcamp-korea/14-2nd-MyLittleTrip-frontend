import React, { Component } from "react";
import styled from "styled-components";

import { FaLongArrowAltRight } from "react-icons/fa";
import { theme, flexCenter } from "../../styles/theme";

class Ticket extends Component {
  getDiffHourMinute = (fromdate, todate) => {
    const to = new Date(todate);
    const from = new Date(fromdate);
    const diff = (to.getTime() - from.getTime()) / (1000 * 60 * 60);

    const MINUTE = 1 / 60;
    const hour = Math.floor(diff);
    const min = Math.floor(String((diff - hour) / MINUTE));

    return `${hour}시간 ${min}분`;
  };
  render() {
    const {
      airlineIcon,
      airlineName,
      airlineEnName,
      departTime,
      landingTime,
      seatType,
      price,
      fromCode,
      toCode,
      countSeat,
    } = this.props;

    const DepartTime = this.props.departTime;
    const Dtime = DepartTime.split("T");
    const splitDtime = Dtime[1].split(":");
    splitDtime.splice(2);

    const LandingTime = this.props.landingTime;
    const Ltime = LandingTime.split("T");
    const splitLtime = Ltime[1].split(":");
    splitLtime.splice(2);

    const depTime = `${splitDtime[0]}:${splitDtime[1]}`;
    const arrTime = `${splitLtime[0]}:${splitLtime[1]}`;

    return (
      <TicketComponent>
        <span className="iconAirline">
          <span className="airlineIcon">
            <img src={airlineIcon} alt="hi" />
          </span>
        </span>
        <span className="airlineName">
          <em>{airlineName}</em>
          <em className="emNum">{airlineEnName}</em>
        </span>

        <TakeoffTime>
          <span className="depart">
            {depTime}
            <em>{fromCode}</em>
          </span>
          <span className="arrow">
            <FaLongArrowAltRight />
            <em>{this.getDiffHourMinute(departTime, landingTime)}</em>
          </span>
          <span className="landing">
            {arrTime}
            <em>{toCode}</em>
          </span>
        </TakeoffTime>

        <span className="ticketType">{seatType}</span>
        <span className="countSeat">{countSeat}석</span>
        <strong className="price">{Number(price).toLocaleString(2)}원</strong>
        <button className="pickButton">선택</button>
      </TicketComponent>
    );
  }
}

const TicketComponent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 784px;
  height: 80px;
  margin-top: 8px;
  padding: 20px 24px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  .iconAirline {
    width: 32px;
    height: 40px;
    margin-right: 12px;

    .airlineIcon {
      width: 32px;
      height: 32px;
      margin: 4px 0;

      img {
        width: 32px;
        height: 32px;
      }
    }
  }

  .airlineName {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 94px;
    height: 40px;
    margin-right: 16px;

    em {
      font-size: 13px;
      margin-top: 1px;
      color: rgba(0, 0, 0, 0.7);
    }

    .emNum {
      margin-top: 6px;
    }
  }

  .ticketType {
    display: flex;
    justify-content: center;
    width: 87px;
    margin-right: 16px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.7);
  }

  .countSeat {
    width: 40px;
    margin-right: 20px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.8);
  }

  .price {
    width: 110px;
    display: flex;
    justify-content: flex-end;
    margin-right: 16px;
    font-size: 20px;
    font-weight: 700;
  }

  .pickButton {
    width: 64px;
    height: 40px;
    background-color: #53abf2;
    border-radius: 3px;
    color: white;
    font-size: 14px;
  }
`;

const TakeoffTime = styled.span`
  display: flex;
  font-weight: 600;
  font-size: 17px;

  em {
    font-size: 14px;
    margin-top: 7px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
  }

  .depart {
    ${flexCenter};
    flex-direction: column;
  }
  .arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 76px;
    color: rgba(0, 0, 0, 0.4);
  }
  .landing {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export default Ticket;
