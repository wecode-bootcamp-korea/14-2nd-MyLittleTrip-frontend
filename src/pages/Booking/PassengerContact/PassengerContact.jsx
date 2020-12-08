import React, { Component } from "react";
import './PassengerContact.scss';

class PassengerContact extends Component {

  render() {
    return (
    <div className='PassengerContact'>
      <h>예약자 정보</h>
      <div className='Container'>
        <div className='NameContainer'>
          <div className='Name'>예약자 이름</div>
          <input type='text' placeholder='홍길동' />
        </div>
        <div className='emailContainer'>
          <div className='email'>이메일 주소</div>
          <input className='emailInput' type='text'/>
          @
          <input className='addressInput' type='text' tittle='이메일주소입력' />
          <select tittle='이메일주소입력'>
            <option value selected>직접입력</option>
            <option value='hanmail.net'>hanmail.net</option>
            <option value='naver.com'>naver.com</option>
            <option value='nate.com'>nate.com</option>
            <option value='gmail.com'>gmail.com</option>
          </select>
        </div>
        <div className='PhoneContainer'>
          <div className='Phone'>휴대전화 번호</div>
          <select tittle='휴대폰번호선택'>
            <option value>_선택_</option>
            <option value='010'>010</option>
            <option value='011'>011</option>
            <option value='017'>017</option>
            <option value='018'>018</option>
            <option value='000'>기타</option>
          </select>
          <input className='phoneMiddleInput' type='text' />
          <input className='phoneLastInput' type='text' />
        </div>
      </div>
    </div>
    )
  }
}

export default PassengerContact;
