import React, { useRef } from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { RiCoupon3Line } from "react-icons/ri";
import { FiPlusCircle, FiGift } from "react-icons/fi";
import { useOutsideClick } from "../../Hooks/clickOutside";

const ProfileMenu = ({ visible, setProfileVisible, profileImageRef, setIsLogined }) => {
  const containerRef = useRef(null);

  useOutsideClick(containerRef, setProfileVisible, profileImageRef);

  const logoutClick = () => {
    // localStorage.removeItem("token"); //일단 이렇게 두겠습니다...토큰은 소듕하니까
    setIsLogined(false);
  };

  return (
    <ProfileMenuContainer className={visible} ref={containerRef}>
      <div className="userInfo">
        <div className="profileImageContainer">
          <FaUserCircle className="userIcon" size="2em" color="gray" />
        </div>
        <div className="userInfoRight">
          <p className="userName">기맹끼</p>
          <p>프로필 관리</p>
        </div>
      </div>
      <MenuItemContainer>
        <MenuItem>
          <FiPlusCircle size="1.4em" color="gray" />
          <span>포인트</span>
        </MenuItem>
        <MenuItem>
          <RiCoupon3Line size="1.4em" color="gray" />
          <span>쿠폰</span>
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer>
        <MenuItem>
          <FiGift size="1.4em" color="gray" />
          <span>친구 초대</span>
        </MenuItem>
      </MenuItemContainer>
      <MenuItemContainer paddingLR="0" border="none">
        <MenuItem onClick={logoutClick}>
          <span>로그아웃</span>
        </MenuItem>
      </MenuItemContainer>
    </ProfileMenuContainer>
  );
};

const ProfileMenuContainer = styled.section`
  position: absolute;
  top: 70px;
  right: -5px;
  width: 200px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  opacity: 0;
  pointer-events: none;
  transition: ease-in-out 0.2s;
  cursor: pointer;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 8%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgba(255, 255, 255, 0.9) transparent;
  }

  &.visible {
    opacity: 1;
    transition: ease-in-out 0.2s;
    pointer-events: auto;
  }

  .userInfo {
    display: flex;
    padding: 20px 0 15px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    .profileImageContainer {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }

    .userInfoRight {
      .userName {
        color: rgba(0, 0, 0, 0.8);
        margin-bottom: 8px;
        font-size: 1rem;
        font-weight: 500;
      }
      p {
        color: #2b96ed;
        font-size: 0.8rem;
      }
    }
  }
`;

const MenuItemContainer = styled.div`
  padding: 10px ${(props) => props.paddingLR || "0"} 10px ${(props) => props.paddingLR || "20px"};
  border-bottom: ${(props) => props.border || "1px solid rgba(0, 0, 0, 0.2)"};
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;

  span {
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.9rem;
  }
`;

export default ProfileMenu;
