import React, { Component } from "react";
import "./Luggage.scss";
class Luggage extends Component {
  render() {
    return (
      <div className="Luggage">
        <div className="summary">
          <div className="modalTitle">
            <h1>항공사 별 규정</h1>
          </div>
          <div className="content">
            <div className="jeju">
              <div className="flgihtType">
                <div className="number">7C</div>
                <div className="name">(제주항공)</div>
              </div>
              <div className="ruleOfLuggage">
                <div className="consignmnetCover">
                  <div className="consignment">※ 위탁</div>
                  <div className="maximum">
                    일반석 무료 수하물 허용량 : 15kg
                  </div>
                  <div className="over">초과 시 kg당 2,000원</div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="content">
            <div className="jinAir">
              <div className="flgihtType">
                <div className="number">LJ</div>
                <div className="name">(진에어)</div>
              </div>
              <div className="ruleOfLuggage">
                <div className="consignmnetCover">
                  <div className="consignment">※ 위탁</div>
                  <div className="maximum">
                    일반석 무료 수하물 허용량 : 15kg
                  </div>
                  <div className="over">초과 시 kg당 2,000원</div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="content">
            <div className="tWay">
              <div className="flgihtType">
                <div className="number">TW</div>
                <div className="name">(티웨이)</div>
              </div>
              <div className="ruleOfLuggage">
                <div className="consignmnetCover">
                  <div className="consignment">※ 위탁</div>
                  <div className="maximum">
                    일반석 무료 수하물 허용량 : 15kg
                  </div>
                  <div className="over">초과 시 kg당 2,000원</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Luggage;
