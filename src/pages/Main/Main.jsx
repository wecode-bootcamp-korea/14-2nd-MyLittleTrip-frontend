import React from "react";
import styled from "styled-components";
import Navtrans from "../../Components/Navtrans/Navtrans";

const Main = (props) => {
  return (
    <>
      <MainHeader>
        <Navtrans themeColor="" />
        <div className="imageContainer">
          <img
            className="bannerImage"
            src="https://i.ibb.co/CH9f0kZ/suu-terr-Dan-Q2b13x-Ps-unsplash.jpg"
            alt="banner"
          />
        </div>
        <FlightSelector>여기</FlightSelector>
      </MainHeader>
      <div>다음</div>
    </>
  );
};

const MainHeader = styled.div`
  position: relative;
  height: 348px;

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
`;

const FlightSelector = styled.section`
  width: 1000px;
  padding: 40px 0;
`;

export default Main;
