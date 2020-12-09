import React, { Component } from "react";
import "./FinalTicket.scss";

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

class FinalTicket extends Component {
  constructor() {
    super();
    this.state = {
      ticketCheck: [],
      ticketdata: "",
    };
  }

  dateFormatter = (toFormat) => {
    const date = new Date(toFormat);
    return `${date.getMonth() + 1}월 ${date.getDate()}일 (${WEEK[date.getDay()]})`;
  };

  timeFormatter = (toFormat) => {
    const date = new Date(toFormat);
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  render() {
    const { ticket, headcount, isDep } = this.props;
    return (
      <div className="FinalTicket">
        <div className="topTable">
          <div className="airLine">항공편</div>
          <div className="journey">여정</div>
          <div className="depature">출발</div>
          <div className="arrival">도착</div>
          <div className="class">좌석</div>
        </div>
        <div className="infoCover">
          <div className="planDate">
            <div className="date">{isDep ? "가는날" : "오는날"}</div>
          </div>
          <div className="planeNumber">
            <div className="number">{ticket.airplane["airplane_numbers"]}편</div>
          </div>
          <div className="destiantion">
            <div className="des">
              {ticket.airplane["from_region"].name} - {ticket.airplane["to_region"].name}
            </div>
          </div>
          <div className="depatureDate">
            <div className="depature">
              {this.dateFormatter(ticket.airplane["from_date"])}
              <br></br> {this.timeFormatter(ticket.airplane["from_date"])}
            </div>
          </div>
          <div className="arrivalDate">
            <div className="arrival">
              {this.dateFormatter(ticket.airplane["to_date"])}
              <br></br> {this.timeFormatter(ticket.airplane["to_date"])}
            </div>
          </div>
          <div className="typeOfSeat">
            <div className="seat">
              {ticket["seat_type"].name}
              <br></br>
              {headcount}석
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FinalTicket;
