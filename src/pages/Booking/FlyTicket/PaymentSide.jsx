import React, { Component } from "react";

class PaymentSide extends Component {

  render() {
    return (
    <div className='PaymentSide'>
      <div className='container'>
        <div classname='title'>요금정보</div>
        <div className='passengerInfo'>성인 1명</div>
        <div className='billInfo'>
          <div className='flypayment'>100원</div>
        </div>
        <div className='adultPaymentConatainer'>
          <div className='adultPayment'>성인 총 요금</div>
          <div classname='total'>100원</div>
        </div>
        <div className='finalCheck'>
          <div className='final'>총 요금</div>
          <div className='total'>100원</div>
        </div>
      </div>
    </div>
    )
  }
}

export default PaymentSide;