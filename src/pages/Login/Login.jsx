import React from "react";
import { Link } from "react-router-dom";
import Navtrans from "../../Components/Navtrans/Navtrans";
import {
  GreetingBox,
  GreetingIcon,
  GreetingContext,
  KakaoButton,
  OtherOptions,
} from "../../Components/StyledComponents/Greeting";
import { KAKAO_LOGIN_API } from "../../config";

const { Kakao } = window;

const Login = (props) => {
  const kakaoLogin = () => {
    Kakao.init(process.env.REACT_APP_KAKAO_LOGIN_API_KEY);
    Kakao.Auth.login({
      success: (authObj) => {
        console.log("login", authObj);
        fetch(KAKAO_LOGIN_API, {
          method: "post",
          headers: { Authorization: authObj.access_token },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.access_token) {
              localStorage.setItem("token", res.access_token);
              alert("환영합니다");
              props.history.push("/");
              return;
            }
            console.log(res);
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
        <GreetingContext titlebold="bold">
          <p className="greetingTitle">Welcome!</p>
          <p className="greetingText">여행의 모든 것, 마이리틀트립</p>
          <KakaoButton onClick={kakaoLogin}>
            <img src="https://i.ibb.co/vzxFhCS/2020-12-03-5-12-24.png" alt="kakao logo" />
            <span>카카오로 계속하기</span>
          </KakaoButton>
          <OtherOptions>
            <div className="otherPlatform">
              <img src="https://i.ibb.co/Y2k6M9t/iconfinder-square-facebook-317727.png" alt="facebook" />
              <span>페이스북</span>
              <img src="https://i.ibb.co/RyPYGX6/naverBtn.png" alt="naver" />
              <span>네이버</span>
              <img src="https://i.ibb.co/ynrJV6x/iconfinder-112-gmail-email-mail-4202011.png" alt="email" />
              <span>이메일</span>
            </div>
            <div className="gotoLogin">
              <span>아직 회원이 아니신가요?</span>
              <Link to="/signup">회원가입</Link>
            </div>
          </OtherOptions>
        </GreetingContext>
      </GreetingBox>
    </>
  );
};

export default Login;
