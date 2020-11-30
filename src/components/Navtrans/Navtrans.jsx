import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Navtrans = (props) => {
  return (
    <Navbar>
      <div className="navLeft">
        <img src="/images/tmplogo.png" alt="logo" />
        <div className="searchBar">
          <BsSearch size="1em" color="gray" />
          <input type="text" placeholder="여행지나 상품을 검색해보세요" />
        </div>
      </div>
      <div className="profileBar">
        <p>위시리스트</p>
        <p>예약내역</p>
        <p>메시지</p>
        <FaUserCircle size="2em" color="gray" />
      </div>
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 72px;
  background-color: rgba(0, 0, 0, 0);

  .navLeft {
    display: flex;
    align-items: center;

    img {
      width: 128px;
      margin: 0 20px;
    }

    .searchBar {
      display: flex;
      align-items: center;
      width: 360px;
      height: 48px;
      padding-left: 15px;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 4px;

      input {
        width: 300px;
        margin-left: 10px;
        border: none;
        font-size: 1rem;
        background-color: rgba(0, 0, 0, 0);

        &:focus {
          outline: none;
        }
      }
    }
  }

  .profileBar {
    display: flex;
    align-items: center;

    p {
      margin-right: 20px;
      color: #666d75;
    }
  }
`;

export default Navtrans;
