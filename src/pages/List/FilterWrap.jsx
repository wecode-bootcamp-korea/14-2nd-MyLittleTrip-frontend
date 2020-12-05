import React, { Component } from "react";
import styled from "styled-components";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import FilterIndex from "./FilterIndex";
import { theme, flexColumn } from "../../styles/theme";

class FilterWrap extends Component {
  render() {
    const { title, items } = this.props;

    return (
      <FilterContainer>
        <ClickTab>
          <div className="tabHeader">{title}</div>
          <div>
            <BiUpArrow className="sildeClose" />
          </div>
        </ClickTab>
        <CheckboxWrap>
          <div className="chooseAll">
            <span>모두 선택</span>|<span>모두 해제</span>
          </div>
          <ul>
            {items.map((items, idx) => (
              <FilterIndex key={idx} items={items} />
            ))}
          </ul>
        </CheckboxWrap>
      </FilterContainer>
    );
  }
}

const FilterContainer = styled.div`
  width: 240px;
  padding: 8px 0;
  border-top: ${theme.border01};
  margin-bottom: 7px;
  padding-top: 13px;
`;

const ClickTab = styled.h2`
  display: flex;
  justify-content: space-between;
  width: 240px;
  padding: 8px;
  font-size: 16px;
  color: ${theme.lightBlack};

  .sildeClose {
    font-size: 16px;
  }
`;

const CheckboxWrap = styled.div`
  font-size: 16px;
  .chooseAll {
    width: 240px;
    height: 17px;
    margin-bottom: 20px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.2);
    font-weight: 500;

    span {
      margin: 0px 5px;
    }
  }

  .airlineName {
    margin-left: 8px;
  }
`;

export default FilterWrap;
