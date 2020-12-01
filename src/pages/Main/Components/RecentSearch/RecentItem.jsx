import React from "react";
import styled from "styled-components";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const RecentItem = ({ recentdata, handleDeleteClick }) => {
  const history = useHistory();

  const handleCardClick = () => {
    history.push(
      `/list?from=${recentdata.departAirport}&to=${recentdata.arriveAirport}&fromDate=${recentdata.departDate}&toDate=${recentdata.arriveDate}&count=${recentdata.headCount}&type=${recentdata.seatType}`
    );
  };

  const handleDelete = (e) => {
    handleDeleteClick(e, recentdata);
  };

  return (
    <div>
      <RecentItemContainer onClick={handleCardClick}>
        <p>왕복</p>
        <div className="fromTo">
          <span>
            {recentdata.departAirport} ({recentdata.departCode})
          </span>
          <CgArrowsExchangeAlt size="1.8em" color="gray" />
          <span>
            {recentdata.arriveAirport} ({recentdata.arriveCode})
          </span>
        </div>
        <div className="detailInfo">
          <span>
            {`${+recentdata.departDate.split("-")[1]}월 ${+recentdata.departDate.split(
              "-"
            )[2]}일 - ${+recentdata.arriveDate.split("-")[1]}월 ${+recentdata.arriveDate.split("-")[2]}일`}
          </span>
          <span>성인 {recentdata.headCount}</span>
          <span>{recentdata.seatType}</span>
        </div>
        <IoClose className="closeButton" color="gray" size="1.4em" onClick={handleDelete} />
      </RecentItemContainer>
    </div>
  );
};

const RecentItemContainer = styled.div`
  position: relative;
  width: 344px;
  height: 92px;
  padding: 14px 16px;
  margin: 0 ${(props) => props.marginRight || "3px"} 0 3px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 3px;
  cursor: pointer;

  p {
    width: fit-content;
    padding: 3px 11px;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.blue};
    border: 1px solid ${({ theme }) => theme.blue};
    border-radius: 2px;
  }

  .fromTo {
    svg {
      padding-top: 5px;
      margin-bottom: -5px;
    }

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.lightBlack};
    }
  }

  .detailInfo {
    span {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.darkGray};
    }

    span + span::before {
      content: "·";
      margin: 0 3px;
    }
  }

  .closeButton {
    position: absolute;
    top: 14px;
    right: 12px;
  }
`;

export default RecentItem;
