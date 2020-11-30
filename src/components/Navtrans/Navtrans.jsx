import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { CATEGORIES, PROFILE_MENUS } from "./navdata";

const Navtrans = ({ theme }) => {
  return (
    <>
      <Navbar theme={theme}>
        <div className="navLeft">
          <img src="/images/tmplogo.png" alt="logo" />
          <div className="searchBar">
            <BsSearch className="searchIcon" size="1em" color={theme === "normal" ? "gray" : "white"} />
            <input type="text" placeholder="여행지나 상품을 검색해보세요" />
          </div>
        </div>
        <div className="profileBar">
          {PROFILE_MENUS.map((menu) => (
            <p key={menu.id}>{menu.name}</p>
          ))}
          <FaUserCircle size="2em" color="gray" />
        </div>
      </Navbar>
      <NavBottom theme={theme}>
        <div className="categoryContainer">
          {CATEGORIES.map((category) => (
            <div key={category.id}>
              <p className={category.name === "항공권" ? "selected" : ""}>{category.name}</p>
            </div>
          ))}
        </div>
      </NavBottom>
    </>
  );
};

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

    img {
      width: 128px;
      margin: 0 20px;
    }

    .searchBar {
      display: flex;
      align-items: center;
      position: relative;

      .searchIcon {
        position: absolute;
        left: 25px;
      }

      input {
        width: 340px;
        height: 48px;
        margin-left: 10px;
        padding-left: 40px;
        border: none;
        font-size: 1rem;
        color: ${(props) => (props.theme == "normal" ? "#666d75" : "white")};
        background-color: ${(props) => (props.theme == "normal" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)")};
        border-radius: 4px;
        transition: ease-in-out 0.3s;

        &::placeholder {
          color: ${(props) => (props.theme == "normal" ? "#666d75" : "white")};
        }

        &:focus {
          background-color: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.12);
          transition: ease-in-out 0.3s;
          outline: none;
        }
      }
    }
  }

  .profileBar {
    display: flex;
    align-items: center;

    p {
      padding: 8px 12px;
      margin-right: 10px;
      color: ${(props) => (props.theme == "normal" ? "#666d75" : "white")};
      transition: ease-in-out 0.3s;

      &:hover {
        background-color: ${(props) => (props.theme == "normal" ? "rgba(0,0,0,0.05)" : "white")};
        border-radius: 4px;
        transition: ease-in-out 0.3s;
      }
    }
  }
`;

const NavBottom = styled.nav`
  display: flex;
  justify-content: center;
  height: 54px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid white;

  .categoryContainer {
    display: flex;
    width: 1000px;

    div {
      padding: 0 20px;

      p {
        padding-bottom: 15px;
        color: ${(props) => (props.theme == "normal" ? "#495056b3" : "white")};
        font-size: 16px;
        font-weight: 500;

        &.selected {
          width: 50px;
          text-align: center;
          color: ${(props) => (props.theme == "normal" ? "#495056" : "white")};
          border-bottom: 4px solid ${(props) => (props.theme == "normal" ? "#3c92e0" : "white")};
        }
      }
    }
  }
`;

export default Navtrans;
