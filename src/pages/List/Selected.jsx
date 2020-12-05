import React, { Component } from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

class Selected extends Component {
  render() {
    return (
      <SelectedOne>
        <li>
          <span className="a">가는편</span>
          <span className="b">
            김포
            <FaLongArrowAltRight />
            포항
          </span>
          <span className="c">12월7일</span>
          <span className="d"></span>
          <span className="e"></span>
        </li>
      </SelectedOne>
    );
  }
}

const SelectedOne = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1064px;
  margin: 24px auto;
  padding: 24px 24px;
  font-size: 14px;
  background-color: #f5f6f7;
  border: 1px solid black;

  li {
    .a {
      color: white;
      background-color: #1583db;
      padding: 0 5px;
    }
  }
`;

export default Selected;
