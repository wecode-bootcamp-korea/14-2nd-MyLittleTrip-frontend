import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Ticket from "./Ticket";
import styled from "styled-components";

class TicketList extends Component {
  constructor() {
    super();
  }

  render() {
    const { ticket, addSelected, selected } = this.props;

    return (
      <Div>
        {!!ticket.length && (
          <ul>
            {ticket.map((el, idx) => (
              <Ticket
                key={idx}
                id={el.id}
                airlineName={el.airplane.airline.name}
                airlineEnName={el.airplane.airplane_numbers}
                airlineIcon={el.airplane.airline.image_url}
                departTime={el.airplane.from_date}
                landingTime={el.airplane.to_date}
                seatType={el.seat_type.name}
                price={el.price}
                fromCode={el.airplane.from_region.region_code}
                toCode={el.airplane.to_region.region_code}
                countSeat={el.remaining_seat}
                addSelected={addSelected}
                el={el}
                selected={selected}
              />
            ))}
          </ul>
        )}
      </Div>
    );
  }
}

const Div = styled.div`
  position: relative;
`;

export default withRouter(TicketList);
