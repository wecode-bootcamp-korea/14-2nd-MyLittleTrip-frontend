import React, { Component, Fragment } from "react";
import styled from "styled-components";
import FilterWrap from "./FilterWrap";
import { FILTERING } from "./FilteringComponent";
import TicketSelctor from "../../Components/TicketSelector/TicketSelector";
import TicketList from "./TicketList";
import InfoContainer from "./InfoContainer";
import PickedTicket from "./PickedTicket";
import Navtrans from "../../Components/Navtrans/Navtrans";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import Selected from "./Selected";
import { LIST_API } from "../../config";

import { flexCenter, theme, flexColumn } from "../../styles/theme";

const OFFSET = 0;
const LIMIT = 20;

class List extends Component {
  constructor() {
    super();
    this.state = {
      ticket: [],
      selected: [],
      loading: false,
      filtering: FILTERING,
    };
  }

  fetchTicketData = async (queryString = "") => {
    try {
      const response = await fetch(LIST_API + queryString);
      const tickets = await response.json();
      this.setState({ ticket: tickets.data });
    } catch (error) {}
  };

  getDepQueryString = () => {
    const { searchInfo } = this.props.location.state;
    const date = new Date(searchInfo.startDate);
    return `?departure_region=${searchInfo.depPlace}&arrival_region=${
      searchInfo.arrPlace
    }&departure_date=${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}&offset=${OFFSET}&limit=${LIMIT}`;
  };

  getArrQueryString = () => {
    const { searchInfo } = this.props.location.state;
    const date = new Date(searchInfo.endDate);
    return `?departure_region=${searchInfo.arrPlace}&arrival_region=${
      searchInfo.depPlace
    }&departure_date=${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}&offset=${OFFSET}&limit=${LIMIT}`;
  };

  componentDidMount() {
    this.fetchTicketData(this.getDepQueryString());
    setTimeout(() => this.setState({ loading: true }), 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    const { selected } = this.state;
    if (prevState.selected.length !== selected.length) {
      if (selected.length === 1) {
        this.fetchTicketData(this.getArrQueryString() + this.makeQuerystring());
      } else if (selected.length === 2) {
        this.setState({ ticket: [] });
      }
    }
  }

  handleCheckboxValue = (categoryId, optionId) => {
    const filtering = [...this.state.filtering];
    const category = filtering[categoryId - 1];
    const option = category.index[optionId - 1];
    category.index[optionId - 1].checked = !option.checked;
    filtering[categoryId - 1] = category;
    this.setState({ filtering });

    if (this.state.selected.length === 0) {
      this.fetchTicketData(this.getDepQueryString() + this.makeQuerystring());
    } else if (this.state.selected.length === 1) {
      this.fetchTicketData(this.getArrQueryString() + this.makeQuerystring());
    }
  };

  makeQuerystring = () => {
    let result = "&";
    const filtering = [...this.state.filtering];
    filtering[0].index.forEach((airline) => {
      if (!airline.checked) {
        result += `airline=${airline.name}&`;
      }
    });
    filtering[1].index.forEach((seat) => {
      if (!seat.checked) {
        result += `seat=${seat.name}&`;
      }
    });
    result = result.slice(0, result.length - 1);

    return result;
  };

  addSelected = (target) => {
    const { selected, ticket } = this.state;
    const newSelected = ticket.filter((el) => el.id === target.id);
    this.setState({ selected: [...selected, newSelected] });
  };

  goToBooking = () => {
    const { location } = this.props;
    const { selected } = this.state;
    this.props.history.push({
      pathname: "/Booking",
      state: {
        selected: selected,
        head_count: location.state.searchInfo.headCount,
      },
    });
  };

  render() {
    const { ticket, loading, filtering, selected } = this.state;

    return (
      <>
        {loading ? (
          <MainContainer>
            <Navtrans themeColor="normal" />
            <MainListHeader>
              <div className="headerWrap">
                <div className="upperHeader">왕복</div>
                <TicketSelctor top="215px" />
              </div>
            </MainListHeader>
            <div>{selected && selected.map((el) => <Selected el={el} />)}</div>
            {selected.length !== 2 && (
              <MainBody>
                <div className="filterContainer">
                  {filtering &&
                    filtering.map((filter) => (
                      <FilterWrap
                        key={filter.id}
                        filter={filter}
                        handleCheckboxValue={this.handleCheckboxValue}
                      />
                    ))}
                </div>
                <div className="mainRight">
                  <InfoContainer listLength={ticket.length} />
                  <PickedTicket
                    location={this.props.location}
                    selected={selected}
                  />
                  <TicketList
                    ticket={ticket}
                    addSelected={this.addSelected}
                    selected={selected}
                  />
                </div>
              </MainBody>
            )}
            {selected.length === 2 && (
              <AfterPick>
                <div className="detail">상세요금</div>
                <div className="firstRow">
                  <div>항목</div>
                  <div>항공요금</div>
                  <div>유류할증료</div>
                  <div>제세공과금</div>
                  <div>발권수수료</div>
                  <div>인원</div>
                  <div>총요금</div>
                </div>
                <div className="secondRow">
                  <div>성인</div>
                  <div>
                    {!!selected.length &&
                      Number(selected[0][0].price) +
                        Number(selected[1][0].price)}
                    원
                  </div>
                  <div>0원</div>
                  <div>0원</div>
                  <div>0원</div>
                  <div>{this.props.location.state.searchInfo.headCount}명</div>
                  <div>
                    {!!selected.length &&
                      (Number(selected[0][0].price) +
                        Number(selected[1][0].price)) *
                        Number(this.props.location.state.searchInfo.headCount)}
                    원
                  </div>
                </div>
                <div className="thirdRow">
                  <div className="total">총 예상요금</div>
                  <div className="right">
                    <span>
                      {!!selected.length &&
                        (Number(selected[0][0].price) +
                          Number(selected[1][0].price)) *
                          Number(
                            this.props.location.state.searchInfo.headCount
                          )}
                      원
                    </span>
                    <button onClick={this.goToBooking}>예약하기</button>
                  </div>
                </div>
              </AfterPick>
            )}
          </MainContainer>
        ) : (
          <LoadingScreen />
        )}
      </>
    );
  }
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #f5f6f7;

  button {
    margin: auto;
  }
`;

const AfterPick = styled.div`
  width: 1015px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto 180px auto;
  padding: 15px;
  background-color: white;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  .detail {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .firstRow,
  .secondRow,
  .thirdRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 25px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    div {
      width: 80px;
    }
  }
  .thirdRow {
    display: flex;
    align-items: center;

    .total {
      font-size: 17px;
      font-weight: 600;
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 250px;
      span {
        font-size: 20px;
        font-weight: 700;
        margin: 0 7px;
      }
      button {
        width: 120px;
        height: 48px;
        font-size: 17px;
        font-weight: 600;
        border-radius: 3px;
        color: white;
        background-color: #53abf2;
      }
    }
  }
`;

const MainListHeader = styled.header`
  ${flexCenter}
  width: 100%;
  height: 90px;
  font-size: 13px;
  background-color: ${theme.blue};
  .headerWrap {
    ${flexColumn}
    align-items: flex-start;
    justify-content: center;
    width: 1064px;

    .upperHeader {
      display: flex;
      align-items: center;
      width: 1064px;
      height: 32px;
      margin: 0 auto;
      padding-top: 2px;
      color: white;
      font-size: 13px;
      font-weight: 500;
    }
  }
`;

const MainBody = styled.body`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 24px 0 48px 0;
  background-color: #f5f6f7;

  .filterContainer {
    width: 240px;
    height: 785px;
    margin-right: 40px;

    .mainRight {
      width: 784px;
    }
  }
`;

export default List;
