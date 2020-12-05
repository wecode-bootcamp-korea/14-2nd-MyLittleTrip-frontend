import React, { Component } from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

class Selected extends Component {
  formatDate = (toFormat) => {
    const date = new Date(toFormat);
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };
  formatTime = (timeFormat) => {
    const date = new Date(timeFormat);
    return `${date.getHours() + 1} : ${date.getMinutes()}`;
  };
  render() {
    const { el } = this.props;

    return (
      <SelectedOne>
        <li>
          <div className="b">
            <strong>{el[0].airplane.from_region.name}</strong>
            <FaLongArrowAltRight className="icon" />
            <strong>{el[0].airplane.to_region.name}</strong>
          </div>
          <div className="date">
            {this.formatDate(el[0].airplane["from_date"])}
          </div>

          <div className="d">
            <img src={el[0].airplane.airline.image_url} alt="icon" />
            <div>
              <div>{el[0].airplane.airline.name}</div>
              <div>{el[0].airplane.airplane_numbers}</div>
            </div>
          </div>
          <div className="e">
            <div>{this.formatTime(el[0].airplane["from_date"])}</div>
            <FaLongArrowAltRight />
            <div>{this.formatTime(el[0].airplane["to_date"])}</div>
          </div>
          <div className="seatType">{el[0].seat_type.name}</div>
          <div>{Number(el[0].price)}원</div>
        </li>
      </SelectedOne>
    );
  }
}

const SelectedOne = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1064px;
  margin: 10px auto;
  padding: 20px 24px;
  font-size: 14px;
  background-color: #f5f6f7;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1064px;
    height: 70px;
    padding: 0 25px;
    border-radius: 3px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    background-color: white;

    .a {
      display: flex;
      align-items: center;

      color: white;
      background-color: #1583db;
      border-radius: 2px;
    }
    .b {
      margin: 0 16px;
      font-size: 16px;

      .icon {
        margin: 1px 12px 0 12px;
      }
    }

    .c {
      margin-right: 5px;
    }

    .date {
      width: 97px;
      margin-right: 15px;
      font-size: 16px;
    }

    .d {
      display: flex;
      align-items: center;
      margin-right: 37px;

      img {
        margin-right: 6px;
      }
    }

    .e {
      display: flex;
      font-size: 16px;
      div {
        margin: 0 5px;
      }
    }
    .seatType {
      display: flex;
      justify-content: center;
      width: 100px;
    }
  }
`;

export default Selected;
