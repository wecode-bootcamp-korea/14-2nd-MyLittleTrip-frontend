import React, { Component } from "react";
import './FinalCheck.scss';

class FinalCheck extends Component {

  render() {
    return (
    <div className='FinalCheck'>
      <div className='reservAgreement'>
        <div className='agreementTittle'>예약 및 결제 전 동의사항</div>
        {/* ::after */}
      </div>
      <div className='agreementContentContainer'>
        <ul className='agreementContent'>
          <li><b>낙장불입 </b>한번 끊으면 끝입니다. 우리는 노빠구입니다. 손님</li>
          <li>싸늘하다. 가슴에 비수가 날아와 꽂힌다.</li>
          <li>하지만 걱정하지 마라. 손은 눈보다 빠르니까</li>
          <li>아귀한테선 밑에서 한 장, 정마담도 밑에서 한 장, 나 한 장</li>
          <li>아귀한테서 다시 밑에서 한 장, 이제 정마담에게 마지막...</li>
          <li>동작 그만. 밑장 빼기냐?</li>
          <li>뭐야?</li>
          <li>내 패하고 정마담 패를 밑에서 뻈지?</li>
        </ul>
      </div>
      <p className='checkAgreementBox'>
        <input className='agreeCheckBox' id='AgreementCheck' type='checkbox' />
        <span className='lastWarning'>패 건들지마! 손모가지 날라가붕게. 해머 갖고 와</span>
      </p>
    </div>
    )
  }
}

export default FinalCheck;