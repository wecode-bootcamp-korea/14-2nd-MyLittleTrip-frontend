import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import FlyTicket from "./FlyTicket/FlyTicket";
import PaymentSide from "./FlyTicket/FlyTicket";
import PassengerContact from "./PassengerContact/PassengerContact";
import PassengerInfo from "./PassengerInfo/PassengerInfo";
import ReservNote from "./ReservNote/ReservNote";
import CheckPayment from "./CheckPayment/CheckPayment";
import FinalCheck from "./FinalCheck/FinalCheck";
import Navtrans from "../../Components/Navtrans/Navtrans";
import FinalTicket from "./FlyTicket/FinalTicket";
import { RESERVATION_API } from "../../config";

const selected = [
  [
    {
      airplane: {
        airline: {
          image_url: "https://i.ibb.co/NYynBtD/air4.png",
          name: "승윤 항공",
        },
        airplane_numbers: "8343",
        from_date: "2020-12-24T10:37:33",
        from_region: {
          name: "제주",
          region_code: "CJU",
        },
        id: 8855,
        to_date: "2020-12-24T20:47:33",
        to_region: { name: "김포", region_code: "GMP" },
      },
      id: 94,
      price: "1100.00",
      remaining_seat: 10,
      seat_type: { name: "일등석" },
      total_seats: 10,
    },
    ,
  ],
  [
    {
      airplane: {
        airline: {
          image_url: "https://i.ibb.co/cLRpxwR/airSY.png",
          name: "리틀 항공",
        },
        airplane_numbers: "8117",
        from_date: "2020-12-26T12:45:33",
        from_region: {
          name: "김포",
          region_code: "GMP",
        },
        id: 8855,
        to_date: "2020-12-26T22:39:33",
        to_region: { name: "제주", region_code: "CJU" },
      },
      id: 230,
      price: "3800.00",
      remaining_seat: 10,
      seat_type: { name: "일등석" },
      total_seats: 10,
    },
    ,
  ],
];

const headcount = 1;

class Booking extends Component {
  handleSubmit = async () => {
    const { selected, headcount } = this.props.location.state;
    const response = await axios({
      method: "post",
      url: RESERVATION_API,
      data: {
        user: 1,
        head_count: headcount,
        product: [selected[0][0].id, selected[1][0].id],
      },
    });
    console.log(response.data);
  };

  render() {
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
          <CheckPayment />
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
  margin: 20px 0 60px 0;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.blue};
  border-radius: 3px;
`;

export default Booking;
