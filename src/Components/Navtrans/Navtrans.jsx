import React, { useState, useRef, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import ProfileMenu from "./Components/ProfileMenu";
import { loggedIn, setUserInformation } from "../../store/actions";
import { CATEGORIES, LOGIN_PROFILE_MENUS } from "./navdata";
import { USER_INFO } from "../../config";
import { theme } from "../../styles/theme";

const Navtrans = ({ themeColor }) => {
  const [profileVisible, setProfileVisible] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);

  const profileImageRef = useRef(null);

  const dispatch = useDispatch();
  const isLogin = useSelector((store) => store.loginReducer); // 리덕스 츄라이 중입니다
  const userInfo = useSelector((store) => store.userInfoReducer);

  const handleProfilePicClick = useCallback(() => {
    setProfileVisible(!profileVisible);
  }, [profileVisible]);

  const fetchUserInfo = async () => {
    if (userInfo) return;

    try {
      const response = await axios({
        method: "get",
        url: USER_INFO,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      dispatch(loggedIn());
      dispatch(setUserInformation(response.data.user_info));
    } catch (error) {
      console.log(error);
    }
  };

  if (localStorage.getItem("token")) {
    fetchUserInfo();
  }

  return (
    <NavContainer themeColor={themeColor}>
      <Navbar themeColor={themeColor}>
        <div className="navLeft">
          <Link to="/">
            <LogoImage themeColor={themeColor} />
          </Link>
          <div className="searchBar">
            <BsSearch
              className="searchIcon"
              size="1em"
              color={themeColor === "normal" || isInputFocused ? "gray" : "white"}
            />
            <input
              type="text"
              placeholder="여행지나 상품을 검색해보세요"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
          </div>
        </div>
        {isLogin ? (
          <>
            <LoginProfileBar themeColor={themeColor}>
              {LOGIN_PROFILE_MENUS.map((menu) => {
                if (menu.name === "예약내역")
                  return (
                    <Link key={menu.id} to="/reservation">
                      <p>{menu.name}</p>
                    </Link>
                  );
                return <p key={menu.id}>{menu.name}</p>;
              })}
              <div className="profileImageContainer" ref={profileImageRef}>
                <FaUserCircle
                  className="userIcon"
                  onClick={handleProfilePicClick}
                  size="2em"
                  color={themeColor === "normal" ? "gray" : theme.transparentWhite}
                />
              </div>
            </LoginProfileBar>
            <ProfileMenu
              visible={profileVisible ? "visible" : ""}
              setProfileVisible={setProfileVisible}
              profileImageRef={profileImageRef}
            />
          </>
        ) : (
          <LogoutProfileBar themeColor={themeColor}>
            <p>파트너 등록하기</p>
            <p>
              <Link to="/login">로그인</Link>
            </p>
            <p className="signUpButton">
              <Link to="/signup">회원가입</Link>
            </p>
          </LogoutProfileBar>
        )}
      </Navbar>
      <NavBottom themeColor={themeColor}>
        {CATEGORIES.map(({ id, name }) => (
          <div className="categoryItem" key={id}>
            <p>{name}</p>
          </div>
        ))}
      </NavBottom>
    </NavContainer>
  );
};

const LogoImage = styled.img.attrs((props) => ({
  alt: "my little trip logo",
  src: props.themeColor === "normal" ? "/images/logo.png" : "/images/logo_white.png",
}))`
  width: 128px;
  margin: 0 20px;
`;

const NavContainer = styled.div`
  z-index: 100;
  border-bottom: 1px solid
    ${(props) => (props.themeColor === "normal" ? "rgba(0,0,0,0.05)" : "rgba(255, 255, 255, 0.2)")};
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1060px;
  height: 72px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);

  .navLeft {
    display: flex;
    align-items: center;

    .searchBar {
      display: flex;
      align-items: center;
      position: relative;

      .searchIcon {
        position: absolute;
        left: 23px;
      }

      input {
        width: 330px;
        height: 48px;
        margin-left: 10px;
        padding-left: 40px;
        color: ${(props) => (props.themeColor === "normal" ? "rgba(0,0,0,0.8)" : "white")};
        background-color: ${(props) =>
          props.themeColor === "normal" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.15)"};
        font-size: 15px;
        border-radius: 4px;
        transition: ease-in-out 0.5s;

        &::placeholder {
          color: ${({ themeColor, theme }) => (themeColor === "normal" ? "rgba(0,0,0,0.5)" : theme.transparentWhite)};
        }

        &:hover {
          background-color: ${(props) =>
            props.themeColor === "normal" ? "rgba(136, 16, 16, 0.06)" : "rgba(255, 255, 255, 0.25)"};
        }

        &:focus {
          outline: none;
          background-color: white;
          color: rgba(0, 0, 0, 0.8);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.12);
          transition: ease-in-out 0.5s;
        }
      }
    }
  }

  .profileBar {
    display: flex;
    align-items: center;

    p {
      margin-right: 20px;
      font-size: 15px;
      color: ${({ themeColor, theme }) => (themeColor === "normal" ? "#666d75" : theme.transparentWhite)};
      cursor: pointer;
    }

    .userIcon {
      cursor: pointer;
    }
  }
`;

const NavBottom = styled.nav`
  display: flex;
  max-width: 1060px;
  height: 50px;
  margin: 0 auto;

  .categoryItem {
    padding: 0 10px;

    &:nth-child(2) {
      p {
        text-align: center;
        color: ${(props) => (props.themeColor === "normal" ? "#495056" : "white")};
        border-bottom: 4px solid ${(props) => (props.themeColor === "normal" ? "#3c92e0" : "white")};
      }
    }

    p {
      padding: 15px 7px;
      color: ${({ themeColor, theme }) => (themeColor === "normal" ? theme.darkGray : "rgba(255,255,255,0.7)")};
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: ease-in-out 0.2s;
      border-bottom: 4px solid rgba(255, 255, 255, 0);

      &:hover {
        border-bottom: 4px solid
          ${({ themeColor, theme }) => (themeColor === "normal" ? theme.lightBlue : "rgba(255,255,255,0.5)")};
        transition: ease-in-out 0.2s;
      }
    }
  }
`;

const LoginProfileBar = styled.div`
  display: flex;
  align-items: center;

  p {
    padding: 7px 10px;
    margin-right: 10px;
    font-size: 15px;
    color: ${({ themeColor, theme }) => (themeColor === "normal" ? "#666d75" : theme.transparentWhite)};
    transition: ease-in-out 0.2s;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => (props.themeColor === "normal" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.2)")};
      border-radius: 4px;
      transition: ease-in-out 0.2s;
    }
  }

  .userIcon {
    cursor: pointer;
  }
`;

const LogoutProfileBar = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
    padding: 7px 10px;
    color: ${({ themeColor, theme }) => (themeColor === "normal" ? "#666d75" : theme.transparentWhite)};
    font-size: 15px;
    border-radius: 3px;
    transition: ease-in-out 0.2s;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => (props.themeColor === "normal" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.2)")};
      transition: ease-in-out 0.2s;
    }

    a {
      color: ${({ themeColor, theme }) => (themeColor === "normal" ? "#666d75" : theme.transparentWhite)};
    }

    &.signUpButton {
      padding: 9px 30px 7px 30px;
      border: 1px solid
        ${({ themeColor, theme }) => (themeColor === "normal" ? theme.deepBlue : theme.transparentWhite)};

      &:hover {
        background-color: ${(props) =>
          props.themeColor === "normal" ? "rgba(79, 171, 242, 0.1)" : "rgba(255,255,255,0.2)"};
        transition: ease-in-out 0.2s;
      }
      a {
        color: ${({ themeColor, theme }) => (themeColor === "normal" ? theme.deepBlue : theme.transparentWhite)};
      }
    }
  }
`;

export default Navtrans;
