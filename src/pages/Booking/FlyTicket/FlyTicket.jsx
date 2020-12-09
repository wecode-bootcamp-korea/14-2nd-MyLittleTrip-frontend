import React, { Component } from "react";
import { BsArrowRight } from "react-icons/bs";
import FinalTicket from "./FinalTicket";
import "./FlyTicket.scss";

class FlyTicket extends Component {
  constructor() {
    super();
    this.state = {
      ticketCheck: [],
      ticketdata: "",
    };
  }

  dateFotmatter = (toFormat) => {
    const date = new Date(toFormat);
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  render() {
    const { ticket, headcount } = this.props;
    return (
      <div className="FlyTicket">
        <div className="container">
          <div className="destination">
            <div className="depature">
              <div className="Kor">{ticket.airplane["from_region"].name}</div>
              <div className="Eng">{ticket.airplane["from_region"]["region_code"]}</div>
            </div>
            <div className="direction">
              <div className="arrow">
                <BsArrowRight size="20px" />
              </div>
              <div className="date">{this.dateFotmatter(ticket.airplane["from_date"])}</div>
            </div>
            <div className="arrival">
              <div className="Kor">{ticket.airplane["to_region"].name}</div>
              <div className="Eng">{ticket.airplane["to_region"]["region_code"]}</div>
            </div>
            <div className="airLineContainer">
              <img className="airLine" alt="항공사" src={ticket.airplane.airline["image_url"]} />
              <div className="name">{ticket.airplane.airline.name}</div>
            </div>
            <div className="flyTypeContainer">
              <div className="title">운항종류</div>
              <div className="type">왕복</div>
            </div>
            <div className="classTypeContainer">
              <div className="title">좌석등급</div>
              <div className="type">{ticket["seat_type"].name}</div>
            </div>
            <div className="passengerContainer">
              <div className="passenger">승객</div>
              <div className="quantity">{headcount}명</div>
            </div>
          </div>
        </div>
        {/* <FinalTicket /> */}
      </div>
    );
  }
}

export default FlyTicket;
