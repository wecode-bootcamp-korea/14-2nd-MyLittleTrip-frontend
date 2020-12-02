import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className='Footer'>
        <div className='footerContainer'>
          <div className='footerModule'>
            <div className='footerModuleTop'>
              <div className='moduleLeft'>
                <div className='moduleContact'>
                  <h1 className='costumerService'>고객센터</h1>
                  <h2 className='serviceNumber'>1234-5678</h2>
                </div>
                <p className='serviceTime'>
                  <span className='serviceDay'>월~금:</span>
                  '09:00~18:00' '(점심시간 12:00-13:00)'
                  <span className='serviceHoliday'>공휴일&주말</span>
                  '1:1 채팅 상담만 가능'
                  <br></br>
                  <span className='serviceRefund'>항공권 환불, 변경 접수</span>
                  '월~금 09:00-17:00'
                </p>
                <button className='chatService'>1:1 채팅상담</button>
              </div>
              <div className='moduleRight'>
                <div className='compIntroduceContainer'>
                  <h3 className='compIntroduce'>소개</h3>
                  <ul className='compIntroduceList'>
                    <li className='compIntro'>회사소개</li>
                    <li className='compHire'>채용</li>
                  </ul>
                </div>
                <div className='compPartnerContainer'>
                  <h3 className='compPartner'>파트너</h3>
                  <ul className='compPartnerList'>
                    <li className='addPartner'>파트너 등록하기</li>
                    <li className='affiliateProgram'>Affiliate 프로그램</li>
                    <li className='realGuide'>리얼가이드</li>
                    <li className='guideBlog'>가이드 블로그</li>
                  </ul>
                </div>
                <div className='compSupportContainer'>
                  <h3 className='compSupport'>지원</h3>
                  <ul className='compSupportList'>
                    <li className='commonQuestion'>자주 묻는 질문</li>
                    <li className='lowestPrice'>최저가 보장제</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='footerModuleBottom'>
              <ul className='modulePolicy'>
                <li className='policyContract'>이용 약관</li>
                <li className='policyPrivate'>개인정보 처리방침</li>
                <li className='policyRefund'>취소 및 환불 정책</li>
              </ul>
              <ul calssName='socialNetwork'>{/* 적당한 아이콘 찾아 넣기 */}</ul>
              <p className='compAddress'>
                상호명 마이리틀트립ㅣ공동대표 김병준 김현지 박승제 박승찬 이승윤
                장규석ㅣ사업자등록번호 123-45-67891
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
