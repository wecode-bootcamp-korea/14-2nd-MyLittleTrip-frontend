import React, { Fragment } from "react";
import styled from "styled-components";
import Navtrans from "../../Components/Navtrans/Navtrans";
import Footer from "../../Components/Footer/Footer";
import ReservationCard from "./ReservationCard";
import { CarouselTitle } from "../../Components/StyledComponents/MainCustomComponents";
import { useAxios } from "../../Components/Hooks/useAxios";
import { RESERVATION_API } from "../../config";

const Reservation = (props) => {
  const { response } = useAxios({ method: "get", url: RESERVATION_API });

  return (
    <>
      <Navtrans themeColor="normal" />
      <ReservContainer>
        <CarouselTitle width="880px" marginHorizon="auto" size="1.5rem">
          예약내역
        </CarouselTitle>
        {response &&
          response.data.map((flight) =>
            flight.product.map((ticket) => <ReservationCard key={ticket.id} ticket={ticket} />)
          )}
      </ReservContainer>
      <Footer />
    </>
  );
};

const ReservContainer = styled.section`
  /* height: 85vh; */
  padding: 30px 0;
  background-color: rgba(0, 0, 0, 0.02);
`;

export default Reservation;
