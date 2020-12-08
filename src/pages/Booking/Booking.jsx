import React, { Component } from "react";
import FlyTicket from './FlyTicket/FlyTicket';
import PaymentSide from './FlyTicket/FlyTicket';
import PassengerContact from './PassengerContact/PassengerContact';
import PassengerInfo from './PassengerInfo/PassengerInfo';
import ReservNote from './ReservNote/ReservNote';
import CheckPayment from './CheckPayment/CheckPayment';
import FinalCheck from './FinalCheck/FinalCheck';
import Navtrans from '../../Components/Navtrans/Navtrans';


class Booking extends Component {
  render() {
    return (
      <div className='Booking'>
        <Navtrans themeColor="normal" />
      <FlyTicket />
      <PassengerContact />
      <PassengerInfo />
      <ReservNote />
      <CheckPayment />
      <FinalCheck />
      {/* <button>동의합니다<button> */}
    </div>
    );
  }
}

export default Booking;
