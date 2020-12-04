import React from "react";
import styled from "styled-components";
import Navtrans from "../../Components/Navtrans/Navtrans";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

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

export default Main;
