import React, { Component } from "react";
import General from "./General";
import Refund from "./Refund";
import { Modal } from "react-bootstrap";
import Payment from "./Payment";
import Luggage from "./Luggage";
import "./ReservNote.scss";
class ReservNote extends Component {
  constructor() {
    super();
    this.state = {
      pageSelection: "General",
      isRefundClicked: false,
      General: false,
      Refund: false,
      Payment: false,
      Luggage: false,
      luggageModal: false,
    };
  }
  handleInput = (e) => {
    const { id } = e.target;
    this.setState({
      pageSelection: id,
    });
  };
  handleLuggageModal = (e) => {
    this.setState({
      luggageModal: true,
    });
    this.handleInput(e);
  };
  checkboxClicked = (e) => {
    const { checked, id } = e.target;
    this.setState({
      [id]: checked,
    });
    if (checked) {
      this.goToNextPage(id);
    }
  };
  goToNextPage = (id) => {
    switch (id) {
      case "General":
        this.setState({ pageSelection: "Refund" });
        break;
      case "Refund":
        this.setState({ pageSelection: "Payment" });
        break;
      case "Payment":
        this.setState({ pageSelection: "Luggage" });
        break;
      default:
    }
  };
  render() {
    let content;
    if (this.state.pageSelection === "General") {
      content = (
        <General
          id="General"
          checked={this.state.General}
          delegate={this.checkboxClicked}
        />
      );
    } else if (this.state.pageSelection === "Refund") {
      content = (
        <Refund
          id="Refund"
          checked={this.state.Refund}
          delegate={this.checkboxClicked}
        />
      );
    } else if (this.state.pageSelection === "Payment") {
      content = (
        <Payment
          id="Payment"
          checked={this.state.Payment}
          delegate={this.checkboxClicked}
        />
      );
    } else if (this.state.pageSelection === "Luggage") {
      content = (
        <Luggage
          id="Luggage"
          checked={this.state.Payment}
          delegate={this.checkboxClicked}
        />
      );
    }
    return (
      <div className="ReservNote">
        <div className="title">예약 유의사항</div>
        <div className="list">
          <div
            className={
              "General " +
              (this.state.pageSelection === "General" ? "selected" : "")
            }
            id="General"
            onClick={this.handleInput}
          >
            일반규정
          </div>
          <div
            className={
              "Refund " +
              (this.state.pageSelection === "Refund" ? "selected" : "")
            }
            id="Refund"
            onClick={this.handleInput}
          >
            예약/환불 규정
          </div>
          <div
            className={
              "Payment " +
              (this.state.pageSelection === "Payment" ? "selected" : "")
            }
            id="Payment"
            onClick={this.handleInput}
          >
            결제규정
          </div>
          <div
            className={
              "Luggage " +
              (this.state.pageSelection === "Luggage" ? "selected" : "")
            }
            id="Luggage"
            onClick={this.handleInput}
          >
            수하물정보
          </div>
        </div>
        <div className="summary">{content}</div>
      </div>
    );
  }
}
export default ReservNote;
