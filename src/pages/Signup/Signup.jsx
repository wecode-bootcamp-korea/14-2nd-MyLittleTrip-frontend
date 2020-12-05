import React from "react";
import { Link } from "react-router-dom";
import Navtrans from "../../Components/Navtrans/Navtrans";
import Footer from "../../Components/Footer/Footer";
import {
  GreetingBox,
  GreetingIcon,
  GreetingContext,
  KakaoButton,
  OtherOptions,
} from "../../Components/StyledComponents/Greeting";
import { KAKAO_SIGNUP_API } from "../../config";
const { Kakao } = window;
const Signup = (props) => {
  const kakaoSignup = () => {
    Kakao.init(process.env.REACT_APP_KAKAO_LOGIN_API_KEY);
    Kakao.Auth.login({
      success: (authObj) => {
        fetch(KAKAO_SIGNUP_API, {
          method: "post",
          headers: { Authorization: authObj.access_token },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.message === "SUCCESS") {
              alert("회원가입에 성공했습니다!");
              props.history.push("/login");
              return;
            }
          });
      },
      fail: (err) => {
        alert(JSON.stringify(err));
      },
    });
  };
  return (
    <>
      <Navtrans themeColor="normal" />
      <GreetingBox>
        <GreetingIcon>✋</GreetingIcon>
        <GreetingContext>
          <p className="greetingTitle">반갑습니다!</p>
          <p className="greetingText">여행의 모든 것, 마이리틀트립</p>
          <KakaoButton onClick={kakaoSignup}>
            <img
              src="https://i.ibb.co/vzxFhCS/2020-12-03-5-12-24.png"
              alt="kakao logo"
            />
            <span>카카오로 바로 시작</span>
          </KakaoButton>
          <OtherOptions>
            <div className="otherPlatform">
              <img
                src="https://i.ibb.co/Y2k6M9t/iconfinder-square-facebook-317727.png"
                alt="facebook"
              />
              <span>페이스북</span>
              <img src="https://i.ibb.co/RyPYGX6/naverBtn.png" alt="naver" />
              <span>네이버</span>
              <img
                src="https://i.ibb.co/ynrJV6x/iconfinder-112-gmail-email-mail-4202011.png"
                alt="email"
              />
              <span>이메일</span>
            </div>
            <div className="gotoLogin">
              <span>이미 아이디가 있으신가요?</span>
              <Link to="/login">로그인</Link>
            </div>
          </OtherOptions>
        </GreetingContext>
      </GreetingBox>
      <Footer />
    </>
  );
};
export default Signup;
