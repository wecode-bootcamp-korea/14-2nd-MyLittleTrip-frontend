import React, { Component } from "react";
import "./PassengerInfo.scss";
class PassengerInfo extends Component {
  constructor() {
    super();
    this.state = {
      selectedGender: "",
    };
  }
  changeColor = (e) => {
    console.log(e.target.className);
    if (e.target.className === "maleButton")
      this.setState({ selectedGender: "male" });
    else if (e.target.className === "femaleButton")
      this.setState({ selectedGender: "female" });
  };
  render() {
    const { selectedGender } = this.state;
    return (
      <div className="PassengerInfo">
        <h3 className="InfoTitle">탑승객 정보</h3>
        <div className="InfoContainer">
          <h3 className="Quantity">탑승객 1 : 성인</h3>
          <div className="NameContainer">
            <div className="name">
              <div className="lastNameContainer">
                <div className="last">한글 성</div>
                <input type="text" placeholder="예) 홍" />
              </div>
              <div className="firstNameContainer">
                <div className="first">한글 이름</div>
                <input type="text" placeholder="예) 길동" />
              </div>
            </div>
            <p>
              예약 후 변경이 불가능하오니 신분증과 동일한 성함 기재
              부탁드립니다.
            </p>
            <p>※ 시민권자&외국인 : 여권 상의 영문성함 / 내국인 : 한글 성함.</p>
          </div>
          <div className="passengerGenderContainer">
            <div className="Gender">성별</div>
            <div className="pickGender">
              <span className="maleCover">
                <button
                  className={
                    selectedGender === "male"
                      ? "maleButton selected"
                      : "maleButton"
                  }
                  onClick={this.changeColor}
                >
                  남성
                </button>
              </span>
              <span className="femaleCover">
                <button
                  className={
                    selectedGender === "female"
                      ? "femaleButton selected"
                      : "femaleButton"
                  }
                  onClick={this.changeColor}
                >
                  여성
                </button>
              </span>
            </div>
          </div>
          <div className="nationalityContainer">
            <div className="nationality">국적</div>
            <div className="selectContainer">
              <select title="국적선택">
                <option value="KR" selected>
                  대한민국
                </option>
                <option value="US">미국</option>
                <option value="CA">캐나다</option>
                <option value="JP">일본</option>
                <option value="CH">중국</option>
                <option value="GE">독일</option>
                <option value="RU">러시아</option>
              </select>
            </div>
          </div>
          <div className="birthContainer">
            <div className="birth">생년월일</div>
            <input type="text" placeholder="예) 2020" />
            <select className="monthSelect" title="생년월일 월">
              <option value="00" selected>
                월
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select className="daySelect" title="생년월일 일">
              <option value="00" selected>
                일
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </div>
          <div className="depaturePaymentContainer">
            <div className="payment">
              <div className="paymentTitle">가는편 요금조건 :()</div>
              <select>
                <option disabled="disabled">
                  ※ 단, 할인 및 특가 운임의 경우 운임할인이 적용되지 않습니다.
                </option>
                <option value="ADT">성인()</option>
              </select>
              <p>
                ※ 신분할인 적용 시 할인율은 조건에 따라 상이하며, 할인반영
                금액은 결제완료 후 확인 가능합니다.
              </p>
            </div>
          </div>
          <div className="returnPaymentContainer">
            <div className="payment">
              <div className="paymentTitle">오는편 요금조건 :()</div>
              <select>
                <option value="ADT">성인()</option>
                <option value="OPT1">Wecode 멤버</option>
                <option value="OPT2">코딩혼수상태</option>
                <option value="OPT3">미남미녀</option>
                <option value="OPT4">4번은 개인주의야</option>
                <option value="OPT5">토익만점자</option>
              </select>
              <p>
                ※ 신분할인 적용 시 할인율은 조건에 따라 상이하며, 할인반영
                금액은 결제완료 후 확인 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PassengerInfo;
