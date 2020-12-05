import React, { Component } from "react";
import styled from "styled-components";
import DeskMenu from "./DeskMenu";

import { GrClose } from "react-icons/gr";
import { theme } from "../../styles/theme";

class DestinationDesk extends Component {
  constructor() {
    super();
    this.state = {
      location: {},
    };
  }

  componentDidMount() {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          location: res.location,
        });
      });
  }

  closeModal = () => {
    this.props.closeDestination();
  };

  render() {
    const { location } = this.state;
    const {
      top,
      left,
      closeDestination,
      selectDepPlace,
      selectArrPlace,
    } = this.props;

    return (
      <Desk top={top} left={left}>
        <DeskContainer>
          <Headers>
            <span>도시 선택</span>
            <span onClick={this.closeModal}>
              <GrClose />
            </span>
          </Headers>
          <Main>
            <MainTop>
              <input type="text" placeholder="도시명을 입력하세요" />
              <button>검색</button>
            </MainTop>
            <MainBottom>
              <div className="bottomHeader">주요도시 바로 선택</div>
              {!!location.length && (
                <table>
                  {location.map((location, idx) => (
                    <DeskMenu
                      key={idx}
                      region={location.region}
                      locate={location.locate}
                      closeDestination={closeDestination}
                      selectDepPlace={selectDepPlace}
                      selectArrPlace={selectArrPlace}
                    />
                  ))}
                </table>
              )}
            </MainBottom>
          </Main>
        </DeskContainer>
      </Desk>
    );
  }
}

const Desk = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.03);
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 100;
`;

const DeskContainer = styled.div`
  width: 745px;
  margin: 0 auto;
  border: ${theme.border01};
  background-color: white;
`;

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 28px 35px 0 28px;
  font-size: 18px;
  font-weight: normal;
`;

const Main = styled.main`
  padding: 16px 28px;

  .deskMenu {
    display: flex;

    .deskList {
    }
  }
`;

const MainTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  border: ${theme.border01};
  border-radius: 5px;

  input {
    width: 79%;
    height: 100%;
    padding-left: 15px;
    font-size: 14px;
    border-radius: 5px;
    outline: none;
  }

  button {
    width: 19%;
    height: 47px;
    color: white;
    cursor: pointer;
    background-color: ${theme.blue};
  }
`;

const MainBottom = styled.div`
  color: ${theme.lightBlack};
  font-size: 13px;

  .bottomHeader {
    font-size: 16px;
    padding-bottom: 15px;
    border-bottom: ${theme.border01};
  }
`;

export default DestinationDesk;
