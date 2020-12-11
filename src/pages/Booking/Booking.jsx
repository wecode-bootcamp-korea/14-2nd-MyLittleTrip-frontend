import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import FlyTicket from "./FlyTicket/FlyTicket";
import PaymentSide from "./FlyTicket/FlyTicket";
import PassengerContact from "./PassengerContact/PassengerContact";
import PassengerInfo from "./PassengerInfo/PassengerInfo";
import ReservNote from "./ReservNote/ReservNote";

import FinalCheck from "./FinalCheck/FinalCheck";
import Navtrans from "../../Components/Navtrans/Navtrans";
import FinalTicket from "./FlyTicket/FinalTicket";
import { RESERVATION_API } from "../../config";

class Booking extends Component {
  handleSubmit = async () => {
    const selected = this.props.location.state.selected;
    const headcount = this.props.location.state["head_count"];

    const response = await axios({
      method: "post",
      url: RESERVATION_API,
      data: {
        user: 1,
        head_count: headcount,
        product: [selected[0][0].id, selected[1][0].id],
      },
    });

    this.props.history.push("/reservation");
  };

  render() {
    const selected = this.props.location.state.selected;
    const headcount = this.props.location.state["head_count"];
    return (
      <div className="Booking">
        <Navtrans themeColor="normal" />
        <BookingContainer>
          <FlyTicket ticket={selected[0][0]} headcount={headcount} />
          <FlyTicket ticket={selected[1][0]} headcount={headcount} />
          <FinalTicket isDep ticket={selected[0][0]} headcount={headcount} />
          <FinalTicket ticket={selected[1][0]} headcount={headcount} />
          <PassengerContact />
          <PassengerInfo />
          <ReservNote />
          <FinalCheck />
          <Button onClick={this.handleSubmit}>예약하기</Button>
        </BookingContainer>
      </div>
    );
  }
}
const BookingContainer = styled.main`
  width: 800px;
  margin: 100px auto;
`;
const Button = styled.button`
  width: 728px;
  height: 50px;
  margin: 20px 0 60px 0;
  background-color: ${(props) => props.theme.blue};
  font-size: 20px;
  color: white;
  border-radius: 3px;
`;

export default Booking;
