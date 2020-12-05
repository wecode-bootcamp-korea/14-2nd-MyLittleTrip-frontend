import React, { Component } from "react";
import styled from "styled-components";

class InfoContainer extends Component {
  render() {
    const { listLength } = this.props;
    return (
      <SearchResult>
        <div className="container">
          <div className="showResult">검색결과 총 {listLength}개</div>
          <div className="resultInfo">
            성인 1인 기준 편도 요금입니다. (세금 및 수수료 미포함)
          </div>
        </div>
        <select className="priceRow" id="priceRow">
          <option value="낮은 가격 순">낮은 가격 순</option>
          <option value="출발 시간 빠른 순">출발 시간 빠른 순</option>
          <option value="출발 시간 늦은 순">출발 시간 늦은 순</option>
        </select>
      </SearchResult>
    );
  }
}

const SearchResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .container {
    .showResult {
      font-size: 14px;
    }
    .resultInfo {
      margin-top: 5px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
  .priceRow {
    width: 178px;
    height: 40px;
    padding-left: 12px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    outline: none;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }

    &:focus {
      border: 2px solid #2d97ed;
    }
  }
`;

export default InfoContainer;
