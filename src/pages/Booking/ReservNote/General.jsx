import React, { Component } from "react";
import "./General.scss";
import AgreeCheckBox from "./AgreeCheckBox";

class General extends Component {
  render() {
    return (
      <div className="General">
        <h1>복무신조</h1>
        <br></br>
        하나, 우리는 자유민주주의를 수호하며 조국통일의 역군이 된다.
        <br></br>
        <br></br>
        둘, 우리는 실전과 같은 훈련으로 지상전의 승리자가 된다.
        <br></br>
        <br></br>
        셋, 우리는 법규를 준수하고 상관의 명령에 복종하다.
        <br></br>
        <br></br>
        넷, 우리는 명예와 신의를 지키며 전우애로 굳게 단결한다.
        <AgreeCheckBox
          id={this.props.id}
          text="일반규정에 동의합니다."
          checked={this.props.checked}
          delegate={this.props.delegate}
        />
      </div>
    );
  }
}

export default General;
