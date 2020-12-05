import React, { Component } from "react";
import Ticket from "./Ticket";

class TicketList extends Component {
  render() {
    const { ticket } = this.props;
    console.log("props>>>", this.props.ticket);
    return (
      <div className="ticketList">
        {ticket.length && (
          <ul>
            {ticket.map((el) => (
              <Ticket
                key={el.id}
                // airlineIcon={el.airlineIcon}
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
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TicketList;
