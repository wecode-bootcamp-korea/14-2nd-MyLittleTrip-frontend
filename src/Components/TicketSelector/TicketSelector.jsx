import React, { Component } from "react";
import styled from "styled-components";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
import { VscDash } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { theme } from "../../styles/theme";
import DestinationDesk from "./DestinationDesk";

class TicketSelctor extends Component {
  constructor() {
    super();
    this.state = {
      depPlace: "",
      arrPlace: "",
      destinationModal: false,
      arriveModal: false,
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
      this.setState({
        depPlace: this.state.arrPlace,
        arrPlace: this.state.depPlace,
      });
    }
  };

  render() {
    const {
      depPlace,
      arrPlace,
      selectDepDate,
      selectArrDate,
      destinationDesk,
      destinationModal,
      arriveModal,
    } = this.state;
    return (
      <>
        {destinationModal && (
          <DestinationDesk
            top={"50px"}
            left={"10px"}
            closeDestination={this.closeDestination}
            selectDepPlace={this.selectDepPlace}
          />
        )}

        {arriveModal && (
          <DestinationDesk
            top="50px"
            left="220px"
            closeDestination={this.closeDesk}
            selectArrPlace={this.selectArrPlace}
          />
        )}
        <TicketSelector>
          <div className="cityInputWrap">
            <ChooseCity
              placeholder="출발지를 선택하세요"
              onClick={this.openDestination}
              value={depPlace}
            />
            <span>
              <CgArrowsExchangeAlt
                className="switchButton"
                onClick={this.handleChangeInput}
              />
            </span>
            <ChooseCity onClick={this.openDesk} value={arrPlace} />
          </div>
          <div className="dateInputWrap">
            <AiOutlineCalendar className="calendar" />
            <ChooseDate placeholder="가는날 선택" />
            <span className="dashSpan">
              <VscDash className="dash" />
            </span>
            <ChooseDate />
          </div>
          <div className="userInfo">
            <div>
              <FaUser className="userIcon" />
            </div>
            <div className="infoText">
              <span>승객 1명</span>,<span>전체</span>
              <BiDownArrow className="downArrow" />
            </div>
          </div>
          <div>
            <button className="searchBtn">검색</button>
          </div>
        </TicketSelector>
      </>
    );
  }
}

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

      .downArrow {
        margin-left: 100px;
      }

      span {
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
}))`
  width: 98px;
  height: 40px;
  padding-left: 15px;
  border-radius: 3px;
`;

export default TicketSelctor;
