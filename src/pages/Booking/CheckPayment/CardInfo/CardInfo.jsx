import React, { Component } from "react";
// import styled from "styled-components";
import './CardInfo.scss';
// import {theme, flexCenter} from '../../../../styles/theme';

class CardInfo extends Component {

  render() {
    return (
    <div className='CardInfo'>
      <h4>결제 정보</h4>
      <div className='cardInfoContainer'>
        <div className='cardInfo'>
          <div className='total'>
              <div className='totalKR'>결제금액</div>
              <div className='totalNumber'>100원</div>
          </div>
          <div className='owner'>
            <div className='ownerKR'>카드 소유주명</div>
            <div className='inputConatainer'>
              <input type='text' />
            </div>
          </div>
          <div className='number'>
            <div className='numberKR'>카드번호</div>
            <div className='numberInfo'>
              <select title='은행정보'>
                <option value='none' selected>_선택_</option>
                  <option value='BC'>유희왕카드</option>
                  <option value='KB'>엄마카드</option>
                  <option value='NH'>아빠카드</option>
                  <option value='LT'>원카드</option>
                  <option value='YG'>황금카드</option>
              </select>
              <input className='firstNumber' type='text' />
              <input type='text' />
              <input type='text' />
              <input type='text' />
            </div>
          </div>
          <div className='cardExp'>
            <div className='cardExpKR'>유효기간</div>
            <div className='expInfo'>
              <select className='year' title='년도'>
                <option value='none' selected>_선택_</option>
                  <option value='2020'>2020</option>
                  <option value='2021'>2021</option>
                  <option value='2022'>2022</option>
                  <option value='2023'>2023</option>
                  <option value='2024'>2024</option>
              </select>
              <select className='month' title='월'>
                <option value='00' selected>월</option>
                  <option value='01'>01</option>
                  <option value='02'>02</option>
                  <option value='03'>03</option>
                  <option value='04'>04</option>
                  <option value='05'>05</option>
                  <option value='06'>06</option>
                  <option value='07'>07</option>
                  <option value='08'>08</option>
                  <option value='09'>09</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
              </select>
            </div>
          </div>
          <div className='monthlyPay'>
            <div className='monthlyPayKR'>할부기간</div>
            <div className='monthlySelect'>
            <select title='월'>
                <option value='00' selected>_선택_</option>
                  <option value='01'>일시불</option>
                  <option value='02'>02개월</option>
                  <option value='03'>03개월</option>
                  <option value='04'>04개월</option>
                  <option value='05'>05개월</option>
                  <option value='06'>06개월</option>
                  <option value='07'>07개월</option>
                  <option value='08'>08개월</option>
                  <option value='09'>09개월</option>
                  <option value='10'>10개월</option>
                  <option value='11'>11개월</option>
                  <option value='12'>12개월</option>
              </select>
            </div>
          </div>
          <div className='pwInfo'>
            <div className='pwKR'>비밀번호</div>
            <div className='pwInput'>
              <input type='password' />
              XX (비밀번호 앞 2자리 입력바랍니다)
            </div>
          </div>
          <div className='birthInfo'>
            <div className='infoKR'>생년월일
            <br />6자리</div>
            <div className='number'>
              <input type='text' />
              생년월일 6자리 / 사업자번호 10자리
            </div>
          </div>
        </div>
      </div>
      {/* <Test>hello</Test> */}
    </div>
    )
  }
}

// const Test = styled.div`
// ${flexCenter};
//   width: 300px;
//   height: 300px;
//   background-color: ${theme.lightBlue};


export default CardInfo;