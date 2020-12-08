import React, { Component } from "react";
import './FinalTicket.scss';



class FinalTicket extends Component {
  constructor() {
    super();
    this.state = {
      ticketCheck: [],
      ticketdata: ''
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/ticketcheck.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          ticketCheck: res.data,
        });
      });
  }

  render() {
    return (
    <div className='FinalTicket'>
      <div className='topTable'>
        <div className='airLine'>항공편</div>
        <div className='journey'>여정</div>
        <div className='depature'>출발</div>
        <div className='arrival'>도착</div>
        <div className='class'>좌석</div>
      </div>
      <div className='infoCover'>
        <div className='planDate'>
          <div className='date'>가는날</div>
        </div>
        <div className='planeNumber'>
          <div className='number'>TW 731편</div>
        </div>
        <div className='destiantion'>
          <div className='des'>김포 - 제주</div>
        </div>
        <div className='depatureDate'>
          <div className='depature'>12월 08일 (화)<br></br> 19:05</div>
        </div>
        <div className='arrivalDate'>
          <div className='arrival'>12월 08일 (화)<br></br> 20:05</div>
        </div>
        <div className='typeOfSeat'>
          <div className='seat'>할인석<br></br>2석</div>
        </div>
      </div>
    </div>
    )
  }
}

export default FinalTicket;