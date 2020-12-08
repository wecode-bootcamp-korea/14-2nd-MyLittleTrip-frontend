import React, { Component } from "react";
import AgreeCheckBox from './AgreeCheckBox';


class Refund extends Component {
  render() {
    return (
    <div className='Refund'>
      밀푀유 나베
      <br></br>
      <br></br>
      1. 디포리 팩과 표고버섯으로 육수를 내줍니다.
      <br></br>
      <br></br>
      2. 그 사이, 알배추, 꺳잎, 버섯들을 씻고 손질 해줍니다.
      <br></br>
      <br></br>
      3. 배추위에 깻잎을 쌓아주고 고기들도 쌓아줍니다. 이걸 두번 반복 두번 반복'(feat.홍진호)'.
      <br></br>
      <br></br>
      4. 그리고 3 ~ 4 등분으로 컷팅 해줍시다.
      <br></br>
      <br></br>
      5. 적당한 냄비를 골라 자른 것들 이쁘게 잘 담아줍니다.
      <br></br>
      <br></br>
      6. 야무지게 먹어줍니다.
      <AgreeCheckBox id={this.props.id} text='예약/환불 규정에 동의합니다.' checked={this.props.checked} delegate={this.props.delegate}/>
    </div>
    )
  };
}

export default Refund;