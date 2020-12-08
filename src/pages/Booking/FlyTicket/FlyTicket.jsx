import React, { Component } from "react";
import FinalTicket from './FinalTicket';
import './FlyTicket.scss';



class FlyTicket extends Component {
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
    <div className='FlyTicket'>
      <div className='container'>
        <div className='destination'>
          <div className='depature'>
            <div className='Kor'>김포</div>
            <div className='Eng'>GMP</div>
          </div>
          <div className='direction'>
            <div className='arrow'>화살표</div>
            <div className='date'>12월 08일</div>
          </div>
          <div className='arrival'>
            <div className='Kor'>제주</div>
            <div className='Eng'>CJU</div>
          </div>
          <div className='airLineContainer'>
            <img className='airLine' alt='항공사' src='/images/airjordan.png' />
            <div className='name'>에어조던</div>
          </div>
          <div className='flyTypeContainer'>
            <div className='title'>운항종류</div>
            <div className='type'>왕복</div>
          </div>
          <div className='classTypeContainer'>
            <div className='title'>좌석등급</div>
            <div className='type'>특가석</div>
          </div>
          <div className='passengerContainer'>
            <div className='passenger'>승객</div>
            <div className='quantity'>1명</div>
          </div>
        </div>
      </div>
      <FinalTicket />
    </div>
    )
  }
}

export default FlyTicket;