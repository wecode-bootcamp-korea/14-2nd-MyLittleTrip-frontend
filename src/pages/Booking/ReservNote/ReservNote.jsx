import React, { Component } from 'react';
import General from './General';
import Refund from './Refund';
import { Modal } from 'react-bootstrap';
import Payment from './Payment';
import Luggage from './Luggage';
import './ReservNote.scss';
// import ReservNote from './CardInfo/CardInfo'

class ReservNote extends Component {
  constructor() {
    super();
    this.state = {
      pageSelection: 'General',
      isRefundClicked: false,
      General: false,
      Refund: false,
      Payment: false,
      Luggage: false,
    };
  }
// 모달 구현 함수
// handleOpen = (e) => {
//   const { open }
// }

  handleInput = (e) => {
    const { id } = e.target;
    this.setState({
      pageSelection: id,
    });
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
      case 'General':
        this.setState({ pageSelection: 'Refund' });
        break;
      case 'Refund':
        this.setState({ pageSelection: 'Payment' });
        break;
      default:
    }
  };

  render() {
    let content;

    if (this.state.pageSelection === 'General') {
      content = (
        <General
          id='General'
          checked={this.state.General}
          delegate={this.checkboxClicked}
        />
      );
    } else if (this.state.pageSelection === 'Refund') {
      content = (
        <Refund
          id='Refund'
          checked={this.state.Refund}
          delegate={this.checkboxClicked}
        />
      );
    } else if (this.state.pageSelection === 'Payment') {
      content = (
        <Payment
          id='Payment'
          checked={this.state.Payment}
          delegate={this.checkboxClicked}
        />
      );
    } else {
      content = (
        <Luggage
          id='Luggage'
          checked={this.state.Luggage}
          delegate={this.checkboxClicked}
        />
      );
    }

    return (
      <div className='ReservNote'>
        <div className='title'>예약 유의사항</div>
        <div className='list'>
          <div className={'General ' + (this.state.pageSelection === 'General'? 'selected': '')} id='General' onClick={this.handleInput}>
            일반규정
          </div>
          <div className={'Refund ' + (this.state.pageSelection === 'Refund'? 'selected': '')} id='Refund' onClick={this.handleInput}>
            예약/환불 규정
          </div>
          <div className={'Payment ' + (this.state.pageSelection === 'Payment'? 'selected': '')} id='Payment' onClick={this.handleInput}>
            결제규정
          </div>
          <div className='Luggage' id='Luggage' onClick={this.handleOpen}>
            수하물정보
          </div>
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
          >zzz</Modal> */}
        </div>
        <div className='summary'>{content}</div>
      </div>
    );
  }
}

export default ReservNote;
