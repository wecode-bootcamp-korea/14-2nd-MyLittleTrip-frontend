import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
import { VscDash } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { theme } from "../../styles/theme";
import DestinationDesk from "./DestinationDesk";
import Calendar from "./Calendar/Calendar";
import SeatOption from "./SeatOption/SeatOption";
import { SEAT_OPTIONS } from "./SeatOption/seatoptionData";

class TicketSelctor extends Component {
  constructor() {
    super();
    this.state = {
      depPlace: "",
      arrPlace: "",
      startDate: new Date(),
      endDate: undefined,
      calendarModal: false,
      destinationModal: false,
      arriveModal: false,
      seatModal: false,
      seatOptions: SEAT_OPTIONS,
      headCount: 1,
      seatType: "전체",
    };
  }

  openDestination = () => {
    this.setState({ destinationModal: true });
  };

  closeDestination = () => {
    this.setState({ destinationModal: false });
  };

  openDesk = () => {
    this.setState({ arriveModal: true });
  };

  closeDesk = () => {
    this.setState({ arriveModal: false });
  };

  selectDepPlace = (e) => {
    this.setState({ depPlace: e.target.innerHTML });
  };

  selectArrPlace = (e) => {
    this.setState({ arrPlace: e.target.innerHTML });
  };

  handleChangeInput = () => {
    if (this.state.depPlace) {
      this.setState({ depPlace: this.state.arrPlace, arrPlace: this.state.depPlace });
    }
  };

  handleSubmitClick = (startDate, endDate) => {
    this.setState({ startDate, endDate });
  };

  openCalendar = () => {
    this.setState({ calendarModal: true });
  };

  closeCalendar = () => {
    this.setState({ calendarModal: false });
  };

  openSeatOption = () => {
    this.setState({ seatModal: true });
  };

  closeSeatOption = () => {
    this.setState({ seatModal: false });
  };

  dateFormatter = (date) => {
    date = new Date(date);
    return `${date.getMonth() + 1}월 ${date.getDate()}일 (${WEEK[date.getDay()]})`;
  };

  handleRadioChange = (option) => {
    this.setState({ seatType: option.name });
  };

  handleHeadCount = (type) => {
    const { headCount } = this.state;
    if (type === "minus") {
      if (headCount === 1) return;
      this.setState({ headCount: headCount - 1 });
      return;
    }
    this.setState({ headCount: headCount + 1 });
  };

  makeQueryString = (obj) => {
    const entries = Object.entries(obj);
    const newEntries = entries.reduce((acc, val) => {
      if (val[0] === "id") return acc;
      return [...acc, `${val[0]}=${val[1]}`];
    }, []);
    return "?" + newEntries.join("&");
  };

  handleSearchClick = () => {
    const { location } = this.props;
    const { depPlace, arrPlace, startDate, endDate, headCount, seatType } = this.state;
    if (!arrPlace || !endDate || !depPlace) {
      alert("올바른 값을 입력해주세요.");
      return;
    }
    const searchInfo = {
      id: Date.now(),
      depPlace,
      arrPlace,
      startDate,
      endDate,
      headCount,
      seatType,
    };

    if (location.pathname === "/") {
      const existRecent = localStorage.getItem("recent");
      if (existRecent) {
        const parsed = JSON.parse(existRecent);
        const newRecent = parsed.slice(0, 5);
        localStorage.setItem("recent", JSON.stringify([searchInfo, ...newRecent]));
      } else localStorage.setItem("recent", JSON.stringify([searchInfo]));
    }

    this.props.history.push({
      pathname: "/list",
      search: this.makeQueryString(searchInfo),
      state: {
        searchInfo,
      },
    });
    if (location.pathname === "/list") window.location.reload();
  };

  componentDidMount() {
    const { location } = this.props;
    if (location.pathname !== "/") {
      const givenData = location.state.searchInfo;
      this.setState({
        depPlace: givenData.depPlace,
        arrPlace: givenData.arrPlace,
        startDate: givenData.startDate,
        endDate: givenData.endDate,
        headCount: givenData.headCount,
        seatType: givenData.seatType,
      });
    }
  }

  render() {
    const {
      depPlace,
      arrPlace,
      startDate,
      endDate,
      destinationModal,
      arriveModal,
      calendarModal,
      seatModal,
      headCount,
      seatType,
    } = this.state;

    const { top, depLeft, arrLeft, location } = this.props;
    return (
      <>
        <TicketSelectorContainer>
          {destinationModal && (
            <DestinationDesk
              top={top || "50px"}
              left={depLeft || "0"}
              closeDestination={this.closeDestination}
              selectDepPlace={this.selectDepPlace}
            />
          )}

          {arriveModal && (
            <DestinationDesk
              top={top || "50px"}
              left={arrLeft || "210px"}
              closeDestination={this.closeDesk}
              selectArrPlace={this.selectArrPlace}
            />
          )}
          <TicketSelector>
            <div className="cityInputWrap">
              <ChooseCity placeholder="출발지를 선택하세요" onClick={this.openDestination} value={depPlace} />
              <span>
                <CgArrowsExchangeAlt className="switchButton" onClick={this.handleChangeInput} />
              </span>
              <ChooseCity onClick={this.openDesk} value={arrPlace} />
            </div>
            <div className="dateInputWrap">
              <AiOutlineCalendar className="calendar" />
              <ChooseDate
                placeholder="가는날 선택"
                startDate={startDate && this.dateFormatter(startDate)}
                endDate={endDate && this.dateFormatter(endDate)}
                onClick={this.openCalendar}
              />
              <span className="dashSpan">
                <VscDash className="dash" />
              </span>
              <ChooseDate endDate={endDate && this.dateFormatter(endDate)} onClick={this.openCalendar} />
              {calendarModal && (
                <Calendar
                  startDate={startDate}
                  endDate={endDate}
                  handleSubmitClick={this.handleSubmitClick}
                  closeCalendar={this.closeCalendar}
                />
              )}
            </div>
            <div className="userInfo" onClick={this.openSeatOption}>
              <div>
                <FaUser className="userIcon" />
              </div>
              <div className="infoText">
                <span>
                  승객 {headCount}명, {seatType}
                </span>
                <BiDownArrow className="downArrow" />
              </div>
            </div>
            {seatModal && (
              <SeatOption
                seatType={seatType}
                headCount={headCount}
                handleRadioChange={this.handleRadioChange}
                handleHeadCount={this.handleHeadCount}
                closeSeatOption={this.closeSeatOption}
              />
            )}
            <div>
              <SearchButton mode={location.pathname === "/" ? "main" : "list"} onClick={this.handleSearchClick}>
                검색
              </SearchButton>
            </div>
          </TicketSelector>
        </TicketSelectorContainer>
      </>
    );
  }
}

const TicketSelectorContainer = styled.div`
  position: relative;
`;

const TicketSelector = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1064px;
  .cityInputWrap {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    span {
      width: 28px;
      height: 28px;
      .switchButton {
        width: 24px;
        height: 24px;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
  .dateInputWrap {
    display: flex;
    align-items: center;
    position: relative;
    width: 290px;
    padding-left: 44px;
    background-color: white;
    border-radius: 5px;
    .calendar {
      width: 25px;
      height: 25px;
      position: absolute;
      left: 5px;
    }
  }
  .userInfo {
    display: flex;
    align-items: center;
    width: 260px;
    padding-left: 10px;
    font-size: 15px;
    font-weight: 500;
    background-color: white;
    border-radius: 3px;
    .userIcon {
      width: 20px;
      height: 20px;
    }
    .infoText {
      display: flex;

      span {
        display: inline-block;
        width: 195px;
        margin: 0 5px;
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }
  .searchBtn {
    width: 70px;
    height: 40px;
    border-radius: 3px;
    margin-top: 1px;
  }
  .userIcon,
  .calendar {
    color: ${theme.blue};
  }
`;

const ChooseCity = styled.input.attrs((props) => ({
  type: "text",
  readOnly: "readOnly",
  placeholder: props.placeholder || "도착지를 선택하세요",
  value: props.value,
}))`
  width: 181px;
  height: 40px;
  padding-left: 15px;
  border-radius: 3px;
`;

const ChooseDate = styled.input.attrs((props) => ({
  type: "text",
  readOnly: "readOnly",
  placeholder: props.placeholder || "오는날 선택",
  value: props.endDate ? (props.startDate ? props.startDate : props.endDate) : undefined,
}))`
  width: 98px;
  height: 40px;
  padding-left: 10px;
  border-radius: 3px;
`;

const SearchButton = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 3px;
  margin-top: 1px;
  background-color: ${({ mode }) => (mode === "main" ? "#51abf3" : "#e8f4fc")};
  color: ${({ mode }) => (mode === "main" ? "white" : "#51abf3")};
`;

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

export default withRouter(TicketSelctor);
