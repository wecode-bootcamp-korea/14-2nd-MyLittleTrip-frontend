import React from "react";
import styled from "styled-components";

const ReservationCard = ({ ticket }) => {
  const { airplane } = ticket;
  const dateFormatter = (date) => {
    date = new Date(date);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const getArrangedData = () => {
    return [
      { type: "일정", value: `${dateFormatter(airplane["from_date"])} - ${dateFormatter(airplane["to_date"])}` },
      { type: "항공기 번호", value: airplane["airplane_numbers"] },
      { type: "요금", value: Number(ticket.price).toLocaleString(2) },
      { type: "좌석 종류", value: ticket["seat_type"].name },
      { type: "예약", value: "완료" },
    ];
  };

  return (
    <ReservationCardContainer>
      <p className="reservationStatus">예약 완료</p>
      <div className="reservationInfo">
        <span className="infoTitle">
          {`[${airplane.airline.name}] ${airplane["from_region"].name}(${airplane["from_region"]["region_code"]}) -
          ${airplane["to_region"].name}(${airplane["to_region"]["region_code"]})`}
        </span>
        {getArrangedData().map((reservationInfo, idx) => (
          <ReservationInfo key={idx}>
            <p className="infoSubtitle">{reservationInfo.type}</p>
            <p className="infoContext">{reservationInfo.value}</p>
          </ReservationInfo>
        ))}
      </div>
    </ReservationCardContainer>
  );
};

const ReservationCardContainer = styled.div`
  display: flex;
  ${({ theme }) => {
    return theme.flexSet({ justifyContent: "space-between" });
  }}
  width: 880px;
  height: 242px;
  margin: 30px auto;
  padding: 30px 25px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  .reservationStatus {
    color: ${({ theme }) => theme.blue};
  }

  .reservationInfo {
    width: 700px;

    .infoTitle {
      font-size: 1.2rem;
    }

    .infoContext {
      font-weight: 500;
    }
  }
`;

const ReservationInfo = styled.div`
  display: flex;
  margin: 15px 0;

  .infoSubtitle {
    width: 110px;
    color: ${({ theme }) => theme.gray};
  }
`;

export default ReservationCard;
