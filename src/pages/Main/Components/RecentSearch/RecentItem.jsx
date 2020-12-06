import React from "react";
import styled from "styled-components";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const RecentItem = ({ recentdata, handleDeleteClick }) => {
  const history = useHistory();

  const makeQueryString = (obj) => {
    const entries = Object.entries(obj);
    const newEntries = entries.reduce((acc, val, idx) => {
      if (val[0] === "id") return acc;
      return [...acc, `${val[0]}=${val[1]}`];
    }, []);
    return "?" + newEntries.join("&");
  };

  const handleCardClick = () => {
    history.push({
      pathname: "/list",
      search: makeQueryString(recentdata),
      state: { searchInfo: recentdata },
    });
  };

  const handleDelete = (e) => {
    handleDeleteClick(e, recentdata);
  };

  const startDate = new Date(recentdata.startDate);
  const endDate = new Date(recentdata.endDate);

  return (
    <div>
      <RecentItemContainer onClick={handleCardClick}>
        <p>왕복</p>
        <div className="fromTo">
          <span>{recentdata.depPlace}</span>
          <CgArrowsExchangeAlt size="1.8em" color="gray" />
          <span>{recentdata.arrPlace}</span>
        </div>
        <div className="detailInfo">
          <span>
            {`${startDate.getMonth() + 1}월 ${startDate.getDate()}일 - ${
              endDate.getMonth() + 1
            }월 ${endDate.getDate()}일`}
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
