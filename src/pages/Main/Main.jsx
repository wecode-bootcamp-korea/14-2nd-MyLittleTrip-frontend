import React, { Component } from "react";
import styled from "styled-components";
import Navtrans from "../../Components/Navtrans/Navtrans";

class Main extends Component {
  render() {
    return (
      <MainContainer>
        <header>
          <Navtrans />
          <div className="imageContainer">
            <img
              className="bannerImage"
              src="https://i.ibb.co/CH9f0kZ/suu-terr-Dan-Q2b13x-Ps-unsplash.jpg"
              alt="banner"
            />
          </div>
          <FlightSelector>ㅎㅇ</FlightSelector>
        </header>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  header {
    position: relative;

    .imageContainer {
      position: absolute;
      top: 0;
      height: 348px;
      z-index: -1;
      overflow: hidden;
      .bannerImage {
        width: 100%;
      }
    }
  }
`;

const FlightSelector = styled.section`
  width: 1000px;
  padding: 40px 0;
`;

export default Main;
