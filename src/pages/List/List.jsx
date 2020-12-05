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

import { flexCenter, theme, flexColumn } from "../../styles/theme";

class List extends Component {
  constructor() {
    super();
    this.state = {
      ticket: [],
      selectOne: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch("/data/productList.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ ticket: res.data, loading: true });
      });
  }

  render() {
    const { ticket, loading } = this.state;

    return (
      <>
        {loading ? (
          <MainContainer>
            <Navtrans themeColor="normal" />
            <MainListHeader>
              <div className="headerWrap">
                <div className="upperHeader">왕복</div>
                <TicketSelctor />
              </div>
            </MainListHeader>
            <Selected />
            <MainBody>
              <div className="filterContainer">
                {FILTERING.map((filter) => (
                  <FilterWrap
                    key={filter.id}
                    title={filter.title}
                    items={filter.index}
                  />
                ))}
              </div>
              <div className="mainRight">
                <InfoContainer listLength={ticket.length} />
                <PickedTicket />
                <TicketList ticket={ticket} />
              </div>
            </MainBody>
          </MainContainer>
        ) : (
          <LoadingScreen />
        )}
      </>
    );
  }
}

const MainContainer = styled.main`
  background-color: #f5f6f7;
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
