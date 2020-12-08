import React, { Component } from "react";
import AgreeCheckBox from './AgreeCheckBox';

class Payment extends Component {

  render() {
    return (
    <div className='Payment'>
      코드의 삶 <span>저자 김병준</span>
      <br></br>
      <br></br>
      썼다 지우고
      <br></br>
      썼다 지우고
      <br></br><br></br>
      이 코드가 맞다 싶으면
      <br></br>
      틀려서 다시 지우고
      <br></br><br></br>
      제일 먼저 떠올라 빨리 쓴 코드는
      <br></br>
      오답이라 빨리 지우지만
      <br></br><br></br>
      뒤늦게 힘들게 원리를 알아낸 코드는
      <br></br>
      결국 마지막까지 남아 빛을 바랜다.
      <AgreeCheckBox id={this.props.id} text='일반규정에 동의합니다.' checked={this.props.checked} delegate={this.props.delegate}/>
    </div>
    )
  }
}

export default Payment;