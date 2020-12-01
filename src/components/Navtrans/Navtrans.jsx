import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { CATEGORIES, PROFILE_MENUS } from "./navdata";

const Navtrans = ({ theme }) => {
  return (
    <NavContainer>
      <Navbar theme={theme}>
        <div className="navLeft">
          <Link to="/">
            <img
              className="logoImage"
              src={theme === "normal" ? "/images/logo.png" : "/images/logo_white.png"}
              alt="logo"
            />
          </Link>
          <div className="searchBar">
            <BsSearch className="searchIcon" size="1em" color={theme === "normal" ? "gray" : "white"} />
            <input type="text" placeholder="여행지나 상품을 검색해보세요" />
          </div>
        </div>
        <div className="profileBar">
          {PROFILE_MENUS.map((menu) => (
            <p key={menu.id}>{menu.name}</p>
          ))}
          <FaUserCircle className="userIcon" size="2em" color={theme === "normal" ? "gray" : "rgba(255,255,255,0.8)"} />
        </div>
      </Navbar>
      <NavBottom theme={theme}>
        {CATEGORIES.map((category) => (
          <div className="categoryItem" key={category.id}>
            <p className={category.name === "항공권" ? "selected" : ""}>{category.name}</p>
          </div>
        ))}
      </NavBottom>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 72px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);

  .navLeft {
    display: flex;
    align-items: center;

    .logoImage {
      width: 128px;
      margin: 0 20px;
    }

    .searchBar {
      display: flex;
      align-items: center;
      position: relative;

      .searchIcon {
        position: absolute;
        left: 23px;
      }

      input {
        width: 330px;
        height: 48px;
        margin-left: 10px;
        padding-left: 40px;
        color: ${(props) => (props.theme === "normal" ? "rgba(0,0,0,0.8)" : "white")};
        background-color: ${(props) =>
          props.theme === "normal" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.15)"};
        font-size: 15px;
        border-radius: 4px;
        transition: ease-in-out 0.5s;

        &::placeholder {
          color: ${(props) => (props.theme === "normal" ? "rgba(0,0,0,0.5)" : "white")};
        }

        &:hover {
          background-color: ${(props) =>
            props.theme === "normal" ? "rgba(136, 16, 16, 0.06)" : "rgba(255, 255, 255, 0.25)"};
        }

        &:focus {
          outline: none;
          background-color: white;
          color: rgba(0, 0, 0, 0.8);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.12);
          transition: ease-in-out 0.5s;
        }
      }
    }
  }

  .profileBar {
    display: flex;
    align-items: center;

    p {
      margin-right: 20px;
      font-size: 15px;
      color: ${(props) => (props.theme === "normal" ? "#666d75" : "rgba(255,255,255,0.8)")};
      cursor: pointer;
    }

    .userIcon {
      cursor: pointer;
    }
  }
`;

const NavBottom = styled.nav`
  display: flex;
  justify-content: center;
  height: 35px;
  margin: 10px 250px 0 0;

  @media screen and (max-width: 1000px) {
    margin: 10px 0 0 0;
  }

  .categoryItem {
    padding: 0 10px;

    p {
      /* padding-bottom: 15px; */
      padding: 0 7px 15px 7px;
      color: ${(props) => (props.theme === "normal" ? "#495056b3" : "rgba(255,255,255,0.7)")};
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: ease-in-out 0.2s;
      border-bottom: 4px solid rgba(255, 255, 255, 0);

      &:hover {
        border-bottom: 4px solid ${(props) => (props.theme === "normal" ? "#73B5F3" : "rgba(255,255,255,0.5)")};
        transition: ease-in-out 0.2s;
      }

      &.selected {
        text-align: center;
        color: ${(props) => (props.theme === "normal" ? "#495056" : "white")};
        border-bottom: 4px solid ${(props) => (props.theme === "normal" ? "#3c92e0" : "white")};
      }
    }
  }
`;

export default Navtrans;
